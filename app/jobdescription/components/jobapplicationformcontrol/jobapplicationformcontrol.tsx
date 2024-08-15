import React, { useId } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import Error from "@/app/jobdescription/components/error/error";

export type JobApplicationFormType = {
    name:string,
    email:string,
}
interface FormControlProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label:string,
    type:"text"|"email",
    register:UseFormRegister<JobApplicationFormType>,
    errormessage?:string,
    name:keyof JobApplicationFormType,
    validationrules?:RegisterOptions<JobApplicationFormType> | undefined,
    controlname?:string
}

const JobApplicationFormControl = ({register,name,label,type,placeholder,onChange,className,disabled,errormessage="",validationrules}:FormControlProps)=> {
    const controlId = useId();
    return(
        <div className={`w-full text-left ${disabled ? 'opacity-50': ''} pb-6`}>
            <label htmlFor={controlId} className={`text-white ${disabled ? 'cursor-not-allowed': ''}`}>{label}</label>
            <input 
                {...register(name,validationrules)} 
                disabled={disabled} 
                onChange={onChange} 
                placeholder={placeholder}
                className={twMerge(`border placeholder:text-[#8080805e] text-white bg-transparent mb-2 disabled:cursor-not-allowed border-white focus:ring-2 outline-none duration-300 px-4 focus:ring-white rounded-[5px] w-full py-2`,className)}
                type={type} id={controlId}
            />
            {(errormessage != "" || errormessage !== undefined) && <Error message={errormessage!} errortype="danger"/>}
        </div>
    )
}
export default JobApplicationFormControl;