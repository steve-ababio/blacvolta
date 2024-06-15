import { Dialog } from 'primereact/dialog';
import DialogContent from '@/app/components/eventdialogcontent/eventdialogcontent';
import { IoCloseOutline } from 'react-icons/io5';

type EventDialogProps = {
    visible:boolean,
    closeEventDialog:()=>void,
    date:Date|null|undefined
}

export default function EventDialog({visible,closeEventDialog,date}:EventDialogProps){
    return (
        <Dialog 
            headerStyle={{backgroundColor:"rgb(22,22,22)",padding:0,}} 
            contentStyle={{backgroundColor:"rgb(22,22,22)"}}
            closeIcon={<IoCloseOutline className='hover:bg-[rgb(22,22,22)] p-0 m-0 h-full w-full' color='white' size={30} />}
            resizable={false}
            position='top' 
            visible={visible}
            closeOnEscape
            onHide={closeEventDialog} 
            className="h-[90vh] w-full sm:h-auto"
            draggable={false}
            dismissableMask={true}
            focusOnShow={true}   
        >
            <DialogContent date={date?.toDateString()} />   
        </Dialog>
    )
}