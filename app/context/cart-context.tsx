'use client';
import React, { createContext, useContext, useState, ReactNode, useEffect, useMemo, useCallback, useRef } from 'react';
import { Product } from '../data/product';
import axios from 'axios';

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
  selectedColor?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity: number, size?: string, selectedColor?: string) => void;
  removeFromCart: (productId: string, size?: string) => void;
  updateQuantity: (productId: string, quantity: number, size?: string) => void;
  clearCart: () => void;
  subTotal:number,
  totalItems: number;
  totalPrice: number;
  taxAmount:number;
  discountCode: string;
  setDiscountCode: (code: string) => void;
  discountAmount: number;
  applyDiscount: () => boolean;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isFetchingTax:boolean
}

const CART_TTL_MS = 1000 * 60 * 60 * 72;
const ENCRYPTION_SECRET = process.env.NEXT_PUBLIC_CART_SECRET || "blacvolta_cart_secret_v1";
const VALID_CODES: Record<string, number> = {
  'SAVE10': 0.10,
  'SAVE20': 0.20,
  'WELCOME': 0.15,
};

const CART_STORAGE_KEY = "blacvolta_cart";

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

async function getKey(secret: string): Promise<CryptoKey> {
  const hash = await crypto.subtle.digest(
    "SHA-256",
    textEncoder.encode(secret)
  );

  return crypto.subtle.importKey(
    "raw",
    hash,
    { name: "AES-GCM" },
    false,
    ["encrypt", "decrypt"]
  );
}

async function encryptData(data: unknown, secret: string): Promise<string> {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await getKey(secret);

  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    textEncoder.encode(JSON.stringify(data))
  );

  return JSON.stringify({
    iv: Array.from(iv),
    data: Array.from(new Uint8Array(encrypted)),
  });
}

async function decryptData(payload: string, secret: string): Promise<any> {
  const parsed = JSON.parse(payload);
  const key = await getKey(secret);

  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: new Uint8Array(parsed.iv) },
    key,
    new Uint8Array(parsed.data)
  );

  return JSON.parse(textDecoder.decode(decrypted));
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [discountCode, setDiscountCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  const [isFetchingTax, setIsFetchingTax] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const hasMounted = useRef(false);

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subTotal = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      ),
    [items]
  );

  const totalPrice = useMemo(() => {
    const discountValue = subTotal * discountAmount;
    return subTotal - discountValue + taxAmount;
  }, [subTotal, discountAmount, taxAmount]);

  const fetchTax = useCallback(async () => {
    if (subTotal <= 0) {
      setTaxAmount(0);
      return;
    }
    try {
      setIsFetchingTax(true);
      const response = await axios.post(
        "https://api.blacvolta.com/api/tax/calculate",
        { basePrice: subTotal, currency: "GHS" }
      );

      setTaxAmount(response.data.data.totalTax ?? 0);
    } catch {
      setTaxAmount(0);
    } finally {
      setIsFetchingTax(false);
    }
  }, [subTotal]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    (async () => {
      try {
        const stored = localStorage.getItem(CART_STORAGE_KEY);
        if (!stored) return;

        const decrypted = await decryptData(stored, ENCRYPTION_SECRET);

        if (Date.now() > decrypted.expiresAt) {
          localStorage.removeItem(CART_STORAGE_KEY);
          return;
        }

        setItems(decrypted.items ?? []);
        setDiscountCode(decrypted.discountCode ?? "");
        setDiscountAmount(decrypted.discountAmount ?? 0);
      } catch {
        localStorage.removeItem(CART_STORAGE_KEY);
      }
    })();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    (async () => {
      const payload = {
        items,
        discountCode,
        discountAmount,
        expiresAt: Date.now() + CART_TTL_MS,
      };

      const encrypted = await encryptData(payload, ENCRYPTION_SECRET);
      localStorage.setItem(CART_STORAGE_KEY, encrypted);
    })();
  }, [items, discountCode, discountAmount]);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    fetchTax();
  }, [fetchTax]);

  const addToCart = (
    product: Product,
    quantity: number,
    size?: string,
    selectedColor?: string
  ) => {
    setItems((prev) => {
      const index = prev.findIndex(
        (i) => i.product.id === product.id && i.size === size
      );

      if (index >= 0) {
        const updated = [...prev];
        updated[index].quantity += quantity;
        return updated;
      }

      return [...prev, { product, quantity, size, selectedColor }];
    });
  };

  const removeFromCart = (productId: string, size?: string) => {
    setItems((prev) =>
      prev.filter(
        (i) => !(i.product.id === productId && i.size === size)
      )
    );
  };

  const updateQuantity = (
    productId: string,
    quantity: number,
    size?: string
  ) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }

    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId && i.size === size
          ? { ...i, quantity }
          : i
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    setDiscountCode("");
    setDiscountAmount(0);
    setTaxAmount(0);
    localStorage.removeItem(CART_STORAGE_KEY);
  };

  const applyDiscount = (): boolean => {
    const discount = VALID_CODES[discountCode.toUpperCase()];
    if (!discount) {
      setDiscountAmount(0);
      return false;
    }
    setDiscountAmount(discount);
    return true;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        subTotal,
        taxAmount,
        totalPrice,
        discountCode,
        setDiscountCode,
        discountAmount,
        applyDiscount,
        isCartOpen,
        setIsCartOpen,
        isFetchingTax,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}