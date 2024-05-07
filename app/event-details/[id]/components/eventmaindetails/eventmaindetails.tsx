import { IconType } from "react-icons"
import { twMerge } from "tailwind-merge"

interface EventMainDetailsProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    Icon:IconType,
    title:string,
    titlesibling?:React.ReactNode
}
export default function EventMainInfo({Icon,title,titlesibling,className}:EventMainDetailsProps){
    return(
        <div className="flex items-center gap-x-4">
            <div className={twMerge(`flex justify-center items-center h-10 w-10 rounded-[12px]`,className)}>
                <Icon className="text-slate-600" size={20} />
            </div>
            <div className="text-slate-600 flex-[7] m-[10px]">
                <h2 className="my-[10px] text-[16px] font-bold">{title}</h2>
                {titlesibling}
            </div>
        </div>
    )
}