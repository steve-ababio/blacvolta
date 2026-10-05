import Partners from "../bv-card/components/partners/partners.component";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import { PartnerType } from "../types/enums";
import Description from "./components/description/description";
import Hero from "./components/hero/hero";
import OurWorks from "./components/our-works/our-works";

export default function BvSocial() {
    return (
        <main className="bg-bblack min-h-screen w-[100%]">
            <NavBar />
            <Hero />
            <div className="max-w-4xl mx-auto py-6 mt-4 px-7 md:px-0 font-kamerik text-white text-start md:text-center text-balance">
                <p className="mb-4">
                    BlacVolta is an African media, lifestyle and technology company founded in 2022, building at the intersection of culture, creativity, commerce and technology.
                </p>
                <p>
                    Its core media and digital arm, BV Social, provides digital marketing, PR, content creation, influencer marketing, paid media, brand positioning, strategy and design for businesses across lifestyle, entertainment, hospitality and the corporate sector.
                </p>
            </div>
            <OurWorks />
            <Description />
            <Partners type={PartnerType.BV_SOCIAL} />
            <Footer />
        </main>
    )
}