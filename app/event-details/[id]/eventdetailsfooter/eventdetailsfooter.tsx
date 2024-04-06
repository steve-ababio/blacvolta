export default function EventDetailFooter({icon,text}:{icon:React.ReactElement,text:string}){
    return(
        <div className="flex-1 flex flex-col items-center justify-center">
            <div>
                {icon}
            </div>
        <p className="text-[13px] sm:text[16px] text-center">{text}</p>
    </div>
    )
}