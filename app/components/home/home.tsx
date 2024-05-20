import NavBar from "../navbar/navbar";

export default function Home(){
    return(
        <section className={`h-dvh bg-mobile sm:bg-tablet md:bg-minidesktop xl:bg-desktop bg-center bg-cover flex flex-col justify-center`}>
            <NavBar />
            <div className="flex flex-col justify-center items-center px-5">
                <h1 className={`text-[40px] sm:text-[50px] md:text-[70px] text-white font-futura font-semibold`}>BLACVOLTA</h1>
                <h2 className=" text-center font-asap font-bold text-white text-[18px] md:text-[23px]">Entertainment Hub - Africa</h2>
            </div>
        </section>
    )
}