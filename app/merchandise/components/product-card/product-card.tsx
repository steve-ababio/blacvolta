'use client'
import { getColorHex } from "@/app/data/product";
import { GroupedProduct } from "@/app/types/types";
import { formatLabel, formatMoney } from "@/app/utils/utils";
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
  const { variants } = product;
  const foregroundColors = [...new Set(variants.map((variant) => variant.foreground))];
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
            className={`w-full h-full object-contain rounded-[16px] `}
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
        <div className="flex items-center justify-between">
          <div className="text-xs text-[#a6a6a6] uppercase tracking-wider">
            {formatLabel(variants[0].name)}
          </div>
          <span className="text-white text-xs font-semibold ">{formatMoney(variants[0].price,variants[0].currency)}</span>
        </div>

        {/* COLOR SELECTORS */}
        <div className="flex gap-2">
          {foregroundColors.map((color, index) => {
            // const outOfStock = variant.sizes.every(
            //   (size) => size.quantity === 0
            // );

            return (
              <button
                key={color}
                data-color-swatch
                onClick={() => paginate(index - variantIndex)}
                className={`w-5 h-5 rounded-full border-2 ${
                  index === variantIndex
                    ? "border-white"
                    : "border-[#333]"
                }`}
                style={{
                  backgroundColor: getColorHex(
                    color
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