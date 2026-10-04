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
                    BV social is a forward-thinking digital marking agency dedicated to helping businesses amplify their online presence and achieve measurable results.
                    We specialize in crafting tailored strategies that integrate social media marketing content creation, paid advertising, and analytics to drive engagement, growth and ROI.
                </p>
                <p>
                    At BV Social, we blend creativity with data-driven insights to build impactful campaigns that resonate with audiences across diverse platforms.
                    Whether you&apos;re looking to elevate brand awareness, generate leads, or faster community loyalty, our team of experts is committed to turning you digital goals into reality.
                </p>
            </div>
            <OurWorks />
            <Description />
            <Partners type={PartnerType.BV_SOCIAL} />
            <Footer />
        </main>
    )
}