import { motion } from "framer-motion"
import Link from "next/link"
import React from "react"

type NavItemProps = {
    href?:string,
    isHovered?:boolean,
    isActive?:boolean,
    children:React.ReactNode
}
export default function NavItem({href, children,isActive,isHovered}:NavItemProps){
    const showPill = isActive || isHovered;
    return(
        <>
            <Link className="h-fit relative py-2 px-6 font-kamerik font-normal rounded-[4px] overflow-hidden text-[0.88rem]" 
                href={href||""}
            >
                <span className="relative z-10">
                    {children}
                </span>
                {showPill && (
                    <motion.div
                        layoutId="active-pill"
                        className="absolute backdrop-blur w-full h-full  block inset-0 bg-[#181818] rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                )}
            </Link>
        </>
    )
}

// after:h-[2px] after:rounded-[3px] after:bg-white after:block
//                 after:w-full hover:after:translate-x-0  
//                 after:duration-200 after:-translate-x-[calc(100%+12px)]