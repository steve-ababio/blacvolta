import { RiInstagramLine, RiMailLine, RiTwitterLine } from "react-icons/ri";
import NavItem from "@/app/components/navitem/navitem";
import { useState } from "react";
import { menuItems } from "@/app/data/global";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/app/context/cart-context";


export default function DesktopMenu(){
    const pathname = usePathname();
    const { totalItems, setIsCartOpen } = useCart();
    const [hoveredTab, setHoveredTab] = useState<string | null>(null)
    return(
        <>
            <div className="xl:flex grow hidden items-center gap-x-3 py-5 ">
                {
                    menuItems.map(({label,href})=>{
                        const isActive = href === pathname;
                        const isHovered = hoveredTab === label;
                        return(
                            <button
                                key={href}
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
            <div className="hidden items-center justify-center gap-x-4 xl:flex py-4">
                <NavItem href="https://twitter.com/blacvolta">
                    <RiTwitterLine size={30} />
                </NavItem>
                <NavItem href="https://instagram.com/blacvolta">
                    <RiInstagramLine size={30} />
                </NavItem>
                <NavItem href="mailto:blacvolta@gmail.com">
                    <RiMailLine size={30} />
                </NavItem>
                {
                    pathname === "/merchandise" && (
                        <button 
                            className="relative p-2"
                            onClick={() => setIsCartOpen(true)}
                        >
                            <ShoppingBag className="w-6 h-6 text-white" />
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                    )
                }       
            </div>
        </>
    )
}