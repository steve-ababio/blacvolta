// components/Hero.tsx
import NavBar from '@/app/components/navbar/navbar';

export default function Hero() {
  return (
    <div className="relative font-kamerik h-[60vh] w-full bg-cover bg-center flex flex-col justify-between p-6" 
         style={{ 
            backgroundImage: "linear-gradient(to bottom, transparent 0%, #000000 100%), url('/assets/images/merch.jpg')" 
        }}
    >
      {/* Overlay to darken image slightly */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 flex justify-between items-start w-full">
        <NavBar />
      </div>
      <div className="relative z-2 self-center translate-y-[65%]">
        <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center shadow-xl">
          <span className="font-serif italic text-3xl font-black border-b-2 border-black">Merch</span>
        </div>
      </div>
    </div>
  );
}