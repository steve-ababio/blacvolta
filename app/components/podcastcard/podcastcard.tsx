
export default function PodcastCard({children}:{children:React.ReactNode}){
    return (
        <div title="spotify podcast" className="flex-grow flex-shrink basis-full sm:max-w-[45%]">
            {children}
        </div>
    )
}