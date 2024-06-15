import PodcastCard from "@/app/components/podcastcard/podcastcard"

export default function PodcastStations(){
    return(
        <section className="flex flex-col bg-black pt-[3rem]">
            <div className="px-[5%]">
                <h2 className="pb-8 text-[25px] kamerik font-bold md:text-[30px] text-center text-white">OUR PODCAST STATIONS</h2>
                <div className="flex flex-col sm:flex-row gap-[30px]">
                    <PodcastCard>
                        <iframe 
                            src="https://open.spotify.com/embed/show/4u5QF92QxPQm9DpQmZt5ne?utm_source=generator"
                            width="100%" height="352" allowFullScreen={true}
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy" className="rounded-[12px]"
                        >
                        </iframe>
                    </PodcastCard>
                    <PodcastCard>
                        <iframe 
                            src="https://embed.podcasts.apple.com/gh/podcast/blacvolta-nightlife-podcast/id1597744953" 
                            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                            height="352" 
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                            className="w-full max-w-[660px] overflow-hidden rounded-[10px]"
                            loading="lazy"
                        >
                        </iframe>
                    </PodcastCard>
                </div>
            </div>
        </section>
    )
}