import { BsCalendar2Date } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

type BlogDetailsProp = {
    title: string,
    author:string,
    blogdate: string
}
export default function BlogDetails({title,author,blogdate}: BlogDetailsProp){
    return(
        <div className="border-b w-full pb-3 mt-6 border-b-slate-300/40">
            <h1 className="text-[35px] md:text-[40px] mb-5 kamerik font-black md:text-center text-white">{title}</h1>
            <div className="flex items-center mb-2 gap-x-3">
                <FaRegUser className="text-white" size={20} />
                <h2 className="text-white md:text-[18px] text-[16px] font-bold text-slate-white">{author}</h2>
            </div>
            <div className="flex items-center gap-x-3">
                <BsCalendar2Date className="text-white" size={20}/>
                <h2 className="font-bold text-[#9A9A9A] text-[13px]">{blogdate}</h2>
            </div>
        </div>
    )
}