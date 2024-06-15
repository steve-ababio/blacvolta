import Hero from "@/app/components/hero/hero";

export default function About(){
    return(
        <main className="min-h-screen">
            <Hero headertext="ABOUT US" />
            <div className="text-white text-justify md:px-[10%] lg:px-[20%] px-8 text-[1rem] leading-8 md:text-[1.1rem] py-12">
                <p className="[word-spacing:-2px]">
                    BlacVolta is a dynamic media, lifestyle, and tech startup committed to revolutionizing
                    the entertainment landscape across Africa. Founded in October 2022 by visionary
                    creative director Joseph Adjei, BlacVolta operates out of its headquarters in Ghana
                    and extends its influence into East Africa, particularly Uganda and Rwanda,
                    the United States of America and the United Kingdom.
                </p>
                <p className="[word-spacing:-2px]">
                    Our core business spans a diverse range of services, including event production, events,
                    e-commerce, tech innovation, talent management, and broadcasting. BlacVolta is not just a company;
                    it&apos;s a movement aimed at reshaping how African nightlife, culture, and technology are perceived globally.
                     Our work is driven by a passion for showcasing the vibrancy and potential of the African continent.
                </p>
                <p className="[word-spacing:-2px]">
                    Joseph Adjei&apos;s leadership has been instrumental in propelling BlacVolta to the forefront of the industry.
                    His commitment to highlighting Ghana&apos;s nightlife and broader African entertainment has garnered international attention,
                    with notable initiatives such as the BlacVolta Nightlife Podcast featuring high-profile guests
                    like Chance The Rapper and Bozoma Saint John.
                </p>
                <p className="[word-spacing:-2px]">
                    BlacVolta&apos;s recent expansion into Uganda includes impactful initiatives like the Creatives & Creator Community
                    Mixer and strategic partnerships with local influencers and businesses, further cementing our role as a transformative
                    force in media and entertainment across Africa.
                </p>
                <p className="[word-spacing:-2px]">
                    Join us as we continue to innovate and celebrate the rich cultural tapestry of Africa through
                    our diverse and groundbreaking projects.
                </p>
            </div>
        </main>
    )
}