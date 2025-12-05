import { Shield, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import Image from "next/image";

const Index = () => {
  return (
    <div className="h-screen bg-background px-4">
      <div className="h-[80px] flex flex-col justify-center">
      <Link  href="/">
          <Button variant="ghost" size="sm" className="gap-2 text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        </div>
      <div className="flex items-center h-[calc(100%-80px)] justify-center">
       
      <div className="text-center max-w-2xl">
        <div className="mb-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-termsaccent/10 text-termsaccent">
          {/* <Shield className="h-5 w-5" /> */}
          <Image alt="Blacvolta logo" className="aspect-[4/3] object-contain xl:h-auto xl:w-auto" width={60} height={60}  src="/assets/images/logo.png" priority />
          <span className="font-semibold text-termsaccent">Blacvolta Lifestyle</span>
        </div>
        <h1 className="mb-6 text-4xl lg:text-6xl font-bold text-termsaccent-foreground">
          Your Privacy Matters
        </h1>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Learn how we protect your data and respect your privacy across our lifestyle-fintech platform.
        </p>
        <Link href="/terms-info">
          <Button size="lg" className="gap-2 bg-termsaccent text-black hover:bg-termsaccent/90">
            View Privacy Policy
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Index;
