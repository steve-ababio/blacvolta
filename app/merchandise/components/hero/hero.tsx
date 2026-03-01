// components/Hero.tsx
import NavBar from '@/app/components/navbar/navbar';

export default function Hero() {
  return (
    <div className="relative font-kamerik h-screen w-full bg-cover bg-center flex flex-col justify-between p-6 merch-hero" 
    >
      {/* Overlay to darken image slightly */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex justify-center items-center h-full  w-full">
        <NavBar />
        <div className='z-50 text-white text-center'> 
          <h1 className=' text-5xl md:text-6xl font-semibold md:font-bold lg:text-8xl w-full'>
            BV MERCH
          </h1>
          <h2 className='text-base font-medium '>BV Merch - Culture. Identity. Fashion</h2>
        </div>
      </div>
     
      {/* <div className="relative z-2 self-center translate-y-[65%]">
        <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center shadow-xl">
          <span className="font-serif italic text-3xl font-black border-b-2 border-black">Merch</span>
        </div>
      </div> */}
    </div>
  );
}