import Image from "next/image";

export default function PulseLoader(){
    return(
        <div className="h-[80dvh] w-[90dvw] flex justify-center items-center">
            <div className="
                flex justify-center items-center
                rounded-[50%] bg-[#eaeaea] relative anim-pulse"
            >
                <Image alt="Blacvolta logo"
                    className="invert relative z-100 object-contain  aspect-[15/16]" 
                    width={50} height={50} src="/assets/images/logo.png" priority
                />
            </div>
        </div>
    )
}