'use client'
import { RiInstagramLine, RiMailLine, RiTwitterLine } from "react-icons/ri";
import NavItem from "@/app/components/navitem/navitem";
import { menuItems } from "@/app/data/global";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, Variants } from "framer-motion";

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

    const containerVariants: Variants = {
        hidden: { 
            opacity: 0,
            y: "-100%",
        },
        visible: { 
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 26,
                stiffness: 170,
                mass: 1,
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        },
        exit: { 
            opacity: 0,
            y: "-100%",
            transition: {
                type: "spring",
                damping: 24,
                stiffness: 200,
                staggerChildren: 0.03,
                staggerDirection: -1,
                when: "afterChildren"
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { 
            opacity: 0, 
            y: 20,
            scale: 0.95
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 22
            }
        },
        exit: { 
            opacity: 0, 
            y: -10,
            scale: 0.95,
            transition: {
                duration: 0.15
            }
        }
    };

    const footerVariants: Variants = {
        hidden: { 
            opacity: 0, 
            y: 15
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 22,
                delay: 0.1
            }
        },
        exit: { 
            opacity: 0,
            y: 10,
            transition: {
                duration: 0.15
            }
        }
    };

    return(
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex min-h-[calc(100vh-60px)] bottom-0 items-center flex-col z-[100] fixed top-[60px] left-0 right-0 bg-black overflow-y-auto pb-10"
        >
            <div 
                className="flex flex-col gap-y-10 py-10 items-center w-full"
                onMouseLeave={() => setHoveredTab(null)}
            >
                {
                    menuItems.map(({label,href})=>{
                        const isActive = href === pathname;
                        const isHovered = hoveredTab === label
                        return(
                            <motion.div 
                                key={href} 
                                variants={itemVariants}
                                className="w-full flex justify-center"
                            >
                                <NavItem 
                                    href={href}
                                    isActive={isActive}
                                    isHovered={isHovered}
                                    showPill={hoveredTab !== null ? isHovered : isActive}
                                    onMouseEnter={() => setHoveredTab(label)}
                                    onClick={() =>{
                                        label === "HOME" || label === "EVENT CALENDAR" ? closeMobileMenu() : null;
                                    }}
                                >
                                    {label}
                                </NavItem>
                            </motion.div>
                        )
                    })
                }
            </div>
            <motion.div 
                variants={footerVariants}
                className="text-center before:content-[''] before:mb-3 before:block w-[85%] mx-auto before:h-[1px] before:w-full before:bg-[#707070] relative z-20"
            >
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
            </motion.div>
        </motion.div>
    )
}