import Image from "next/image";

export default function EventDialogDetails({date}:{date:string|undefined}){
    return (
        <>
            <h2 className="my-3">{date} Events</h2>
            <div className="flex border-b border-b-[#9A9A9A]">
                <div className="p-[10px]">
                    <Image src="/assets/images/coverart.jpg" width={200} height={300} alt="Event flyer" />
                </div>
                <div className="p-[10px] basis-full grow-[3] text-[14px]">
                    <div className="text-[#d2042d]">time | location</div>
                    <div>event name</div>
                    <div className="mt-[5px] text-right">
                        <button className="bg-black text-white px-[3px] rounded-md text-[13px]">more info</button>
                    </div>
                </div>
            </div>
        </>
    )
}