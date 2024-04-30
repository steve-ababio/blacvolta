type EventDetailFooterItemProps = {
    icon:React.ReactElement,
    text:string
    onclick?:(e:React.MouseEvent)=>void;
};
export default function EventDetailFooterItem({icon,text,onclick}:EventDetailFooterItemProps){
    return(
        <button className="cursor-pointer flex-1" onClick={onclick}>
            <div className="flex flex-col items-center">
                <div>
                    {icon}
                </div>
                <p className="text-[13px] sm:text[16px] text-center">{text}</p>
            </div>
        </button>
    )
}