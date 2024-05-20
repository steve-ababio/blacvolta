import { IconType } from "react-icons"
import { twMerge } from "tailwind-merge";

interface EventMainDetailsProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    Icon:IconType,
    title:string,
    titlesibling?:React.ReactNode
}
export default function EventMainInfo({Icon,title,titlesibling,className}:EventMainDetailsProps){
    return(
        <div className="flex items-center gap-x-7">
            <div className={twMerge(`flex justify-center shadow-md items-center h-[42px] w-[42px] rounded-[8px]`,className)}>
                <Icon className="text-white" size={30} />
            </div>
            <div className="text-white flex-[7]">
                <h2 className="text-[16px] kamerik font-bold">{title}</h2>
                {titlesibling}
            </div>
        </div>
    )
}