import CtaButton from "@/app/components/ctabutton/ctabutton";
import { prisma } from "@/app/lib/prisma";
import { unstable_noStore } from "next/cache";
import Link from "next/link";
import { FcKindle } from "react-icons/fc";

async function getAllEditorials(){
    return await prisma.blogPost.findMany({
        where:{
            approved:true,
            dettydecember:true
        },
        relationLoadStrategy:"join",
        include:{
            paragraph:true
        },
        orderBy:{
            id:"desc"
        },
    });
}

export const dynamic = 'force-dynamic';
export default async function DettyDecemberGuides(){
    unstable_noStore(); 
    const dettydecemberguides = await getAllEditorials();
    return(
        <div className="px-[5%]">
            <div className="justify-center md:items-start items-center flex flex-col max-w-full md:grid md:grid-cols-[repeat(auto-fit,350px)] py-12 gap-14">
                {
                    dettydecemberguides.length === 0 ?
                    <div className="text-white text-[18px] font-kamerik flex justify-center items-center gap-x-4">There are no guides <FcKindle size={40} /></div>
                    :dettydecemberguides.map(({title,author,imagepath,date,id})=>{
                        const blogdate = new Date(date).toLocaleDateString("en-us",{
                            month:"short",
                            year:"numeric",
                            day:"numeric"
                        })
                        return(
                            <Link href={`/editorial/${id}`} className="border block h-auto pb-10 border-slate-300/40 rounded-[8px] w-full hover:scale-[1.02] duration-200" key={id}>
                                <div className="relative mb-4 lg:h-[250px]">
                                    <img src={imagepath}  className="rounded-t-[8px] lg:object-top max-w-full lg:object-cover lg:h-full w-full h-auto"  alt="blog title" />
                                </div>
                                <div className="px-3 text-white font-kamerik">
                                    <div title={title} className="overflow-hidden text-[16px] md:text-[20px] mb-4 font-bold text-ellipsis whitespace-nowrap">{title}</div>
                                    <div >
                                        <div className="text-[12px] mb-1 font-kamerik font-bold">By <span className="font-bold">{author}</span></div>
                                        <div className="text-[12px] font-kamerik font-bold text-[#9A9A9A]">{blogdate}</div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}