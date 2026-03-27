'use client'
import { bvsocialOfferings } from "@/app/data/bv-social/bv-social";
import { motion } from "framer-motion";
import React from "react";

export default function Description(){
    return (
        <section className="bg-black py-6 mt-10 px-7 md:px-0 font-kamerik">
            <div className="max-w-4xl mx-auto text-white text-start md:text-center text-balance">
                <div className="text-center flex justify-center">
                    <img
                        src="/assets/images/bv-social/bv-social-logo.png"
                        alt=""
                        className="max-w-[400px] max-h-32 w-full h-full object-cover"
                    />
                </div>
                <p className="mb-4">
                    BV social is a forward-thinking digital marking agency dedicated to helping businesses amplify their online presence and achieve measurable results.
                    We specialize in crafting tailored strategies that integrate social media marketing content creation, paid advertising, and analytics to drive engagement, growth and ROI.
                </p>
                <p>
                    At BV Social, we blend creativity with data-driven insights to build impactful campaigns that resonate with audiences across diverse platforms.
                    Whether you&apos;re looking to elevate brand awareness, generate leads, or faster community loyalty, our team of experts is committed to turning you digital goals into reality.
                </p>
            </div>
            <h1 className="pt-10 underline text-white font-semibold text-2xl text-center">What we offer</h1>
            <div className="px-2 md:px-[100px] lg:px-[200px] mt-10 md:mt-28">
            { 
                    bvsocialOfferings.map((item:any)=>(
                        <div key={item.title} className="flex gap-8 mb-[40px] md:mb-[70px] lg:mb-[100px]">
                            <div  className="font-kamerik flex-1">
                                <h1 className="text-[#a6e804] mb-1 text-base font-semibold lg:text-xl">{item.title}</h1>
                                <h2 className="text-[#868686] mb-7 md:mb-10 lg:mb-12  text-sm font-semibold lg:text-base">{item.subTitle}</h2>
                                <h2 className="text-white text-base mb-6 font-semibold">What can we offer: </h2>
                                {
                                    item.offerings.map((item:any,index:number)=>(
                                    <ul className="space-y-8" key={index}>
                                        <motion.li
                                            key={item}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex text-sm md:text-base mb-3 items-center gap-4 font-light text-white/90"
                                        >
                                            <div className="w-2 h-2 bg-[#a6e804] rounded-full" />
                                            {item}
                                        </motion.li>
                                    </ul>
                                    ))
                                }
                                
                            </div>
                            <div className=" flex-1 hidden md:block">
                                <img className="w-full h-[400px] object-cover" src={`/assets/images/bv-social/${item.image}`} />
                            </div>
                        </div>
                    ))}
            </div>

        </section>
    )
}