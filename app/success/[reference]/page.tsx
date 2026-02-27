
// import { motion } from 'framer-motion';
// import { CheckCircle, Package, Mail } from 'lucide-react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { useEffect } from 'react';
// import { useCart } from '../context/cart-context';

// export default function OrderSuccess() {
//   const navigate = useRouter();
//   const { clearCart} = useCart();
//   useEffect(()=>{
//       clearCart();
//   },[]);
  
//   return (
//     <div className="min-h-screen bg-background flex items-center justify-center p-6">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="max-w-[32rem] w-full text-center space-y-6"
//       >
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.2, type: 'spring' }}
//           className="w-20 h-20 bg-[#21c45d]/20 rounded-full flex items-center justify-center mx-auto"
//         >
//           <CheckCircle className="w-10 h-10 text-[#21c45d]" />
//         </motion.div>

//         <div>
//           <h1 className="text-3xl font-bold mb-2 text-white">Order Confirmed!</h1>
//           <p className="text-[#a6a6a6]">
//             Thank you for your purchase. Your order has been received.
//           </p>
//         </div>

//         <div className="bg-[#0d0d0d] border border-[#333333] rounded-xl p-6 space-y-4">
//           <div className="flex items-center justify-center gap-2 text-sm">
//             {/* <span className="text-[#a6a6a6]">Order Number:</span> */}
//             {/* <span className="font-mono font-medium text-white">{orderNumber}</span> */}
//           </div>

//           <div className="space-y-3 text-sm">
//             <div className="flex items-center gap-3 p-3 bg-[#1f1f1f] rounded-lg">
//               <Mail className="w-5 h-5 text-[#a6a6a6]" />
//               <span className="text-white">Confirmation email sent</span>
//             </div>
//             <div className="flex items-center gap-3 p-3 bg-[#1f1f1f] rounded-lg">
//               <Package className="w-5 h-5 text-[#a6a6a6]" />
//               <span className="text-white">You'll receive delivery updates via email</span>
//             </div>
//           </div>
//         </div>

//         <button
//           onClick={() => navigate.push("/merchandise")}
//           className="w-full py-3 btn-primary rounded-full text-lg font-medium"
//         >
//           Continue Shopping
//         </button>
//       </motion.div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ShoppingCart, Plus, CheckCircle2 } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCart } from '../../context/cart-context';
import { formatCurrency } from '../../utils/utils';
import { Order } from '@prisma/client';
import useSWR from 'swr';

export const dynamic = "force-dynamic";
const containerVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut",
      // staggerChildren belongs here, but sometimes TS prefers it 
      // when the object is explicitly typed as Variants
      staggerChildren: 0.1 
    } 
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 }
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function SuccessPage({ params }: { params: { reference: string } }) {
  const reference = params.reference;
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useRouter();
  const { clearCart} = useCart();
  const {data,error,isLoading} = useSWR(`/api/order/${reference}`,fetcher);
  useEffect(() => {
    if (!isLoading && data) {
      clearCart();
      fetch("/api/payment/clear", { method: "POST" });
    }
  }, [isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Failed to load order</div>;
  }
  return (
    // Background: Darker, muted purple/indigo
    <div className="min-h-screen bg-black/50 flex items-center justify-center p-4 font-sans antialiased">
      
      {/* Card: Deep Charcoal / Slate */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-[#1a1a1e] w-full max-w-[375px] rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden border border-white/5"
      >
        
        {/* Header */}
        <div className="pt-10 pb-4 px-8 flex justify-between items-center border-b border-white/5">
          <div className="w-6" />
          <h1 className="font-bold text-lg tracking-tight text-white/90">Store</h1>
          <ShoppingCart className="w-5 h-5 text-gray-500" />
        </div>

        {/* Success Message */}
        <motion.div variants={itemVariants} className="text-center py-12 px-8">
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            transition={{ delay: 0.3, type: "spring" }}
            className="flex justify-center mb-4"
          >
            <CheckCircle2 className="w-12 h-12 text-[#D49A35]" strokeWidth={1.5} />
          </motion.div>
          <h2 className="text-2xl font-bold text-white">Order completed!</h2>
          <p className="text-gray-500 text-[10px] mt-2 uppercase tracking-[0.2em]">
            Order number : {data?.id}
          </p>
        </motion.div>

        {/* Dotted Divider: Dimmed for dark mode */}
        <div className="px-10">
          <div className="border-t border-dashed border-white/10 w-full" />
        </div>

        {/* Order Details Section */}
        <div className="px-10 py-8">
          <div 
            className="flex justify-between items-center cursor-pointer group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="font-bold text-sm text-gray-300">Ordered Items</span>
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Plus className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
            </motion.div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden pt-4 space-y-3 text-xs"
              >
                {
                  data.items.map((item:any)=>(
                    <div key={item.id} className="flex justify-between text-gray-400">
                      <span>{item.product.name} x {item.quantity}</span>
                      <span className="text-white">{formatCurrency(item.product.price * item.quantity,item.product.currency)}</span>
                    </div>
                  ))
                }
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div variants={itemVariants} className="text-sm space-y-4 pt-6">
            <div className="flex justify-between text-gray-500">
              <span>Subtotal</span>
              <span className="font-bold text-white/90">{formatCurrency(data.payment.subTotal,data.payment.currency)}</span>
            </div>
            {/* <div className="flex justify-between text-gray-500">
              <span>Payment</span>
              <span className="font-bold text-white/90 text-xs italic">PayPal</span>
            </div> */}
            <div className="flex justify-between items-baseline pt-4 border-t border-white/5">
              <span className="text-gray-500 font-medium">Total</span>
              <span className="text-3xl font-extrabold text-[white]">{formatCurrency(data.payment.subTotal,data.payment.currency)}</span>
            </div>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="px-10 pb-14 space-y-3">
          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: "#D49A38" }}
            whileTap={{ scale: 0.98 }}
            onClick={()=>navigate.push("/merchandise")}
            className="w-full bg-[#D49A35] text-white py-4 rounded-xl font-bold text-sm shadow-lg  transition-colors"
          >
            Keep shopping
          </motion.button>
          {/* <motion.button 
            whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-transparent border border-white/10 text-gray-300 py-4 rounded-xl font-bold text-sm transition-colors"
          >
            Order Details
          </motion.button> */}
        </motion.div>
      </motion.div>
    </div>
  );
}