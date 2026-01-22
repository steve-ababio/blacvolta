import Hero from "@/app/components/hero/hero";

export default function About(){
    return(
        <main className="min-h-screen">
            <Hero headertext="ABOUT US" />
            <div className="text-white md:px-[10%] lg:px-[20%] px-8 text-[1rem] leading-8 md:text-[1.1rem] py-12">
                <p >
                    BlacVolta is a dynamic digital media platform transforming
                    the entertainment and tech landscape across Africa.
                    Founded in October 2022, BlacVolta operates from its
                    headquarters in Ghana with a presence in East Africa,
                    the USA, and the UK.
                </p>
                <p>
                    We specialize in media, digital marketing, content creation, 
                    videography, and e-commerce, all with the goal of reshaping
                    how African nightlife, culture, and technology are perceived
                    globally. Driven by a passion for showcasing Africa&apos;s vibrancy 
                    and potential, BlacVolta is committed to celebrating the continent&apos;s 
                    rich cultural diversity through innovative projects and strategic collaborations.
                </p>
                <p >
                    BlacVolta&apos;s impact is felt through initiatives like the
                    BlacVolta Nightlife Podcast, featuring international guests, 
                    and our expansion into Uganda with the Creatives & Creator Community Mixer.
                    We are committed to celebrating Africa&apos;s rich cultural diversity and continuing
                    to lead innovation in media and entertainment.
                </p>
            </div>
        </main>
    )
}