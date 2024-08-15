import NavBar from "@/app/components/navbar/navbar";
import JobItem from "./components/jobitem/jobitem";
import { jobs } from "../data/jobs/data";

export default function Jobs(){
    return(
        <main className=" bg-bvprimary pt-1 min-h-screen w-full">
            <NavBar />
            <div className="w-[90%] min-h-[calc(100vh-60px)] flex flex-col gap-y-12 mx-auto max-w-[45rem] mt-[80px] py-5 md:mt-[125px]">
                <h1 className="text-white text-[2.2rem] md:text-[3rem] font-bold  text-center">JOIN THE BRAND</h1>
                {
                    jobs.map(({id,name,department})=><JobItem key={id} id={id} name={name} department={department} />)
                }
            </div>
        </main>
    )
}