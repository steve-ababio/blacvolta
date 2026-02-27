// import Hero from "@/app/components/hero/hero"
import Hero from "../components/hero/hero"
import TeamGrid from "./components/team-grid"

export default function Team(){
    
    return(
        <main className="min-h-screen">
            <Hero headertext="THE TEAM" />
            <h1 className="text-white text-center font-black text-[40px] py-8">MEET THE TEAM</h1>
            <div className="pt-[3rem] px-[5%]">
                <div className=" items-center flex flex-col md:items-start w-full md:grid theteam md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]
                    lg:grid-cols-[repeat(auto-fit,450px)] gap-10 pb-5"
                >
                    <TeamGrid />
                </div>
            </div>
        </main>
    )
}