import Image from "next/image";

export default function Ads(){
    return(
        <section className="mt-12 bg-black">
            <div className="flex justify-center flex-col items-center md:flex-row md:gap-0 gap-6">
                {/* <video className="mx-auto block w-full sm:w-fit sm:rounded-[10px]" src="/assets/videos/Blacvolta.mp4" autoPlay muted loop playsInline></video> */}
                <div className="flex items-center justify-center">
                    <img src="/assets/images/ads/Web_Banner_Melcom.png"  className="w-[90%] max-w-[800px] height-full" alt="mukuru ad" />
                </div>
                <div className="flex items-center justify-center">
                    <img src="/assets/images/ads/Web_Banner_Pizzaman_Chickenman.png"  className="w-[90%] max-w-[800px] height-full" alt="mukuru ad" />
                </div>
            </div>
        </section>
    )
}