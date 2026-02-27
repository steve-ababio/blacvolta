"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DesktopMenu from "@/app/components/desktop/desktopmenu";
import MobileMenu from "@/app/components/mobile/mobilemenu";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { usePathname } from "next/navigation";
import { useCart } from "@/app/context/cart-context";
import { ShoppingBag } from "lucide-react";

const SCROLL_THRESHOLD = 30;
export default function NavBar(){  
    const [scrolldistancereached,setScrolledDistanceReached] = useState(false);
    const [showmobilemenu,setShowMobileMenu] = useState(false);
    const pathname = usePathname();
    const { totalItems, setIsCartOpen } = useCart();
    useEffect(function(){
        if(window){
            window.addEventListener("scroll",checkScrollDistance);
        }
        return function(){
            window.removeEventListener("scroll",checkScrollDistance);
        }
    },[])
    function checkScrollDistance(){
        if(window.scrollY >= SCROLL_THRESHOLD){
            setScrolledDistanceReached(true);
        }else{
            setScrolledDistanceReached(false);
        }
    }
    function toggleMobileMenu(){
        setShowMobileMenu(!showmobilemenu);
    }
    function closeMobileMenu(){
        setShowMobileMenu(false);
    }
    return (
        <nav className={`min-w-full fixed z-[100] top-0 left-0 h-[60px] md:h-auto  ${showmobilemenu ? 'xl:bg-transparent bg-bvprimary':''}  flex flex-col md:flex-row md:px-[2rem] xl:px-[3rem] md:py-4 justify-between
            text-bvlight backdrop-blur ${scrolldistancereached ? 'bg-bvprimary py-[8px] lg:py-[5px] duration-300':''}
        `}>
            <header className={`self-center grow flex items-center w-full px-4 xl:w-auto lg:px-0 xl:block justify-between`}>
                <Image alt="Blacvolta logo" className="aspect-[4/3] object-contain xl:h-auto xl:w-auto" width={60} height={60}  src="/assets/images/logo.png" priority />
                <div className="flex items-center gap-x-4">
                    {
                        pathname === "/merchandise" && (
                            <button 
                                className="relative p-2 block lg:hidden"
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
                    <button aria-label="menu button" className="xl:hidden" onClick={toggleMobileMenu}>
                        {showmobilemenu ? <CgClose size={30} />:<RxHamburgerMenu  size={30} color="white"/>}
                    </button>
                </div>  
            </header>
            <DesktopMenu />
            {showmobilemenu && <MobileMenu isOpen={showmobilemenu} closeMobileMenu={closeMobileMenu} />}
        </nav>
    )
}