"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DesktopMenu from "@/app/components/desktop/desktopmenu";
import MobileMenu from "@/app/components/mobile/mobilemenu";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";

const SCROLL_THRESHOLD = 30;
export default function NavBar(){  
    const [scrolldistancereached,setScrolledDistanceReached] = useState(false);
    const [showmobilemenu,setShowMobileMenu] = useState(false);
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
        <nav className={`
            min-w-full fixed z-[1000] top-0 left-0 h-[60px] lg:h-auto  ${showmobilemenu ? 'lg:bg-transparent bg-black':''} 
            flex flex-col md:flex-row lg:px-[2rem] xl:px-[7rem] md:py-4 justify-between
            text-white ${scrolldistancereached ? 'bg-black py-[8px] lg:py-[5px] duration-300':''}
        `}>
            <header className={`self-center grow flex items-center w-full px-4 lg:w-auto lg:px-0 lg:block justify-between`}>
                <Image alt="Blacvolta logo" className="aspect-[4/3] object-contain lg:h-auto lg:w-auto" width={60} height={60}  src="/assets/images/logo.png" priority />
                <button className="lg:hidden" onClick={toggleMobileMenu}>
                    {showmobilemenu ? <CgClose size={30} />:<RxHamburgerMenu  size={30} color="white"/>}
                </button>
            </header>
            <DesktopMenu />
            {showmobilemenu && <MobileMenu closeMobileMenu={closeMobileMenu} />}
        </nav>
    )
}