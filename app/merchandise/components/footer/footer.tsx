import Image from "next/image";

export default function Footer() {
    return (
      <footer className="bg-black text-white py-12 px-4 border-t border-white/10 flex flex-col items-center text-center">
        <div className="mb-2">
           <Image alt="Blacvolta logo" className="aspect-[4/3] object-contain xl:h-auto xl:w-auto" width={100} height={100}  src="/assets/images/logo.png" priority />
        </div>
        <p className="uppercase font-[300] font-kamerik text-xl mb-2">Blacvolta 2026 ! all rights reserved</p>
        <h3 className="text-xl font-kamerik font-normal mb-4 text-white">Legal</h3>
        <div className="space-y-2 text-sm text-gray-400">
          <p className="cursor-pointer hover:text-white transition">Privacy Policy</p>
          <p className="cursor-pointer hover:text-white transition">Regulatory and Disclosure</p>
        </div>
      </footer>
    );
  }