import { Dialog } from 'primereact/dialog';
import DialogContent from '@/app/components/eventdialogcontent/eventdialogcontent';
import { IoCloseOutline } from 'react-icons/io5';
import GenericDialog from '../genericdialog/genericdialog';

type EventDialogProps = {
    visible:boolean,
    closeEventDialog:()=>void,
    date:Date|null|undefined
}

export default function EventDialog({visible,closeEventDialog,date}:EventDialogProps){
    return (
        <GenericDialog closeEventDialog={closeEventDialog} visible={visible}>
            <DialogContent date={date?.toDateString()} />   
        </GenericDialog>
    )
}