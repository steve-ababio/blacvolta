import NavBar from "@/app/components/navbar/navbar";

export default function Home(){
    return(
        <section className={`h-dvh bg-mobile sm:bg-tablet md:bg-minidesktop xl:bg-desktop bg-center bg-cover flex flex-col justify-center`}>
            <NavBar />
            <div className="flex flex-col justify-center items-center px-5">
                <h1 className={`text-[50px] sm:text-[70px] md:text-[90px] text-white font-futura font-semibold`}>BLACVOLTA</h1>
                <h2 className=" text-center font-asap font-bold text-white text-[18px] md:text-[23px]">Entertainment Hub - Africa</h2>
            </div>
        </section>
    )
}