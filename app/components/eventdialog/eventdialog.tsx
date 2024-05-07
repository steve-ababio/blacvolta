import { Dialog } from 'primereact/dialog';
import DialogContent from '../eventdialogcontent/eventdialogcontent';

type EventDialogProps = {
    visible:boolean,
    closeEventDialog:()=>void,
    date:Date|null|undefined
}

export default function EventDialog({visible,closeEventDialog,date}:EventDialogProps){
    return (
        <Dialog headerStyle={{padding:0}} 
            resizable={false}
            position='top' 
            visible={visible}
            closeOnEscape
            onHide={closeEventDialog} 
            className="h-[90dvh] w-full sm:h-auto"
        >
            <DialogContent date={date?.toDateString()} />   
        </Dialog>
    )
}