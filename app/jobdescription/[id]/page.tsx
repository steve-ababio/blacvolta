"use client"
import GenericDialog from "@/app/components/genericdialog/genericdialog";
import NavBar from "@/app/components/navbar/navbar";
import { jobinfo } from "@/app/data/jobs/data";
import { useState } from "react";
import JobApplication from "../components/jobapplication/jobapplication";

export default function JobDescription({ params }: { params: { id: string } }){
    const job = jobinfo[parseInt(params.id,10)];
    const [show,setShow] = useState(false);
    
    function closeDialog(){
        setShow(false);
    }
    return(
        <main className=" bg-bvprimary pt-1 min-h-screen w-full">
            <NavBar />
            <div className="w-full">
                <header className="py-14 mt-[80px] md:mt-[130px] bg-white">
                    <h2 className="font-bold mx-auto max-w-[45rem] w-[90%] text-[2rem] md:text-[3rem] text-slate-900">{job.jobtitle}</h2>
                </header>
                <div className="w-[90%] min-h-[calc(100vh-60px)] mx-auto max-w-[45rem] pt-3 pb-5">
                    <div className="text-right mt-8">
                        <button onClick={()=>setShow(true)} className="bg-[#272727] text-white py-2 px-12 shadow-lg rounded-[30px]">Apply</button>
                    </div>
                    <div className="pt-10">
                        <div className="pl-3 w-fit pr-24 py-2 bg-white [clip-path:polygon(0%_0%,90%_0%,100%_100%,0%_100%)]">
                            <h2 className=" font-semibold text-slate-700 ">
                                Responsibilities
                            </h2>
                        </div>
                        <div>
                            <ul className="pt-8">
                                {
                                    job.responsibilities.map((responsibility,idx)=>(<li key={idx} className="mb-6 ml-4 leading-6 list-outside list-disc text-white">{responsibility}</li>))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="pt-4">
                        <div className="pl-3 w-fit pr-24 py-2 bg-white [clip-path:polygon(0%_0%,90%_0%,100%_100%,0%_100%)]">
                            <h2 className=" font-semibold text-slate-700 ">
                                Qualifications
                            </h2>
                        </div>
                        <div>
                            <ul className="pt-8">
                                {
                                    job.qualifications.map((qualification,idx)=>(<li key={idx} className="mb-6 leading-6 ml-4 list-outside list-disc text-white">{qualification}</li>))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="py-8 bg-white">
                <div className="w-[90%] max-w-[45rem] mx-auto text-center">
                    <span className="text-slate-700 text-[1.1rem] text-start font-bold">Deadline of submission 17th October</span>
                </div>
            </footer>
            <GenericDialog visible={show} closeEventDialog={closeDialog}>
                <JobApplication jobtitle={job.jobtitle}/>
            </GenericDialog>
        </main>
    )
}