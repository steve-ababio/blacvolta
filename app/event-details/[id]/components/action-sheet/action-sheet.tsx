import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ReactNode } from "react";

interface ActionItem {
  icon: ReactNode;
  label: string;
  onClick?: (e:React.MouseEvent) => void;
}

interface ActionSheetProps {
  isOpen: boolean;
  onClose: () => void;
  actions: ActionItem[];
  columns?: 2 | 3 | 4;
}

export function ActionSheet({ isOpen, onClose, actions, columns = 3 }: ActionSheetProps) {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[4000] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Action Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ 
              type: "spring", 
              damping: 30, 
              stiffness: 300,
              mass: 0.8
            }}
            className="fixed bottom-0 left-0 right-0 z-[5000] mx-auto max-w-lg"
          >
            <div className="rounded-t-3xl bg-white px-6 pb-8 pt-3">
              {/* Handle */}
              <div className="mb-6 flex justify-center">
                <div className="h-1.5 w-16 rounded-full bg-action-sheet-handle" />
              </div>

              {/* Action Items Grid */}
              <div className={`grid ${gridCols[columns]} gap-4 mb-6`}>
                {actions.map((action, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={(e:React.MouseEvent) => {
                        action.onClick?.(e);
                    }}
                    className="group flex flex-col items-center gap-3 rounded-2xl p-4 transition-colors hover:bg-gray-200"
                  >
                    <div className="flex h-12 w-12 items-center justify-center text-foreground transition-transform group-hover:scale-110">
                      {action.icon}
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {action.label}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onClick={onClose}
                className="w-full rounded-xl text-white bg-black/90 py-3.5 text-lg font-semibold text-foreground transition-colors"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
