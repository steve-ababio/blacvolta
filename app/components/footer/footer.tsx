import Image from "next/image";

export default function Footer(){
    const currentyear = new Date().getFullYear();
    return(
        <footer>
            <div className="px-[5%] bg-black">
                <div className=" border-t border-[#707070] py-[5%]">
                    <div className="flex flex-col gap-y-3 items-center sm:max-w-[30%]">
                        <div className="">
                            <Image src="/assets/images/logo.png" width={74} height={100} alt="website logo"/>
                        </div>
                        <p className=" text-[19px] font-normal font-kamerik text-white"><span>&copy;</span> BLACVOLTA {currentyear} | all rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}