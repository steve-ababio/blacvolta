export default function EventImage({FlyerImagePath}:{FlyerImagePath:string}){
    return(
        <div className={`h-[40dvh] w-[100%] rounded-[8px] mx-auto my-[35px]`}>
            <img
                id="flyerimage"
                src={`${FlyerImagePath}`}
                className="max-w-full max-h-full mx-auto rounded-[10px]"
                alt="Event flyer"
                fetchPriority="high"
            />
        </div>
    )
}