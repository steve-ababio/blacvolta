import Link from "next/link";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { StoreButton } from "./components/store-buttons/store-buttons";
import { Smartphone } from "lucide-react";
import Image from "next/image";
export default function Download(){
    return (
        <main className="relative min-h-screen gradient-hero overflow-hidden">
        <NavBar />
        {/* Background glow effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] gradient-glow animate-pulse-glow pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
          {/* App icon placeholder */}
          <div className="mb-8 p-5 rounded-xl bg-black/60 border border-border/50 animate-float">
            {/* <Smartphone className="w-16 h-16 text-primary" strokeWidth={1.5} /> */}
            <Image alt="Blacvolta logo" className="aspect-[4/3] object-contain xl:h-auto xl:w-auto" width={60} height={60}  src="/assets/images/logo.png" priority />
          </div>
  
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 tracking-tight">
            Download Our App
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-md mb-12">
            Experience the Blacvolta lifestyle app. Available now on iOS and Android.
          </p>
  
          {/* Store buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <StoreButton store="apple" href="https://apps.apple.com/in/app/blacvolta/id6745515524" />
            <StoreButton store="google" href="https://play.google.com/store/apps/details?id=com.blacvolta.app&pcampaignid=web_share" />
          </div>
  
          {/* Footer note */}
          <p className="mt-16 text-sm text-muted-foreground/60">
            Free download • No credit card required
          </p>
        </div>
        <Footer />
      </main>
    )
}
