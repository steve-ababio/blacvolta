import EventDialogDetails from "../eventdialogdetails/eventdialogdetails";

export default async function DialogContent({date}:{date:string|undefined}){
    try{
        const response = await fetch("/events");
        const event = await response.json();
    }catch(error){
        console.log(error);
    }
    
    function renderEventDialogContent(){
        return <div className=' text-[1.1rem] sm:text-[1.5em] text-center mt-[50%]'>No Events found for {date}</div>
        // }else{
        //     return( 
        //         <EventDialogDetails date={date} />
        //     )
        // }
    }
    return(
        <div className="h-dvh sm:h-fit">
            {
               renderEventDialogContent()
            } 
        </div>
    )
}
