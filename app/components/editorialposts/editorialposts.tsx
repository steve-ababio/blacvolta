import { prisma } from "@/app/lib/prisma";
import { unstable_noStore } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FcKindle } from "react-icons/fc";

async function getLatestEditorials(){
    return await prisma.blogPost.findMany({
        orderBy:{
            id:"desc"
        },
        take:3
    });
}
export const dynamic = 'force-dynamic';
export default async function Editorials(){
    unstable_noStore(); 
    const blogposts = await getLatestEditorials();
    return(
        <section className="flex flex-col pt-[3rem]">
            <div className="px-[5%] ">
                <h2 className="text-[25px] pb-8 font-kamerik font-bold md:text-[30px] text-center text-white">EDITORIALS</h2>
                <div className="justify-center items-center flex flex-col w-full md:grid md:grid-cols-[repeat(auto-fit,350px)] gap-14">
                    {
                        blogposts.length === 0 ? 
                        <div className="text-white text-[18px] font-kamerik flex justify-center items-center gap-x-4">There are no editorials <FcKindle size={40} /></div>
                        :
                        blogposts.map(({title,author,imagepath,date,id})=>{
                            const blogdate = new Date(date).toLocaleDateString("en-us",{
                                month:"short",
                                year:"numeric",
                                day:"numeric"
                            });
                            return(
                                <Link href={`/editorial/${id}`} className="border block h-auto pb-10 border-slate-300/40  rounded-[8px] w-full lg:hover:scale-[1.02] duration-200" key={id}>
                                    <div className="relative mb-4 lg:h-[250px]">
                                        <img src={imagepath} className="rounded-t-[8px] w-full h-auto lg:h-full lg:object-cover"  alt="blog title" />
                                    </div>
                                    <div className="px-3 text-white kamerik">
                                        <div title={title} className="overflow-hidden text-[16px] md:text-[20px] mb-4 font-bold text-ellipsis whitespace-nowrap">{title}</div>
                                        <div>
                                            <div className="text-[12px] font-kamerik mb-1 font-bold">By <span className="font-bold">{author}</span></div>
                                            <div className="text-[12px] font-kamerik font-bold text-[#9A9A9A]">{blogdate}</div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
                {
                    blogposts.length > 0 &&
                    <Link className="flex py-8 hover:underline gap-x-1 items-center" href="/editorials">
                        <span className="text-white text-[1rem] font-kamerik font-bold">View more editorials</span>
                        <BsArrowRight color="white" size={20} />
                    </Link>
                }
            </div>
        </section>
    )
}