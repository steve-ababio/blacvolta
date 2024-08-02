import React, { useId } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import Error from "../error/error";
import { IEventForm } from "@/app/constants";

interface EventFormControlProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label:string,
    type:"text"|"password"|"time"|"date"|"tel"|"email",
    register:UseFormRegister<IEventForm>,
    errormessage?:string,
    name:keyof IEventForm,
    validationrules?:RegisterOptions<IEventForm> | undefined,
}

const EventFormControl = ({register,name,label,defaultValue,type,onChange,className,disabled,errormessage="",validationrules}:EventFormControlProps)=> {
    const controlId = useId();
    return(
        <div className={`w-full ${disabled ? 'opacity-50': ''}`}>
            <label htmlFor={controlId} className={`text-white ${disabled ? 'cursor-not-allowed': ''}`}>{label}</label>
            <input 
                {...register(name,validationrules)} 
                disabled={disabled} 
                defaultValue={defaultValue} 
                onChange={onChange} 
                className={twMerge(`
                    border text-slate-200 mb-2 
                    disabled:cursor-not-allowed py-2
                    border-slate-200 focus:ring-2
                    outline-none duration-300 bg-transparent
                    px-4 focus:ring-white rounded-[5px]
                    w-full `,className
                )}
                type={type} id={controlId}
            />
            {(errormessage.length > 0 && errormessage !== undefined) && <Error message={errormessage!} errortype="danger"/>}
        </div>
    )
}
export default EventFormControl;