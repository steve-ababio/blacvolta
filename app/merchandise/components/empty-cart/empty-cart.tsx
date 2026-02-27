import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

const EmptyCart = () => {
  return (
    <div className="flex items-center justify-center h-full px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center text-center max-w-sm"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-secondary"
        >
          <ShoppingBag className="h-10 w-10 text-[#858585]" strokeWidth={1.5} />
        </motion.div>

        {/* Text */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-3 text-xl font-medium tracking-tight text-white"
        >
          Your cart is empty
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10 text-sm leading-relaxed text-[#858585]"
        >
          Looks like you haven&apos;t added anything yet. <br />
          Start exploring to find something you love.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="rounded-full px-8 text-sm font-medium tracking-wide"
            onClick={() => window.location.href = "/merchandise"}
          >
            Continue Shopping
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EmptyCart;
