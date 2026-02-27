import NavBar from "@/app/components/navbar/navbar";
import JobItem from "./components/jobitem/jobitem";
import { jobsList } from "../data/jobs/data";
import { JobHero } from "../components/job-hero/job-hero";
import { JobSection } from "../components/job-section/job-section";
import { JobResponsibilities } from "../components/job-responsibilities/job-responsibilities";
import { JobList } from "../components/job-list/job-list";
import { JobPreviewCard } from "./components/jobitem/preview-card/job-preview-card";
import Footer from "../components/footer/footer";

export default function Jobs(){
    return(
        // <main className=" bg-bvprimary pt-1 min-h-screen w-full">
        //     <NavBar />
        //     <div className="w-[90%] min-h-[calc(100vh-60px)] flex flex-col gap-y-12 mx-auto max-w-[45rem] mt-[80px] py-5 md:mt-[125px]">
        //         <h1 className="text-white text-[2.2rem] md:text-[3rem] font-bold  text-center">JOIN THE BRAND</h1>
        //         {
        //             jobs.map(({id,name,department})=><JobItem key={id} id={id} name={name} department={department} />)
        //         }
        //     </div>
        // </main>
            <main >
                <NavBar />
                <div className="min-h-screen bg-[#110F0D]">
                <header className="relative h-[400px] md:h-[500px] lg:h-[600px] flex justify-center items-center overflow-hidden">
                  {/* <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#e8b346]/10 blur-[120px] pointer-events-none" /> */}
                    <div className="absolute inset-0">
                        <img
                            src="/assets/images/about-hero-bg.jpg"
                            alt=""
                            className="w-full h-full object-cover opacity-40"
                        />
                    </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent" />
                  <div className="relative mx-auto max-w-3xl px-6 pt-20 pb-16 space-y-4">
                    <span className="inline-block rounded-full bg-[#e8b346]/15 px-4 py-1.5 text-sm font-medium text-[#e8b346]">
                      Careers
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[white] leading-[1.1]">
                      Join Blacvolta
                    </h1>
                    <p className="text-[#938578] text-lg max-w-xl">
                      Shape the future of culture-led marketing across Ghana and Africa. Explore open roles below.
                    </p>
                  </div>
                </header>
          
                <main className="mx-auto w-full px-3 md:px-6 pb-4 mb-20">
                  <h2 className="text-white font-semibold text-4xl text-center mb-8">Available Jobs</h2>
                  <div className="space-y-4 grid justify-center grid-cols-[repeat(auto-fill,minmax(420px,1fr))] ">
                    {jobsList.map((job) => (
                      <JobPreviewCard key={job.id} job={job} />
                    ))}
                  </div>
                </main>
                <Footer />
              </div>
              </main>
            );
        
        }
