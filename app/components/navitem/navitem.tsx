import { motion } from "framer-motion"
import Link from "next/link"
import React from "react"

type NavItemProps = {
    href?: string,
    isHovered?: boolean,
    isActive?: boolean,
    showPill?: boolean,
    children: React.ReactNode,
    onMouseEnter?: () => void,
    onMouseLeave?: () => void,
    onClick?: () => void
}

export default function NavItem({
    href, 
    children, 
    isActive, 
    isHovered, 
    showPill,
    onMouseEnter,
    onMouseLeave,
    onClick
}: NavItemProps) {
    const active = showPill !== undefined ? showPill : (isActive || isHovered);
    const textColor = active ? "text-white" : "text-bvgray hover:text-white";

    return (
        <Link 
            className={`h-fit relative py-2 px-6 font-kamerik font-normal rounded-full md:text-xs transition-colors duration-200 block ${textColor}`} 
            href={href || ""}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >
            <span className="relative z-10">
                {children}
            </span>
            {active && (
                <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-[#181818] rounded-full"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
            )}
        </Link>
    )
}