// 'use client'
// import { getColorHex, Product } from '@/app/data/product';
// import { formatCurrency } from '@/app/utils/utils';
// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';

// interface ProductCardProps {
//   product: Product;
//   onClick: () => void;
// }

// export default function ProductCard({ product, onClick }: ProductCardProps) {
//   const { name, type, foreground, price, currency, quantity, imageUrls } = product;
//   const amount = formatCurrency(price, currency);
//   const isOutOfStock = quantity === 0;
//   const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

//   const paginate = (newDirection: number) => {
//     const newIndex =
//       (currentIndex + newDirection + imageUrls.length) % imageUrls.length;

//     setCurrentIndex([newIndex, newDirection]);
//   };
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{
//         opacity: isOutOfStock ? 0.50 : 1,
//         y: 0,
//       }}
//       exit={{ opacity: 0, y: 20 }}
//       className={` product-card font-kamerik cursor-pointer group rounded-[32px]`}
//       onClick={onClick}
//     >
//       <div className="aspect-square p-4 overflow-hidden bg-[#121212] rounded-[32px]">
//         {/* <img
//           src={imageUrls[0]}
//           alt={name}
//           className="w-full rounded-[16px]  h-full object-cover transition-transform duration-500 group-hover:scale-105"
//         /> */}
//          <motion.img
//             key={currentIndex}
//             src={imageUrls[currentIndex]}
//             alt={name}
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             onDragEnd={(e, info) => {
//               if (info.offset.x > 50) paginate(-1);
//               if (info.offset.x < -50) paginate(1);
//             }}
//             className="w-full h-full object-cover rou
//             nded-[16px]"
//         />
//       </div>
      
//       <div className="p-4 space-y-2">
//         <div className="flex items-start justify-between">
//           <div className='flex flex-col items-start gap-2'>
//               <h3 className="font-medium text-white">{name}</h3>
//             {/* <div 
//               className="w-4 h-4 rounded-full border border-[#333333]"
//               style={{ backgroundColor: getColorHex(foreground) }}
//             /> */}
//             <div className="text-xs text-[#a6a6a6] uppercase tracking-wider">
//               {type}
//             </div>
//           </div>
//             <div className='flex items-center justify-between'>
//               <p className="text-base text-[#c9c9c9] font-normal">{amount}</p>
//               {/* {isOutOfStock && (
//                 <div className='bg-gray-400/30 text-white px-2 py-1 rounded-md text-sm'>Out of stock</div>
//               )}  */}
//             </div>
            
//           </div>
         
        
//       </div>
//     </motion.div>
//   );
// }

'use client'
import { getColorHex } from "@/app/data/product";
import { GroupedProduct } from "@/app/types/types";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

type ProductCardProps = {
  product: GroupedProduct;
  onClick: () => void;
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function ProductCard({ product,onClick }: ProductCardProps) {
  const { type, variants } = product;
  const carouselPrev = useRef<HTMLButtonElement>(null);
  const carouselNext = useRef<HTMLButtonElement>(null);
  const productFaces = useRef<HTMLButtonElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [[variantIndex, direction], setVariantIndex] =
    useState<[number, number]>([0, 0]);

  const [imageIndex, setImageIndex] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const paginate = (newDirection: number) => {
    const newIndex =
      (variantIndex + newDirection + variants.length) %
      variants.length;

    setVariantIndex([newIndex, newDirection]);
    setImageIndex(0);
    setSelectedSize(null);
  };

  const activeVariant = variants[variantIndex];
  const images = activeVariant.imageUrls;

  // const isVariantOutOfStock = activeVariant.quantity.every(
  //   (size) => size.quantity === 0
  // );

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };
  function ShowProductDetails(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement;
    if (
      carouselPrev.current?.contains(target) ||
      carouselNext.current?.contains(target) ||
      target.closest('[data-color-swatch]')  ||
      productFaces.current?.contains(target)
    ) {
      return;
    }
    onClick()
  }
  return (
    <div onClick={(e)=>ShowProductDetails(e)} className="product-card cursor-pointer rounded-[32px] font-kamerik">

      {/* IMAGE SECTION */}
      <div className="aspect-square p-4 overflow-hidden bg-[#121212] rounded-[32px] relative">

        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={variantIndex}
            src={images[imageIndex]}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeInOut" }}
            drag={isMobile ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className={`w-full h-full object-cover rounded-[16px] `}
          />
        </AnimatePresence>

        {/* Desktop Arrows */}
        {!isMobile && (
          <>
            <button
              ref={carouselPrev}
              onClick={() => paginate(-1)}
              className="absolute flex items-center justify-center left-5 text-3xl top-1/2 -translate-y-1/2 bg-black/60 text-white w-8 h-8 rounded-full"
            >
              ‹
            </button>
            <button
              ref={carouselNext}
              id="carousel-prev"
              onClick={() => paginate(1)}
              className="absolute flex items-center justify-center text-3xl right-5 top-1/2 -translate-y-1/2 bg-black/60 text-white w-8 h-8 rounded-full"
            >
              ›
            </button>
          </>
        )}

        {/* Front / Back Toggle */}
        {images.length > 1 && (
          <button
            ref={productFaces}
            onClick={() =>
              setImageIndex((prev) => (prev === 0 ? 1 : 0))
            }
            className="absolute backdrop-blur-[30px] top-6 right-6 bg-black/50 text-white text-xs px-3.5 shadow-lg py-2 rounded-full"
          >
            {imageIndex === 0 ? "Back" : "Front"}
          </button>
        )}
      </div>

      {/* INFO SECTION */}
      <div className="p-4 space-y-4">

        <div className="text-xs text-[#a6a6a6] uppercase tracking-wider">
          {type}
        </div>

        {/* COLOR SELECTORS */}
        <div className="flex gap-2">
          {variants.map((variant, index) => {
            // const outOfStock = variant.sizes.every(
            //   (size) => size.quantity === 0
            // );

            return (
              <button
                key={variant.id}
                data-color-swatch
                onClick={() => paginate(index - variantIndex)}
                className={`w-5 h-5 rounded-full border-2 ${
                  index === variantIndex
                    ? "border-white"
                    : "border-[#333]"
                }`}
                style={{
                  backgroundColor: getColorHex(
                    variant.foreground
                  ),
                }}
              />
            );
          })}
        </div>

        {/* SIZE SELECTOR */}
        {/* <div className="flex gap-2">
          {activeVariant.sizes.map((size) => {
            // const disabled = size.quantity === 0;

            return (
              <button
                key={size.size}
                disabled={disabled}
                onClick={() => setSelectedSize(size.size)}
                className={`px-3 py-1 text-xs rounded-md border ${
                  selectedSize === size.size
                    ? "border-white text-white"
                    : "border-[#333] text-gray-400"
                } ${disabled ? "opacity-30 cursor-not-allowed" : ""}`}
              >
                {size.size}
              </button>
            );
          })}
        </div> */}
      </div>
    </div>
  );
}