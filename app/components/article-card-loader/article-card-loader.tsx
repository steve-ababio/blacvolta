'use client'
import { motion } from "framer-motion";
export default function ArticleCardLoader({size}:{size:number}){
    let newarray = new Array(size);
    let blogs = [...newarray];
    return(
        <div className="pt-[3rem] px-[5%]">
            <div className="justify-center items-center flex flex-col w-full md:grid md:grid-cols-[repeat(auto-fit,350px)] gap-14">
            {
                blogs.map((_,index)=>(
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        key={index}
                        className="relative w-full max-w-2xl h-[200px] rounded-2xl overflow-hidden bg-gray-400 p-6"
                  >
                        <div className="h-9 w-32 rounded-full bg-gray-500 animate-pulse" />
                        <div className="absolute top-6 right-6 h-5 w-20 rounded-md bg-gray-500 animate-pulse" />
                        <div className="absolute bottom-6 left-6 right-6 space-y-3">
                        <div className="h-7 w-5/6 bg-gray-500 rounded-md animate-pulse" />
                        <div className="h-7 w-3/4 bg-gray-500 rounded-md animate-pulse" />
                        <div className="h-4 w-40 bg-gray-500 rounded-md mt-4 animate-pulse" />
                        </div>
                  </motion.div>
                ))
            }
            </div>
        </div>
    )
}