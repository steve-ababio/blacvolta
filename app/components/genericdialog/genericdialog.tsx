import { Dialog } from "primereact/dialog";
import { IoCloseOutline } from "react-icons/io5";

type GenericDialogProps = {
    visible:boolean,
    closeEventDialog:()=>void,
    children:React.ReactNode

}
export default function GenericDialog({visible,closeEventDialog,children}:GenericDialogProps){
    return(
        <Dialog 
            headerStyle={{backgroundColor:"rgb(22,22,22)",paddingBlock:15, paddingInlineEnd:30}} 
            contentStyle={{backgroundColor:"rgb(22,22,22)",scrollBehavior:"smooth"}}
            closeIcon={<IoCloseOutline className="hover:bg-[rgb(22,22,22)] hover:outline-[rgb(22,22,22)] p-0 -m-10 h-10 w-10" color='white'/>}
            resizable={false}
            ariaCloseIconLabel="close dialog"
            position="center" 
            visible={visible}
            closeOnEscape
            onHide={closeEventDialog} 
            className="h-screen w-screen max-h-full"
            headerClassName="shadow_lg"
            draggable={false}
            dismissableMask={true}
            focusOnShow={true} 
            blockScroll={true}
        >
            {children}
        </Dialog>
    )
}