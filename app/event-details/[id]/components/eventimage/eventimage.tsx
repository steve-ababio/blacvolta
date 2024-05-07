import Image from "next/image";

export default function EventImage({FlyerImagePath}:{FlyerImagePath:string}){
    return(
        <div className={`h-[38vh] aspect-[1/1] rounded-[10px] relative mx-auto my-[35px]`}>
            <Image
                src={FlyerImagePath}
                style={{borderRadius:"10px"}}
                layout="fill"
                objectFit="contain"
                alt="Event flyer"
            />
        </div>
    )
}