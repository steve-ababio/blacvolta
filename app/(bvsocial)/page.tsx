import Partners from "../bv-card/components/partners/partners.component";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import { PartnerType } from "../types/enums";
import Description from "./components/description/description";
import Hero from "./components/hero/hero";
import OurWorks from "./components/our-works/our-works";

export default function BvSocial(){
    return(
        <main className="bg-bblack min-h-screen w-[100%]"> 
            <NavBar />
            <Hero />
            <OurWorks />
            <Description />
            <Partners type={PartnerType.BV_SOCIAL} />
            <Footer />
        </main>
    )
}