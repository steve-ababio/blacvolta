import Link from "next/link";

export default function UpcomingEvent(){
    return(
        <section className="pt-[3%] bg-black">
            <div className="flex flex-col items-center px-[5%] pb-[5%]">
                <Link href="/calender" className="text-[30px] font-bold poppins text-white"><span>CLICK HERE TO VIEW ALL UPCOMING EVENTS IN THIS FESTIVE SEASON</span></Link>
            </div>
            <div>
                <video className="mx-auto block w-full sm:w-fit sm:rounded-[10px]" src="/assets/videos/Blacvolta.mp4" autoPlay muted loop playsInline></video>
            </div>
        </section>
    )
}