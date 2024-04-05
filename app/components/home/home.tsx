"use client"
import Header from "../header/header";

export default function Home(){
    
    return(
        <section className="h-dvh bg-image bg-center bg-cover flex flex-col justify-center">
                <Header />
                <div className="flex flex-col items-center">
                <h1 className="text-[50px] sm:text-[70px] md:text-[100px]">BLACVOLTA</h1>
                <h2 className="asap">-International Nightlife & Entertainment</h2>
                </div>
        </section>
    )
}