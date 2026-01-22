import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";

export default function EventHeader({EventName}:{EventName:string}){
    return (
        <nav className="sm:flex p-[10px] hidden">
        <Link href="/">
            <div className="mr-[20px]">
                <BiLeftArrowAlt color="white" className="hover:scale-125 duration-300" size={30}  />
            </div>
        </Link>
        <header>
            <h1 className="ml-[20px] kamerik font-bold flex-1 text-white  text-[23px]">{EventName}</h1>
        </header>
      </nav>
    )
}