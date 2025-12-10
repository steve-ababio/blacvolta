import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    const currentyear = new Date().getFullYear();
    return(
        <footer>
            <div className="px-[5%] bg-black">
                <div className="flex items-center gap-5 flex-col sm:flex-row justify-center  sm:justify-between border-t border-[#707070] py-[5%]">
                    <div className="flex flex-col gap-y-3 items-center sm:max-w-[30%]">
                        <div className="">
                            <Image src="/assets/images/logo.png" width={74} height={100} alt="website logo"/>
                        </div>
                        <p className=" text-[19px] font-normal font-kamerik text-white"><span>&copy;</span> BLACVOLTA {currentyear} | all rights reserved</p>
                    </div>
                    <div className="md:mr-8 lg:mr-16 flex items-center justify-center flex-col" > 
                        <p className="mb-4 text-white text-[24px]">Legal</p>
                        <div className="text-[#A1A1A1] flex flex-col gap-3 items-center font-normal text-[14px]">
                            <Link href="/terms-and-privacy">Privacy Policy</Link>
                            <Link href="/regulatory-and-disclosure">Regulatory and Disclosure</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}