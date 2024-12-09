"use client"
import {useEffect,useState} from "react";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link"
import { BsCalendar2Date } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

export default function TicketPopup() {
    const [show,setShow] = useState(true);
    useEffect(()=>{
        const handleLoad = () => {
            setShow(true);
          };
          window.addEventListener("load", handleLoad);
          return () => {
            window.removeEventListener("load", handleLoad);
          };
    },[]);
    function closeModal(){
        setShow(false);
    }
    return(
        <div onClick={closeModal} className={`fixed z-[1200] inset-0 bg-[#000]/50 flex items-center ${show ? 'block':'hidden'}  justify-center `}>
            <div className={`max-w-[30rem] relative my-10 bg-[#242222] rounded-[16px] w-[90%] -translate-y-[100px] mx-auto duration-500 ${show ? 'translate-y-[0] visible opacity-[100]':'opacity-0 invisible'}`}>
                
                <div className="h-[450px] relative rounded-[16px] ">
                <button onClick={closeModal} className="flex z-[1234] justify-center items-center absolute bg-[#2d2b2b] rounded-[50%] h-8 w-8 right-8 top-8">
                    <IoCloseOutline size={30} color="white" />
                </button>
                    <Image src="/assets/images/blacout.jpg" className="rounded-[16px] absolute" alt="blac out ticket" fill />
                </div>
                <div className=" px-6 ">
                    <h1 className="text-white text-[24px] my-4 font-bold font-kamerik text-center">Blac Out</h1>
                    <div className="mb-4 py-3 bg-white rounded-[16px] p-8 ">
                        <div className="mx-auto flex py-2 gap-x-3 items-center">
                            <IoLocationOutline size={25}/>
                            Mad Club
                        </div>
                        <div className="mx-auto flex py-3 gap-x-3 text-[14px] sm:text-[16px] items-center">
                            <BsCalendar2Date size={25} />
                            26th December,2024.
                        </div>
                        <Link href="https://jambotickets.com/events/blac-out"><button className="mt-4 mb-3 bg-[black] block text-white px-10 font-kamerik py-2 rounded-[20px] ">Get Tickets to BlacOut</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}