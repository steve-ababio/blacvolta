import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import Description from "./components/description/description";
import Hero from "./components/hero/hero";

export default function BvSocial(){
    return(
        <main className="bg-bblack min-h-screen w-[100%]"> 
            <NavBar />
            <Hero />
            <Description />
            <Footer />
        </main>
    )
}