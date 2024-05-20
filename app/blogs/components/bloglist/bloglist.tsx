"use client"
import { BlogPostType } from "@/app/components/blogposts/blogposts";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FcKindle } from "react-icons/fc";


export default function BlogList(){
    const [blog,setBlogs] = useState<BlogPostType[]>([])
    useEffect(()=>{
        async function fetchLatestBlogs(){
            let response = await fetch("/api/blogs");
            let data = await response.json();
            setBlogs(data);
        }
        fetchLatestBlogs();
    },[])
    return(
        <div className="overflow-x-hidden justify-center items-center px-10 flex flex-col max-w-full md:grid md:grid-cols-[repeat(auto-fit,300px)] py-12 gap-14">
            {
                blog.length === 0 ?
                <div className="text-white text-[18px] font-kamerik flex justify-center items-center gap-x-4">There are no blogs <FcKindle size={40} /></div>
                :blog.map(({title,author,imagepath,date,id})=>{
                    const blogdate = new Date(date).toLocaleDateString("en-us",{
                        month:"short",
                        year:"numeric",
                        day:"numeric"
                    })
                    return(
                        <Link href={`/blog/${id}`} className="border block h-auto pb-10 border-slate-300/40 rounded-[8px] w-full hover:scale-[1.02] duration-200" key={id}>
                            <div className="relative mb-4 h-[200px]">
                                <Image src={imagepath} className="rounded-t-[8px]"objectFit="cover" layout="fill" alt="blog title" />
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
    )
}