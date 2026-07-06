import Image from "next/image";
import { MapPin } from "lucide-react";

const partnersUrl = [
  { name: "African Regent", url: "/assets/images/partners/african-regent.png", location: "Dzorwulu" },
  { name: "Bella Afrik", url: "/assets/images/partners/bellafrik.png", location: "Accra" },
  { name: "Bloom", url: "/assets/images/partners/bloom-bar.png", location: "Spintex" },
  { name: "Aria", url: "/assets/images/partners/aria.png", location: "Accra" },
  { name: "BarX", url: "/assets/images/partners/barx.png", location: "Accra" },
  { name: "Enzo", url: "/assets/images/partners/enzo.png", location: "East Legon" },
  { name: "Exhale", url: "/assets/images/partners/exhale.png", location: "East Legon" },
  { name: "Front Back", url: "/assets/images/partners/fb.png", location: "Osu" },
  { name: "Horizontal", url: "/assets/images/partners/horizontal.png", location: "Airport" },
  { name: "Jamestown", url: "/assets/images/partners/jamestown-coffe.png", location: "Labone" },
  { name: "Le-petit", url: "/assets/images/partners/lpo.png", location: "Labone" },
  { name: "Polo Beach", url: "/assets/images/partners/polo-beach.png", location: "La" },
  { name: "Sol Lounge", url: "/assets/images/partners/sol.png", location: "Osu" },
  { name: "Allora", url: "/assets/images/partners/allora.png", location: "La" },
  { name: "Skybar", url: "/assets/images/partners/skybar.png", location: "Accra" },
  { name: "Republic", url: "/assets/images/partners/republic.png", location: "Osu" },
  { name: "Sandbox", url: "/assets/images/partners/sandbox.png", location: "La" },
  { name: "Alley Bar", url: "/assets/images/partners/alley-bar.png", location: "Accra" },
   { name: "Beehive", url: "/assets/images/partners/beehive.png", location: "Accra" },
   { name: "Frozen Cabana", url: "/assets/images/partners/frozen.png", location: "Accra" },
   { name: "Honey Suckle", url: "/assets/images/partners/honeysuckle.png", location: "Labone" },
   { name: "Mad Club", url: "/assets/images/partners/madclub.png", location: "Accra" },
   { name: "Mood Bar", url: "/assets/images/partners/mood.png", location: "Accra" },
   { name: "RHPickleBallerTr", url: "/assets/images/partners/rhpickleballtr.png", location: "Accra" },
];

export default function Partners() {
  return (
    <section className="pt-10 pb-20 text-center px-6 md:px-20 overflow-hidden">
      <h2 className="text-blacvolta-gold text-2xl md:text-3xl lg:text-4xl font-semibold leading-[160%] mb-12">
        Featured Partners
      </h2>

      <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="marquee-container flex w-max flex-nowrap">
          <div className="marquee-track flex flex-nowrap shrink-0 gap-4 items-center justify-around">
            {partnersUrl.map((company, i) => (
              <div key={company.name + "-1-" + i} className="flex rounded-md py-4 flex-col items-center gap-2">
                <Image
                  src={company.url}
                  alt={company.name}
                  width={160}
                  height={160} 
                  className="mx-5 md:mx-10 transition-all duration-300 cursor-pointer object-contain aspect-[3/2]"
                />
                <div className="py-2">
                  <div className="font-bold text-sm md:text-base text-white">
                    <span className="text-blacvolta-gold">10%</span> OFF
                  </div>
                  <p className="text-sm md:text-base text-gray-300 font-normal text-center">Total Bill</p>
                </div>
                <div className="flex items-center gap-1 text-sm text-white">
                  <MapPin className="h-3.5 w-3.5 text-blacvolta-gold shrink-0" />
                  <span>{company.location}</span>
                </div>  
              </div>
            ))}
            {/* border-[0.5px] border-blacvolta-gold/50 */}
          </div>
          <div className="marquee-track flex flex-nowrap shrink-0 gap-4 items-center justify-around">
            {partnersUrl.map((company, i) => (
              <div key={company.name + "-2-" + i} className="flex rounded-md py-4 flex-col items-center gap-2">
                <Image
                  src={company.url}
                  alt={company.name}
                  width={160}
                  height={160} 
                  className="object-contain aspect-[3/2] mx-5 md:mx-10 transition-all duration-300 cursor-pointer"
                />
                <div className="py-2">
                    <div className="font-bold text-sm md:text-base text-white">
                      <span className="text-blacvolta-gold">10%</span> OFF
                    </div>
                    <p className="text-sm md:text-base text-gray-300 font-normal text-center">Total Bill</p>
                </div>
                <div className="flex items-center gap-1 text-sm md:text-base text-white mt-0.5">
                  <MapPin className="h-4.5 w-4.5 text-blacvolta-gold shrink-0" />
                  <span>{company.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* flicker-free animation */}
      <style jsx>{`
        .marquee-track {
          animation: scroll-left 80s linear infinite;
          will-change: transform;
        }

        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
}


  