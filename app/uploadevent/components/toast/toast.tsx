import { RiInformationFill } from "react-icons/ri";

type ToastProps = {
    open: boolean,
    closePopup:()=>void,
}
export default function Toast({open,closePopup}:ToastProps){
    return(
        <div className={`
            fixed ${open ?'visible':'invisible'}
            pointer-events-auto inset-0 z-[200] 
            flex justify-center items-center
            bg-black/30 backdrop-blur-[8px]`
        }>
            <div className={`
                ${open ?'translate-y-0 opacity-100':'translate-y-full opacity-0'}
                duration-500 rounded-[6px] w-[90%] max-w-[22rem] z-[130]
                px-12 py-6 pointer-events-auto text-white
                shadow-md bg-[#191C20] `
            }>
                <div className="flex items-center gap-x-3 py-2" >
                    <div><RiInformationFill size={25}/></div>
                    <h2 className="font-bold">Event request successful</h2>
                </div>
                <p className="py-3 text-white">Your event is pending approval.</p>
                <p className="text-white text-[14px]">Our team will review your submitted event and get back to you in two to three days.</p>
                <div className="text-right pt-3">
                    <button type="button" onClick={closePopup} className="
                        bg-btnprimary text-slate-700 bg-white
                        px-5 rounded-[5px] font-bold
                        py-[5px] hover:shadow-lg duration-300">
                    ok</button>
                </div>
            </div>
        </div>
    )
}