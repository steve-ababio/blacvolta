import Image from "next/image";

export default function Ads(){
    return(
        <section className="pt-[3%] bg-black">
            <div>
                {/* <video className="mx-auto block w-full sm:w-fit sm:rounded-[10px]" src="/assets/videos/Blacvolta.mp4" autoPlay muted loop playsInline></video> */}
                <div className="relative h-[350px] sm:h-[450px] ">
                    <Image src="/assets/images/ads/mukuru.webp" fill className="object-fill  absolute mx-auto w-[100%] max-w-[800px] height-full" alt="mukuru ad" />
                </div>
            </div>
        </section>
    )
}