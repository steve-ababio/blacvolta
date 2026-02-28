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
  }
export default function TeamGrid(){
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
    return(
        <>
            {
                bvteam.map((member,index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative cursor-pointer flex flex-col justify-center bg-black/10 p-3 rounded-lg items-center"
                        onClick={() => setSelectedMember(member)}
                        >
                        <div className="relative w-full flex justify-center items-center mb-2 overflow-hidden">
                            <img
                            src={member.image}
                            alt={member.name}
                            className=" h-[350px] w-full object-[0_20px] object-cover transition-transform duration-700 rounded-t-lg"
                            referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="flex flex-col border border-gray-200/40 rounded-md justify-center w-full items-center text-center p-4">
                            <h3 className="text-lg text-left text-white font-normal mb-1">{member.name}</h3>
                            <p className="text-sm opacity-40 text-white tracking-widest font-normal">{member.role}</p>
                        </div>
                        <button className="text-black bg-white py-2 px-3 rounded-sm w-full mt-2" onClick={() => setSelectedMember(member)}>More details</button>
                        
                    </motion.div>
                    
                ))
            }
          <TeamModal selectedMember={selectedMember} setSelectedMember={setSelectedMember}/>
        </>
    )
}