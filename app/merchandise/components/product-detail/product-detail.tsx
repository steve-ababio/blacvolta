import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Ruler, Truck, RotateCcw, Plus, Minus } from 'lucide-react';
import { useCart } from '@/app/context/cart-context';
import { getColorHex, Product } from '@/app/data/product';
import SizeGuide from '../size-guide/size-guide';


interface ProductDetailProps {
  product: Product;
  products:Product[],
  onClose: () => void;
}

export default function ProductDetail({ product, onClose,products }: ProductDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'shipping'>('details');
  const { addToCart, setIsCartOpen } = useCart();

  // Find color variants
  const colorVariants = products.filter(
    p => p.type === product.type && p.tag === product.tag && p.id !== product.id
  );

  const [selectedProduct, setSelectedProduct] = useState(product);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedProduct.imageUrls.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProduct.imageUrls.length - 1 : prev - 1
    );
  };

  const handleAddToCart = () => {
    if (selectedProduct.sizes && !selectedSize && selectedProduct.sizes.length > 0) {
      return;
    }
    addToCart(selectedProduct, quantity, selectedSize || undefined, selectedProduct.foreground);
    onClose();
    // setIsCartOpen(true);
  };

  const handleColorChange = (newProduct: Product) => {
    setSelectedProduct(newProduct);
    setCurrentImageIndex(0);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="overlay z-50"
        onClick={onClose}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="fixed inset-4 md:inset-10 bg-[#0D0D0D] rounded-2xl z-50 overflow-hidden flex flex-col md:flex-row"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/80 backdrop-blur-sm rounded-full hover:bg-black transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Image Gallery */}
        <div className="relative flex-1 bg-[#121212] flex items-center justify-center min-h-[40vh] md:min-h-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              src={selectedProduct.imageUrls[currentImageIndex]}
              alt={selectedProduct.name}
              className="w-full h-full object-contain p-8"
            />
          </AnimatePresence>

          {selectedProduct.imageUrls.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 p-2 bg-black/80 backdrop-blur-sm rounded-full hover:bg-black transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 p-2 bg-black/80 backdrop-blur-sm rounded-full hover:bg-black transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </>
          )}

          {/* Image dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {selectedProduct.imageUrls.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentImageIndex ? 'bg-foreground' : 'bg-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 p-6 md:p-10 overflow-y-auto">
          <div className="space-y-6">
            <div>
              <p className="text-sm text-[#A6A6A6] uppercase tracking-wider mb-2">
                {selectedProduct.type}
              </p>
              <h2 className="text-2xl text-white md:text-3xl font-bold">{selectedProduct.name}</h2>
              <p className="text-2xl text-white font-semibold mt-2">${selectedProduct.price}</p>
            </div>

            {/* Color Swatches */}
            {colorVariants.length > 0 && (
              <div>
                <p className="text-sm text-white font-medium mb-3">Color: {selectedProduct.foreground}</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleColorChange(product)}
                    className={`text-white color-swatch ${
                      selectedProduct.id === product.id ? 'color-swatch-active' : ''
                    }`}
                    style={{ backgroundColor: getColorHex(product.foreground) }}
                  />
                  {colorVariants.map((variant:any) => (
                    <button
                      key={variant.id}
                      onClick={() => handleColorChange(variant)}
                      className={`color-swatch ${
                        selectedProduct.id === variant.id ? 'color-swatch-active' : ''
                      }`}
                      style={{ backgroundColor: getColorHex(variant.foreground) }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {selectedProduct.sizes && (
              <div>
                {/* <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-white font-medium">Size</p>
                  <button
                    onClick={() => setShowSizeGuide(true)}
                    className="text-sm text-[#a6a6a6] hover:text-[#ffffff] flex items-center gap-1 transition-colors"
                  >
                    <Ruler className="w-4 h-4 text-white" />
                    Size Guide
                  </button>
                </div> */}
                <div className="flex text-white flex-wrap gap-2">
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`size-btn border border-[#333333] ${
                        selectedSize === size ? 'bg-white text-black' : ''
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <p className="text-sm font-medium text-white mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border text-white border-[#333333] rounded-md hover:bg-[#1f1f1f] transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg text-white font-medium w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-[#333333]  text-white rounded-md hover:bg-[#1f1f1f] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-[#333333]">
              <div className="flex gap-6">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'details'
                      ? 'border-white text-white'
                      : 'border-transparent text-[#a6a6a6] hover:text-white'
                  }`}
                >
                  Details
                </button>
                <button
                  onClick={() => setActiveTab('shipping')}
                  className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'shipping'
                      ? 'border-white text-white'
                      : 'border-transparent text-[#a6a6a6] hover:text-white'
                  }`}
                >
                  Shipping & Returns
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'details' ? (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-[#a6a6a6] leading-relaxed"
                >
                  {selectedProduct.description}
                </motion.div>
              ) : (
                <motion.div
                  key="shipping"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-[#a6a6a6] mt-0.5" />
                    <div>
                      <p className="font-medium text-white">Shipping</p>
                      <p className="text-sm text-[#a6a6a6]">
                        Shipping costs are calculated at checkout based on your location and order details.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <RotateCcw className="w-5 h-5 text-[#a6a6a6] mt-0.5" />
                    <div>
                      <p className="font-medium text-white">Easy Returns</p>
                      <p className="text-sm text-[#a6a6a6]">
                        30-day return policy. Items must be unworn with original tags attached.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={selectedProduct.sizes && selectedProduct.sizes.length > 0 && !selectedSize}
              className="w-full py-4 btn-primary rounded-full text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {selectedProduct.sizes && selectedProduct.sizes.length > 0 && !selectedSize ? 'Select a Size' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showSizeGuide && <SizeGuide onClose={() => setShowSizeGuide(false)} />}
      </AnimatePresence>
    </>
  );
}
