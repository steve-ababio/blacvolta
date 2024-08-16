"use client"
import { SubmitHandler, useForm } from "react-hook-form";
import { RotatingLines } from "react-loader-spinner";
import { useEffect, useRef, useState} from "react";
import { BsFolderPlus } from "react-icons/bs"; 
import { IoImageOutline } from "react-icons/io5";
import { Slide, toast } from "react-toastify";
import { IEventForm } from "@/app/constants";
import Error from "@/app/uploadevent/components/error/error";
import Select from "@/app/uploadevent/components/select/select";
import EventFormControl from "@/app/uploadevent/components/eventformcontrol/eventformcontrol";

const options = {
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["establishment"]
};
const emailpattern =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
function formatTime(hourstring:string){
    let meridian = "";
    let hour = parseInt(hourstring, 10);
    if(hour > 12){
        meridian = "PM";
        hour -= 12;
    }else if(hour < 12){
        meridian = "AM";
        if(hour === 0){
            hour = 12;
        }
    }else{
        meridian = "PM";
    }
    return[hour,meridian]
}

export default function EventForm(){
    const autocompleteref = useRef<google.maps.places.Autocomplete>();
    const inputref = useRef<HTMLInputElement|null>(null);
    const selectref = useRef<HTMLSelectElement>(null);
    const venue = useRef<string>("");
    const [iseventweekly,setIsEventWeekly] = useState(false);
    const [fileloadedmessage,setFileLoadedMessage] = useState("");
    const [open,setOpen] = useState(false);
    const eventimage = useRef<File>();

    const{
        register,
        handleSubmit,
        clearErrors,
        formState:{isSubmitting,errors},
    } = useForm<IEventForm>();

    const {ref,...rest} = register("eventvenue",{required:"Event venue is required"});

    useEffect(function(){
        autocompleteref.current = new window.google.maps.places.Autocomplete(inputref.current!,options);
        autocompleteref.current.addListener("place_changed",getPlace);
    },[]);

    async function getPlace(){
        const place = await autocompleteref.current!.getPlace();
        venue.current = `${place.name}`;
        if(errors.eventvenue!.message!.length > 0)
            clearErrors("eventvenue")
    }
    const submitFormData:SubmitHandler<IEventForm> = async(formeventdata)=>{
        const [hourstring,minute] = formeventdata.eventtime.split(":");
        const [hour,meridian] = formatTime(hourstring);
        const eventtime = `${hour}:${minute} ${meridian}`;
        let selecteddayofweek = (selectref.current) ? selectref.current!.value : "";

        const formdata = new FormData();
        for(const [key,value] of Object.entries(formeventdata)){
            if(key != "eventtime"){
                if(key === "eventflyer"){
                    continue;
                }
                formdata.append(key,value);
            }
        }
        formdata.append("eventflyer",eventimage.current!);
        formdata.append("eventtime",eventtime);
        formdata.append("dayofweek",selecteddayofweek);
        formdata.append("iseventweekly",JSON.stringify(iseventweekly));

        const response = await fetch("/api/submitevent",{method:"POST",body:formdata});
        const {message} = await response.json();
        setOpen(true);
    }
    function obtainImageFile(e:React.ChangeEvent<HTMLInputElement>){
       if(e.target.files && e.target.files.length){
            setFileLoadedMessage(e.target.files[0].name)
            eventimage.current = e.target.files[0];
       }
    }
    function closePopup(){
        setOpen(false);
    }
    function checkEventIsWeekly(e:React.ChangeEvent<HTMLInputElement>){
        setIsEventWeekly(e.target.checked);
    }
    return(
        <form onSubmit={handleSubmit(submitFormData)} className="flex flex-col bg-bvprimary mt-8 gap-y-5">
            <EventFormControl 
                onChange={()=>clearErrors("organizationname")}
                register={register}
                validationrules={{required:"Organization Name is required"}}
                name="organizationname"
                aria-required="true" type="text" label="Organization Name *"
                errormessage={errors.organizationname?.message}
            />
            <EventFormControl 
                onChange={()=>clearErrors("email")}
                register={register}
                validationrules={{required:"Email is required",pattern:{message:"Please provide a valid email",value:emailpattern}}}
                name="email"
                aria-required="true" type="email" label="Email *"
                errormessage={errors.email?.message}
            />
            <EventFormControl 
                onChange={()=>clearErrors("phonenumber")}
                register={register}
                validationrules={{required:"Phone number is required"}}
                name="phonenumber" 
                aria-required="true" type="text" label="Phone number *"
                errormessage={errors.phonenumber?.message}
            />
             <div className="h-fit my-3">
                <input 
                    id="image" className="w-0 h-0 overflow-hidden peer"
                    {...register("eventflyer",{required:"Event flyer image is required"})}
                    onChange={e=>{clearErrors("eventflyer"); obtainImageFile(e)}} type="file"
                    aria-required="true" accept="image/*"
                />
                <label htmlFor="image" className="
                    cursor-pointer inline-flex border mb-[6px]
                     shadow-sm peer-focus:ring-white
                    border-white w-fit peer-focus:ring-2
                    px-4 py-2 gap-x-3 rounded-[8px] text-white"
                >
                    <BsFolderPlus size={25} />
                    <span>Select Event Image *</span>
                </label>
                {fileloadedmessage != "" && <div className="rounded-[5px] text-white  flex items-center gap-x-2"><IoImageOutline  className="text-white " size={25}/>{fileloadedmessage}</div>}
                {( errors.eventflyer?.message != undefined) && <Error message={errors.eventflyer?.message!} errortype = "danger" />}
            </div>
            <EventFormControl 
                onChange={()=>clearErrors("eventname")}
                register={register}
                validationrules={{required:"Event Name is required"}}
                name="eventname"
                aria-required="true" type="text" label="Event Name *"
                errormessage={errors.eventname?.message}
            />
            <div className="flex items-center gap-x-4">
                <input 
                    id="isweekly" 
                    onChange={checkEventIsWeekly}
                    type="checkbox" name="isweekly" 
                    className="h-5 w-5 focus:ring-2 focus:ring-white" 
                />
                <label htmlFor="isweekly" className="text-white">Does event recur weekly?</label>
            </div>
            {
                iseventweekly && <Select ref={selectref} selectedvalue="0"  />
            }
            {
                !iseventweekly && <EventFormControl 
                    register={register}
                    onChange={()=>clearErrors("eventdate")}
                    validationrules={{required:"Event Date is required"}}
                    name="eventdate"
                    aria-required="true" type="date" label="Event Date *" 
                    errormessage={errors.eventdate?.message}
                    disabled ={iseventweekly}
                />
            }
            <EventFormControl 
                register={register}
                validationrules={{required:"Event time is required"}}
                onChange={()=>clearErrors("eventtime")}
                name="eventtime"  
                aria-required="true" type="time" label="Event Time *"
                errormessage={errors.eventtime?.message}
            />
            <div>
                <label className="text-white">Venue *</label>
                <input 
                    {...rest}
                    name="eventvenue"
                    aria-required="true" 
                    ref={(e)=>{
                        ref(e)
                        inputref.current = e;
                    }}
                    className="
                        form-control focus:ring-2
                      focus:ring-white mb-2 placeholder:text-[#9b9b9b]
                      text-white bg-transparent
                    " 
                />
                {( errors.eventvenue?.message != undefined) && <Error message={errors.eventvenue?.message!} errortype = "danger" />}
            </div>
            <EventFormControl 
                register={register}
                name="ticketlinks"
                type="text" label="Ticket Links:" 
            />
            <EventFormControl 
                register={register}
                name="inquirynumber"
                type="tel" label="Inquiry Number:"
            />
            <div>
                <label htmlFor="description" className="text-white">Description</label>
                <textarea 
                    {...register("eventdescription",)}
                    rows={3} id="description" className="
                    py-2 dark:text-slate-200 px-4 
                    dark:bg-transparent block border
                  border-slate-200 rounded-[5px] 
                     focus:ring-2 focus:ring-white
                    outline-none w-full bg-transparent"/>
            </div>
            <EventFormControl 
                register={register}
                name="sociallinks"
                type="text" label="Social Link"
            />
            <button 
                disabled={isSubmitting}
                className={`
                     bg-white flex justify-center 
                    items-center text-black w-fit px-6 
                    py-2 rounded-md mb-10
                    ${isSubmitting?'opacity-50 cursor-not-allowed':''}
                    `}
                    onClick={handleSubmit(submitFormData)}>
                    {
                        isSubmitting ? 
                            <>
                                <RotatingLines 
                                    strokeColor="black" 
                                    strokeWidth="4"
                                    animationDuration="0.8"
                                    width="20"
                                    visible={true} 
                                />
                                <span className="text-[14px]">Adding event</span> 
                            </>
                            :<span className="text-[14px]">Add Event</span>
                    }
            </button>
        </form>
    )
}