import Image from "next/image";
import {  BsFillChatRightQuoteFill } from "react-icons/bs";

type TeamCardProps = {
    fullname:string,
    imageurl:string,
    role:string,
    quotes:string[]
}
export default function TeamCard({imageurl,fullname,role,quotes}:TeamCardProps){
    return(
        <div className="w-full bg-[#1c1b1b] rounded-[8px] p-5 shadow-lg ">
            <div className="rounded-[8px] relative teamcard__img-height h-[320px] w-full">
                <Image src={imageurl} className="absolute object-cover rounded-[8px]"  alt="" fill  />
            </div>
            <div className="text-white font-kamerik pt-5">
                <div className="pt-4 font-semibold text-[1.1rem]">{fullname}</div>
                <div className="pt-[4px] text-[#aaaaaa] text-[14px]">{role}</div>
                {quotes.length > 0 && <blockquote className="pt-4">
                    <BsFillChatRightQuoteFill size={22} color="white"/>
                    {quotes.map((quote)=>(<q key={quote} className="block pt-[4px] text-[13px]">{quote}</q>))}
                </blockquote>}
            </div>
        </div>
    )
}