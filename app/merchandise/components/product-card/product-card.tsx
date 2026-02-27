'use client'
import { getColorHex, Product } from '@/app/data/product';
import { formatCurrency } from '@/app/utils/utils';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const {name,type,foreground,price,currency,quantity,imageUrls} = product;
  const amount = formatCurrency(price,currency);
  const isOutOfStock = quantity === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isOutOfStock ? 0.50 : 1,
        y: 0,
      }}
      exit={{ opacity: 0, y: 20 }}
      className={` product-card cursor-pointer group rounded-[32px]`}
      onClick={onClick}
    >
      <div className="aspect-square p-4 overflow-hidden bg-[#121212] rounded-[32px]">
        <img
          src={imageUrls[0]}
          alt={name}
          className="w-full rounded-[16px]  h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-xs text-[#a6a6a6] uppercase tracking-wider">
            {type}
          </div>
          <div 
            className="w-4 h-4 rounded-full border border-[#333333]"
            style={{ backgroundColor: getColorHex(foreground) }}
          />
        </div>
        
        <h3 className="font-medium text-white">{name}</h3>
        <div className='flex items-center justify-between'>
            <p className="text-base text-[#c9c9c9] font-normal">{amount}</p>
            {/* {isOutOfStock && (
              <div className='bg-gray-400/30 text-white px-2 py-1 rounded-md text-sm'>Out of stock</div>
            )}  */}
        </div>
        
      </div>
    </motion.div>
  );
}
