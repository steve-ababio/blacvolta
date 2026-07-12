'use client'
import { bvteam } from "@/app/data/team/data";
import { motion } from "framer-motion";
import { useState } from "react";
import TeamModal from "./team-modal";

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    bio: string;
    adjust?: boolean;
}

export default function TeamGrid() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
    
    return (
        <>
            {bvteam.map((member, index) => (
                <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1, 
                        ease: [0.16, 1, 0.3, 1] 
                    }}
                    className="group cursor-pointer flex flex-col"
                    onClick={() => setSelectedMember(member)}
                >
                    {/* Image Wrapper */}
                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800/50">
                        <img
                            src={member.image}
                            alt={member.name}
                            className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.04] filter grayscale group-hover:grayscale-0 ${
                                member.adjust ? 'object-[center_-20px]' : 'object-[center_0px]'
                            }`}
                            referrerPolicy="no-referrer"
                        />
                        {/* Elegant overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                        
                        {/* Hover visual cue (faint accent border highlight) */}
                        <div className="absolute inset-0 border border-transparent group-hover:border-blacvolta-gold-300 rounded-xl transition-colors duration-300" />
                    </div>

                    {/* Metadata */}
                    <div className="flex flex-col pt-4">
                        <h3 className="font-kamerik text-lg text-white font-medium group-hover:text-blacvolta-gold transition-colors duration-300">
                            {member.name}
                        </h3>
                        <p className="font-kamerik text-xs text-neutral-400 uppercase tracking-wider font-light mt-1">
                            {member.role}
                        </p>
                        
                        <button 
                            className="text-black bg-white hover:bg-neutral-100 active:scale-[0.98] font-kamerik text-sm font-medium py-2 px-3  w-full mt-3 transition-all duration-200 text-center"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent trigger event bubble up to container onClick
                                setSelectedMember(member);
                            }}
                        >
                            More details
                        </button>
                    </div>
                </motion.div>
            ))}
            
            <TeamModal selectedMember={selectedMember} setSelectedMember={setSelectedMember} />
        </>
    );
}