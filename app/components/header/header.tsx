"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 30;
export default function Header(){
    const [scrolldistancereached,setScrolledDistanceReached] = useState(false);
    useEffect(function(){
        window.addEventListener("scroll",checkScrollDistance);
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
    return (
        <header className={`fixed top-0 left-0 w-full flex justify-center px-[5%] py-[3%] ${scrolldistancereached ? 'bg-black py-[5px] duration-700':''}`}>
            <div className="max-w-[70px]">
                <Image alt="website logo" width={74} height={100} className="aspect-auto"  src="/assets/images/logo.png" priority />
            </div>
        </header>
    )
}