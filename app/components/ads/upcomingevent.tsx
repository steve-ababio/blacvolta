import Image from "next/image";

export default function Ads(){
    return(
        <section className="pt-[3%] bg-black">
            <div>
                {/* <video className="mx-auto block w-full sm:w-fit sm:rounded-[10px]" src="/assets/videos/Blacvolta.mp4" autoPlay muted loop playsInline></video> */}
                <div>
                    <img src="/assets/images/ads/mukuru.webp"  className="mx-auto w-[90%] max-w-[800px] height-full" alt="mukuru ad" />
                </div>
            </div>
        </section>
    )
}