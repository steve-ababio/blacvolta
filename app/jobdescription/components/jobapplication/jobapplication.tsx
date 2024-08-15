import { HiringFormSchema } from "@/schemas";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { MdAttachFile } from "react-icons/md";
import JobApplicationFormControl from "../jobapplicationformcontrol/jobapplicationformcontrol";

interface JobApplicationProps{
    jobtitle:string
}
type Status = "error"|"success";
type FileMessage = {
  message:string,
  status:Status
}
const acceptedextensions = [".doc",".docx",".pdf"];
const MAX_UPLOAD_SIZE = 1024 * 1024 * 5;
export type HiringFormType = Zod.infer<typeof HiringFormSchema>;

export default function JobApplication({jobtitle}:JobApplicationProps) {
  const document = useRef<File>();
    const [filemessage,setFileMessage] = useState<FileMessage>({message:"",status:"success"});
    const [emailmessage,setEmailMessage] = useState("");
    const {
      register,
      handleSubmit,
      clearErrors,
      formState:{errors,isSubmitting},
    } = useForm<HiringFormType>({
        mode:"onSubmit",
        resolver:zodResolver(HiringFormSchema)
    });
  
    const processForm:SubmitHandler<HiringFormType> = async(data)=>{
        if(!document.current){
            setFileMessage({message:"Please provide a cv to complete job application.",status:"error"});
            return;
        }
        const hiringdata = {...data,document:document.current!,jobtitle};
        const formdata = new FormData();
        for(let[key, value] of Object.entries(hiringdata)){
            formdata.append(key,value);
        }
        try{
            const response = await fetch('/api/jobapplication',{method:"POST",body:formdata});
            const resdata = await response.json();
        if(resdata.success){
          setEmailMessage("Application sent successfully");
        }
        }catch(error){
            console.log(error);
        }
    }
    function obtainImageFile(e:React.ChangeEvent<HTMLInputElement>){
      if(e.target.files && e.target.files.length){
          const file = e.target.files[0];
          const extension = file.name.substring(file.name.indexOf("."));
          if(!acceptedextensions.includes(extension)){
            setFileMessage({message:"Only .pdf, .doc and .docx files are allowed.",status:"error"});
            return;
          }
          if(file.size > MAX_UPLOAD_SIZE){
            setFileMessage({message:"File size cannot exceed 5MB",status:"error"});
            return;
          }
          setFileMessage({message:file.name,status:"success"});
          document.current = file;
      }
    }

    return (
        <section className="text-center pt-20">
        <h2 className="text-[20px] border-b text-balance text-start sm:text-center border-[#9f9f9f34] pb-3 font-bold text-white mb-8">{jobtitle} application form</h2>
        <form onSubmit={handleSubmit(processForm)} className="max-w-[30rem] w-full mx-auto">
                <JobApplicationFormControl
                    type="text" placeholder="Daniel Mills"
                    register={register} name="name" label="Full name *"
                    errormessage={errors.name?.message} onChange={()=>clearErrors("name")}
                />
                <JobApplicationFormControl
                    type="email" placeholder="example@email.com"
                    register={register} name="email" label="E-mail *"
                    errormessage={errors.email?.message} onChange={()=>clearErrors("email")}
                />
                <div className="my-4">
                    <div className="h-fit">
                        <input 
                            id="file" className="w-0 h-0 peer overflow-hidden"
                            onChange={obtainImageFile}   
                            type="file" aria-required="true"
                            accept=".pdf,.doc,.docx" name="file"
                        />
                        <label htmlFor="file" className="
                            cursor-pointer inline-flex border mb-[6px]
                        border-white shadow-sm peer-focus:ring-black
                            w-fit peer-focus:ring-2 px-6 py-2 gap-x-2 rounded-[8px]
                        text-white"
                        >
                            <MdAttachFile size={20} />
                            <span>Attach CV</span>
                        </label>
                    </div>
                    {filemessage.message.length > 0 && <div className={`text-center w-full text-[14px] py-2 ${filemessage.status === "error" ? 'text-red-500':'text-white'}`}>{filemessage.message}</div>}
                </div>
                {emailmessage.length > 0 && <div className="py-4 text-slate-600 text-center">{emailmessage}</div>}
                <button disabled={isSubmitting} onSubmit={handleSubmit(processForm)}
                    className={`
                    focus-visible:outline-2 focus-visible:outline-white 
                    outline-offset-[4px] py-[10px] px-20 bg-[rgb(36,36,36)]
                    shadow-md hover:opacity-90 text-white rounded-[6px] `}
                >
                    {isSubmitting ? 
                    <span className="flex items-center justify-center gap-x-3">
                        <div className="
                        h-5 w-5 rounded-[50%] border-[3px] animate-spin
                        border-white border-l-slate-400"
                        ></div>
                    </span>:'Apply'}
                </button>
        </form>
        </section>
    )
}