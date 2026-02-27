import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface SizeGuideProps {
  onClose: () => void;
}

const sizeData = [
  { size: 'XS', chest: '34-36"', waist: '28-30"', length: '27"' },
  { size: 'S', chest: '36-38"', waist: '30-32"', length: '28"' },
  { size: 'M', chest: '38-40"', waist: '32-34"', length: '29"' },
  { size: 'L', chest: '40-42"', waist: '34-36"', length: '30"' },
  { size: 'XL', chest: '42-44"', waist: '36-38"', length: '31"' },
  { size: 'XXL', chest: '44-46"', waist: '38-40"', length: '32"' },
];

export default function SizeGuide({ onClose }: SizeGuideProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="overlay z-[60]"
        onClick={onClose}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="fixed inset-x-4 top-1/2 -translate-y-1/2 max-w-lg mx-auto bg-[#0d0d0d] rounded-2xl z-[60] p-6 max-h-[80vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Size Guide</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#1f1f1f] rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-white">
                <th className="py-3 px-4 text-left font-medium">Size</th>
                <th className="py-3 px-4 text-left font-medium">Chest</th>
                <th className="py-3 px-4 text-left font-medium">Waist</th>
                <th className="py-3 px-4 text-left font-medium">Length</th>
              </tr>
            </thead>
            <tbody>
              {sizeData.map((row) => (
                <tr key={row.size} className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-white">{row.size}</td>
                  <td className="py-3 px-4 text-[#a6a6a6]">{row.chest}</td>
                  <td className="py-3 px-4 text-[#a6a6a6]">{row.waist}</td>
                  <td className="py-3 px-4 text-[#a6a6a6]">{row.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-[#a6a6a6]">
          All measurements are in inches. For the best fit, measure yourself and compare with the chart above.
        </p>
      </motion.div>
    </>
  );
}
