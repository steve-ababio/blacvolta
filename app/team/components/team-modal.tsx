'use client'
import { AnimatePresence, motion } from "framer-motion"
import { TeamMember } from "./team-grid"
import { X } from "lucide-react";

interface TeamModalProps {
    selectedMember: TeamMember | null;
    setSelectedMember: React.Dispatch<React.SetStateAction<TeamMember | null>>;
}

export default function TeamModal({ selectedMember, setSelectedMember }: TeamModalProps) {
    return (
        <AnimatePresence>
            {selectedMember && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/85 backdrop-blur-md"
                        onClick={() => setSelectedMember(null)}
                    />
                    
                    {/* Modal Box */}
                    <motion.div
                        layoutId={`member-${selectedMember.id}`}
                        initial={{ opacity: 0, scale: 0.96, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 20 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative bg-neutral-950 border border-neutral-900 w-full max-w-4xl max-h-[90vh] md:max-h-[80vh] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden z-10"
                    >
                        {/* Close button */}
                        <button 
                            onClick={() => setSelectedMember(null)}
                            className="absolute top-4 right-4 z-30 p-2 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-white rounded-full border border-neutral-800 transition-colors"
                            id="close-modal"
                        >
                            <X size={18} />
                        </button>

                        {/* Image Panel */}
                        <div className="w-full md:w-[45%] h-[300px] md:h-auto relative bg-neutral-900 flex-shrink-0">
                            <img 
                                src={selectedMember.image} 
                                alt={selectedMember.name}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                        </div>

                        {/* Content Panel */}
                        <div className="w-full md:w-[55%] p-6 md:p-10 flex flex-col overflow-y-auto">
                            <div className="mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{selectedMember.name}</h2>
                                <p className="text-sm text-[#f47b25] font-medium tracking-wide uppercase mt-1">{selectedMember.role}</p>
                            </div>

                            <div className="flex-grow">
                                {selectedMember.bio ? (
                                    <div className="space-y-4">
                                        <h4 className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">Biography</h4>
                                        <p className="text-sm leading-relaxed text-neutral-300 font-light font-kamerik">
                                            {selectedMember.bio}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <h4 className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">About</h4>
                                        <p className="text-sm leading-relaxed text-neutral-400 font-light italic font-kamerik">
                                            {selectedMember.name} is a key partner and leader at BlacVolta, driving the curation of African nightlife, entertainment, and lifestyle experiences on a global scale.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}