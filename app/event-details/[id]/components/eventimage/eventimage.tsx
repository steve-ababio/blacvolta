'use client'
import Image from "next/image";

// export default function EventImage({FlyerImagePath}:{FlyerImagePath:string}){
//     return(
//         <div className={`h-[38vh] aspect-[1/1] rounded-[10px] relative mx-auto my-[35px]`}>
//             <Image
//                 priority
//                 src={FlyerImagePath}
//                 style={{borderRadius:"10px"}}
//                 layout="fill"
//                 objectFit="contain"
//                 alt="Event flyer"
//             />
//         </div>
//     )
// }
import { motion } from "framer-motion";
import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";
interface EventDetailsProps{
    flyerImagePath:string,
    title:string
}
const EventImage = ({flyerImagePath,title}:EventDetailsProps) => {
  return (
    <div className="relative h-[50vh] min-h-[450px] w-full overflow-hidden">
       <Link href="/" className="absolute top-3 left-3 z-[10000] block sm:hidden">
            <div className="mr-[20px]">
                <BiLeftArrowAlt color="white" className="hover:scale-125 duration-300" size={40}  />
            </div>
        </Link>
        <div className={`h-[38vh] hidden sm:block aspect-[1/1] rounded-[10px] relative mx-auto my-[35px]`}>
            <Image
                priority
                src={flyerImagePath}
                style={{borderRadius:"10px"}}
                layout="fill"
                objectFit="contain"
                alt="Event flyer"
            />
        </div>
      {/* Background Image */}
      <div className="absolute inset-0 block sm:hidden">
        <img
          src={flyerImagePath}
          alt="Open Mic Night"
          className="h-full w-full object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 sm:hidden flex h-full flex-col justify-end px-6 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-20"
        >
          <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {/* <p className="mt-2 font-sans text-lg text-muted-foreground">
            Featuring the Iris Band
          </p> */}
        </motion.div>
      </div>
    </div>
  );
};

export default EventImage;
