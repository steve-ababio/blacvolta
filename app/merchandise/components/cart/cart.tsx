'use client'
import { useCart } from '@/app/context/cart-context';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, Tag } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { formatCurrency } from '@/app/utils/utils';
import EmptyCart from '../empty-cart/empty-cart';
export default function CartDrawer() {
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeFromCart,
    discountCode,
    setDiscountCode,
    discountAmount,
    applyDiscount,
    isFetchingTax,
    subTotal,
    taxAmount,

  } = useCart();
  
  const router = useRouter();
  const [discountError, setDiscountError] = useState(false);

  const handleApplyDiscount = () => {
    const success = applyDiscount();
    setDiscountError(!success && discountCode.length > 0);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    router.push('/checkout');
  };
  const discountValue =
   discountAmount > 0 ? subTotal * discountAmount : 0;
   const discountedSubtotal = subTotal - discountValue;

   useEffect(() => {
    if (isCartOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
  
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
  
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
  
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isCartOpen]);
  
  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="overlay z-40"
            onClick={() => setIsCartOpen(false)}
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="cart-drawer z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6">
              <h2 className="text-xl text-white font-bold">Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-[#1f1f1f] rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <EmptyCart />
              ) : (
                items.map((item) => (
                  <motion.div
                    key={`${item.product.id}-${item.size}`}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="flex gap-3 bg-[#1f1f21] p-2 rounded-md"
                  >
                    <div className="w-24 h-24 bg-[#121212] rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.imageUrls[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div className='flex justify-between items-center'>
                            <h3 className="font-medium truncate text-white">{item.product.name}</h3>
                            <button
                                onClick={() => removeFromCart(item.product.id, item.size)}
                                className="p-1 hover:bg-[#ef4343]/20 text-[#777777] rounded transition-colors ml-auto"
                                >
                                <Trash2 className="w-4 h-4" />
                            </button>
                      </div>
                      {item.size && (
                        <p className="text-sm text-[#939393]">Size: {item.size}</p>
                      )}
                      <div className='flex justify-between items-center'>
                        <p className=" font-semibold text-sm text-white ">{formatCurrency(item.product.price,item.product.currency)}</p>
                        <div className="flex items-center gap-3 border border-gray-400 rounded-sm w-fit py-0.5 px-1">
                                <button
                                    onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.size)}
                                    className="p-1 hover:bg-[#1f1f1f] rounded transition-colors"
                                >
                                    <Minus className="w-3 h-3 text-white" />
                                </button>
                                <span className="text-sm font-medium text-white">{item.quantity}</span>
                                <button
                                    onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.size)}
                                    className="p-1 hover:bg-[#1f1f1f] text-white rounded transition-colors"
                                >
                                    <Plus className="w-3 h-3 text-white" />
                                </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-[#333333] p-6 space-y-4">
                {/* Discount Code */}
                <div>
                  <div className="flex gap-2">
                    <div className="flex-1 flex items-center bg-[#1f1f1f] rounded-md">
                      <Tag className="w-4 h-4 ml-3 text-[#a6a6a6]" />
                      <input
                        type="text"
                        value={discountCode}
                        onChange={(e) => {
                          setDiscountCode(e.target.value);
                          setDiscountError(false);
                        }}
                        placeholder="Discount code"
                        className="discount-input"
                      />
                    </div>
                    <button
                      onClick={handleApplyDiscount}
                      className="px-4 btn-secondary rounded-sm text-sm font-medium"
                    >
                      Apply
                    </button>
                  </div>
                  {discountError && (
                    <p className="text-destructive text-xs mt-1">Invalid discount code</p>
                  )}
                  {discountAmount > 0 && (
                    <p className="text-brand-green text-xs mt-1">
                      {Math.round(discountAmount * 100)}% discount applied!
                    </p>
                  )}
                </div>
                  
                {/* Totals */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-[#a6a6a6]">Subtotal</span>
                        <span className="text-white">₵{subTotal.toFixed(2)}</span>
                    </div>

                    {/* Discount */}
                    {discountAmount > 0 && (
                        <div className="flex justify-between text-sm text-[#21c45d]">
                        <span>Discount</span>
                        <span>-₵{discountValue.toFixed(2)}</span>
                        </div>
                    )}

                    {/* Tax */}
                    {/* <div className="flex justify-between text-sm">
                        <span className="text-[#a6a6a6]">Tax</span>
                        <span className="text-white">
                        {isFetchingTax ? 'Calculating…' : `₵${taxAmount.toFixed(2)}`}
                        </span>
                    </div> */}

                    {/* Total */}
                    <div className="flex justify-between text-white text-lg font-bold pt-2 border-t border-[#333333]">
                        <span>Total</span>
                        <span>
                        ₵
                        {(
                            // discountedSubtotal +
                            // taxAmount
                            discountedSubtotal
                        ).toFixed(2)}
                        </span>
                    </div>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-3 btn-primary rounded-md text-lg font-medium"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
