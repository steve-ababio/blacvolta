import Image from "next/image";
import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";


export default function Hero({headertext}:{headertext:string}){
    return(
        <header className="
            flex items-center justify-center h-[50vh] 
            before:z-20 relative before:content['']
            before:block before:absolute before:inset-0
            before:bg-black/70"
        >
            <Link href="/" className="z-40 absolute top-5 left-10">
                <div className="mr-[20px]">
                    <BiLeftArrowAlt color="white" className="hover:scale-125 duration-300" size={50}  />
                </div>
            </Link>
            <Image alt="" className="aspect-video object-cover w-full absolute  h-full" src="/assets/images/blogbg.jpg" width={1000} height={600}/>
            <h1 className="md:text-[80px] sm:text-[60px] text-[50px] text-white font-kamerik font-black relative z-30 text-center">{headertext}</h1>
        </header>
    )
}