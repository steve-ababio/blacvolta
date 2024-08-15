import Hero from "@/app/components/hero/hero";
import TeamCard from "@/app/components/teamcard/teamcard";
import { bvteam } from "@/app/data/team/data";

export default function Team(){
    return(
        <main className="min-h-screen">
            <Hero headertext="THE TEAM" />
            <h1 className="text-white text-center font-black text-[40px] py-8">MEET THE TEAM</h1>
            <div className="pt-[3rem] px-[5%]">
                <div className="
                    justify-center items-center flex flex-col md:items-start
                    w-full md:grid theteam md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]
                    lg:grid-cols-[repeat(auto-fit,350px)] gap-10 pb-5">
                    {
                        bvteam.map(({fullname,role,imageurl,quotes})=>(
                            <TeamCard 
                                key={role}
                                fullname={fullname}
                                role={role}
                                imageurl={imageurl}
                                quotes={quotes}
                            />
                        ))
                    }
                </div>
            </div>
        </main>
    )
}