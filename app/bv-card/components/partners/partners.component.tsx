"use client"
import Image from "next/image";
import { MapPin } from "lucide-react";
import { PartnerType } from "@/app/types/enums";

const bvCardPartners = [
  { name: "African Regent", url: "/assets/images/partners/african-regent.png", location: "Dzorwulu",invert:false },
  { name: "Bella Afrik", url: "/assets/images/partners/bellafrik.png", location: "Accra",invert:false },
  { name: "Bloom", url: "/assets/images/partners/bloom-bar.png", location: "Spintex",invert:false },
  { name: "Aria", url: "/assets/images/partners/aria.png", location: "Accra",invert:true },
  { name: "BarX", url: "/assets/images/partners/barx.png", location: "Accra",invert:false },
  { name: "Enzo", url: "/assets/images/partners/enzo.png", location: "East Legon",invert:false },
  { name: "Exhale", url: "/assets/images/partners/exhale.png", location: "East Legon",invert:false },
  { name: "Front Back", url: "/assets/images/partners/fb.png", location: "Osu",invert:false },
  { name: "Horizontal", url: "/assets/images/partners/horizontal.png", location: "Airport",invert:false },
  { name: "Jamestown", url: "/assets/images/partners/jamestown-coffe.png", location: "Labone",invert:false },
  { name: "Le-petit", url: "/assets/images/partners/lpo.png", location: "Labone",invert:false },
  { name: "Polo Beach", url: "/assets/images/partners/polo-beach.png", location: "La",invert:false },
  { name: "Sol Lounge", url: "/assets/images/partners/sol.png", location: "Osu",invert:false },
  { name: "Allora", url: "/assets/images/partners/allora.png", location: "La",invert:false },
  { name: "Skybar", url: "/assets/images/partners/skybar.png", location: "Accra",invert:false },
  { name: "Republic", url: "/assets/images/partners/republic.png", location: "Osu",invert:false },
  { name: "Sandbox", url: "/assets/images/partners/sandbox.png", location: "La",invert:false },
  { name: "Alley Bar", url: "/assets/images/partners/alley-bar.png", location: "Accra",invert:false },
   { name: "Beehive", url: "/assets/images/partners/beehive.png", location: "Accra",invert:false },
   { name: "Frozen Cabana", url: "/assets/images/partners/frozen.png", location: "Accra",invert:false },
   { name: "Honey Suckle", url: "/assets/images/partners/honeysuckle.png", location: "Labone",invert:false },
   { name: "Mad Club", url: "/assets/images/partners/madclub.png", location: "Accra",invert:false },
   { name: "Mood Bar", url: "/assets/images/partners/mood.png", location: "Accra",invert:false },
   { name: "RHPickleBallerTr", url: "/assets/images/partners/rhpickleballtr.png", location: "Accra",invert:false },
];

const bvSocialPartners = [
  {
    name:"Detty Rave",url:"/assets/images/bvsocialpartners/dettyrave.png",location:"",invert:false
    
  },
  {
    name:"DevTraco Plus",url:"/assets/images/bvsocialpartners/devtracoplus.png",location:"",invert:false
  },
  {
    name:"Emy Africa",url:"/assets/images/bvsocialpartners/emy-africa.png",location:"",invert:false
  },
  {
    name:"Gold Key",url:"/assets/images/bvsocialpartners/goldkey.png",location:"",invert:true
  },
  {
    name:"Grammys",url:"/assets/images/bvsocialpartners/grammy.png",location:"",invert:true
  },
  {
    name:"Martell",url:"/assets/images/bvsocialpartners/martell-logo.png",location:"",invert:true
  },
  {
    name:"Momo MTN",url:"/assets/images/bvsocialpartners/momo_mtn.png",location:"",invert:false
  },
  {
    name:"Recording Academy",url:"/assets/images/bvsocialpartners/recording-academy.webp",location:"",invert:false
  },
  {
    name:"RNAQ",url:"/assets/images/bvsocialpartners/rnaq.jpeg",location:"",invert:false
  },
  {
  name:"Sand Box",url:"/assets/images/bvsocialpartners/sandbox-logo.png",location:"",invert:true
  },
  {
    name:"Spotify",url:"/assets/images/bvsocialpartners/spotify.png",location:"",invert:true
  }
];

export default function Partners({type}:{type:PartnerType}) {
  return (
    <section className="pt-10 pb-20 text-center px-6 md:px-20 overflow-hidden">
      {type === PartnerType.BV_CARD ? <h2 className="text-blacvolta-gold text-2xl md:text-3xl lg:text-4xl font-semibold leading-[160%] mb-12">
        Featured Partners
      </h2> : 
      <h2 className="text-[#a6e804] text-2xl md:text-3xl lg:text-5xl font-semibold leading-[160%] mb-12">
        Partners
      </h2>}

      <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="marquee-container flex w-max flex-nowrap">
          <div className="marquee-track flex flex-nowrap shrink-0 gap-2 md:gap4 items-center justify-around">
            {(type === PartnerType.BV_CARD ? bvCardPartners : bvSocialPartners).map((company, i) => (
              <div key={company.name + "-1-" + i} className="flex rounded-md py-4 flex-col items-center gap-2">
                <Image
                  src={company.url}
                  alt={company.name}
                  width={160}
                  height={160} 
                  priority
                  className={`object-contain ${company.invert ? 'invert':''} aspect-[3/2] mx-3 md:mx-5 transition-all duration-300 cursor-pointer`}
                />
                {type === PartnerType.BV_CARD && (
                  <>
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
                  </>
                )}
              </div>
                
            ))}
            {/* border-[0.5px] border-blacvolta-gold/50 */}
          </div>
          <div className="marquee-track flex flex-nowrap shrink-0 gap-2 md:gap-4 items-center justify-around">
            {(type === PartnerType.BV_CARD ? bvCardPartners : bvSocialPartners).map((company, i) => (
              <div key={company.name + "-2-" + i} className="flex rounded-md py-4 flex-col items-center gap-2">
                <Image
                  src={company.url}
                  alt={company.name}
                  width={160}
                  height={160} 
                  priority
                  className={`object-contain ${company?.invert ? 'invert':''} aspect-[3/2] mx-0 md:mx-5 transition-all duration-300 cursor-pointer`}
                />
                {type === PartnerType.BV_CARD && (
                  <>
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
                </>
                )}
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


  