"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FcKindle } from "react-icons/fc";

export type ParagraphType = {
    id:string
    imagepath:string,
    title:string,
    body:string,
    blogID:number
}
export type BlogPostType = {
    id: number;
    author: string;
    title: string;
    date: string;
    imagepath:string,
    paragraph:ParagraphType[]
}

export default async function BlogPosts(){
    const [latestblogs,setLatestBlogs] = useState<BlogPostType[]>([])
    useEffect(()=>{
        async function fetchLatestBlogs(){
            let response = await fetch("/api/latestblogs");
            let data = await response.json();
            setLatestBlogs(data);
        }
        fetchLatestBlogs();
    },[])
    return(
        <section className="flex flex-col pt-[3rem]">
            <div className="px-[5%] ">
                <h2 className="text-[25px] pb-8 font-kamerik font-bold md:text-[30px] text-center text-white">BLOGS</h2>
                <div className="justify-center items-center flex flex-col w-full md:grid md:grid-cols-[repeat(auto-fit,350px)] gap-14">
                    {
                        latestblogs.length === 0 ? 
                        <div className="text-white text-[18px] font-kamerik flex justify-center items-center gap-x-4">There are no blogs <FcKindle size={40} /></div>
                        :
                        latestblogs.map(({title,author,imagepath,date,id})=>{
                            const blogdate = new Date(date).toLocaleDateString("en-us",{
                                month:"short",
                                year:"numeric",
                                day:"numeric"
                            });
                            return(
                                <Link href={`/blog/${id}`} className="border block h-auto pb-10 border-slate-300/40  rounded-[8px] w-full lg:hover:scale-[1.02] duration-200" key={id}>
                                    <div className="relative mb-4 h-[200px]">
                                        <Image src={imagepath} className="rounded-t-[8px]" objectFit="cover" layout="fill" alt="blog title" />
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
                    latestblogs.length > 0 &&
                    <Link className="flex py-8 hover:underline gap-x-1 items-center" href="/blogs">
                        <span className="text-white text-[1rem] font-kamerik font-bold">View more blogs</span>
                        <BsArrowRight color="white" size={20} />
                    </Link>
                }
            </div>
        </section>
    )
}