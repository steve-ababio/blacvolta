import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";

export default function EventHeader({EventName}:{EventName:string}){
    return (
        <nav className="flex p-[10px]">
        <Link href="/">
            <div className="mr-[20px]">
                <BiLeftArrowAlt color="rgb(71 85 105" className="hover:scale-125 duration-300" size={30}  />
            </div>
        </Link>
        <header>
            <h1 className="ml-[20px] flex-1 text-slate-700 font-bold text-[20px]">{EventName}</h1>
        </header>
      </nav>
    )
}