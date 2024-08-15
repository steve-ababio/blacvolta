import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface JobItemProps{
    name:string,
    department:string,
    id:string

}
export default function JobItem({name,department,id}:JobItemProps){
    return(
        <div className="w-full mx-auto py-10 bg-[#201f1f] rounded-[16px] text-white">
            <div className="px-12 [@media_(max-width:500px)]:px-5 flex flex-col gap-y-16">
                <div>
                    <div className="flex  items-center gap-x-4">
                        <h1 className="text-white mb-2 text-[1.2rem] md:text-[1.25rem] font-bold ">{name}</h1>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-x-4">
                    <div className=" rounded-[100px] text-white font-bold bg-[#1b1b1b] border-2 border-white w-fit px-5 sm:px-10 py-2">{department}</div>
                    <Link href={`/jobdescription/${id}`} className="hover:bg-[#ffffffe1] group duration-300 bg-white px-8 py-2 text-slate-700 rounded-[30px] ">
                        <span className="font-medium">More info</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}