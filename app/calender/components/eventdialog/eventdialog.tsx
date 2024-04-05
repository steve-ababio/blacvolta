import { Dialog } from 'primereact/dialog';
import { Suspense } from 'react';
import DialogContent from '../eventdialogcontent/eventdialogcontent';
import Loading from '../../loading';

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
            onHide={closeEventDialog} 
        >
            <Suspense fallback={<Loading />}>
                <DialogContent date={date?.toDateString()} />   
            </Suspense>
        </Dialog>
    )
}