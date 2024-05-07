import { twMerge } from "tailwind-merge";

type EventDetailFooterItemProps = {
    icon:React.ReactElement,
    text:string
    onclick?:(e:React.MouseEvent)=>void;
    classname?:string;
};
export default function EventDetailFooterItem({icon,classname,text,onclick}:EventDetailFooterItemProps){
    return(
        <button className={twMerge(`cursor-pointer flex-1`,classname)} onClick={onclick}>
            <div className="flex  flex-col items-center hover:text-blue-400 duration-200">
                <div>
                    {icon}
                </div>
                <p className="text-[13px] sm:text[16px] text-center">{text}</p>
            </div>
        </button>
    )
}