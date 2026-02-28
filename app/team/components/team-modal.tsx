'use client'
import { AnimatePresence,motion } from "framer-motion"
import { TeamMember } from "./team-grid"
import { X } from "lucide-react";

interface TeamModalProps {
    selectedMember: TeamMember | null;
    setSelectedMember: React.Dispatch<React.SetStateAction<TeamMember | null>>;
}
export default function TeamModal({selectedMember,setSelectedMember}:TeamModalProps) {
  console.log(selectedMember);
    return (
      <AnimatePresence>
      {selectedMember && (
        <div className="fixed inset-0  z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={() => setSelectedMember(null)}
          />
          
          <motion.div
            layoutId={`member-${selectedMember.id}`}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-[#141414] border h-[95vh] md:h-auto border-white/10 w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col md:flex-row"
          >
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur rounded-full border border-white/10 hover:bg-white hover:text-black transition-colors text-white"
              id="close-modal"
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <div className="w-full md:w-1/2 p-8 pb-0 bg-[#1a1a1a] h-full">
              <div className="h-[500px] rounded-xl shadow-lg">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 p-8 pt-4 flex flex-col h-full overflow-y-auto">
              <div className="mb-3 text-center md:text-left">
                <h2 className="text-3xl font-bold text-white mb-1">{selectedMember.name}</h2>
                <p className="text-sm opacity-50 font-medium text-white/70">{selectedMember.role}</p>
              </div>

              <div className="space-y-8 overflow-y-auto h-full">
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <h4 className="text-lg font-bold border-b-2 border-orange-500 pb-1 text-white">About</h4>
                  </div>
                  <p className="text-sm leading-relaxed  text-white/80">
                    {selectedMember.bio}
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
    )

}