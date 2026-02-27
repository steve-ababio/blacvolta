'use client'
import { RiInstagramLine, RiMailLine, RiTwitterLine, RiTwitterXLine } from "react-icons/ri";
import NavItem from "@/app/components/navitem/navitem";
import { FiMail } from "react-icons/fi";
import { menuItems } from "@/app/data/global";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface MobileMenuProps {
    closeMobileMenu:()=>void;
    isOpen: boolean;
}
export default function MobileMenu({closeMobileMenu,isOpen}:MobileMenuProps){
    const pathname = usePathname();
    const [hoveredTab, setHoveredTab] = useState<string | null>(null);
    useEffect(() => {
        if (isOpen) {
          // Save current scroll position
          const scrollY = window.scrollY;
          document.body.style.position = 'fixed';
          document.body.style.top = `-${scrollY}px`;
          document.body.style.width = '100%';
        } else {
          // Restore scroll position
          const scrollY = document.body.style.top;
          document.body.style.position = '';
          document.body.style.top = '';
          document.body.style.width = '';
      
          if (scrollY) {
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
          }
        }
      
        return () => {
          document.body.style.position = '';
          document.body.style.top = '';
          document.body.style.width = '';
        };
      }, [isOpen]);
    return(
        <div className="flex min-h-screen items-center flex-col z-[100] duration-300 origin-top fixed top-[60px] left-0 right-0 bg-black">
            <div className="flex flex-col gap-y-12 py-10 ">
                {
                    menuItems.map(({label,href})=>{
                        const isActive = href === pathname;
                        const isHovered = hoveredTab === label
                        return(
                            <button
                                key={href}
                                onClick={() =>{
                                    label === "HOME" || label === "EVENT CALENDAR" ? closeMobileMenu() : null;
                                }}
                                onMouseEnter={() => setHoveredTab(label)}
                                onMouseLeave={() => setHoveredTab(null)}
                                className="relative"
                            >
                                <NavItem 
                                    href={href}
                                    isActive={isActive}
                                    isHovered={isHovered}
                                >
                                    {label}
                                </NavItem>
                            </button>
                        )
                    })
                }
            </div>
            <div className="text-center before:content-[''] before:mb-3 before:block w-[85%] mx-auto before:h-[1px] before:w-full before:bg-[#707070] relative z-20">
                <div className="flex w-full gap-x-4 justify-center py-4">
                     <NavItem href="https://twitter.com/blacvolta">
                        <RiTwitterLine size={30} />
                    </NavItem>
                    <NavItem href="https://instagram.com/blacvolta">
                        <RiInstagramLine size={30} />
                    </NavItem>
                    <NavItem href="mailto:blacvolta@gmail.com">
                        <RiMailLine size={30} />
                    </NavItem>
                </div>
            </div>
        </div>
    )
}