import Header from '../components/header/header';
import CalenderModal from './components/calendermodal/calendermodal';

export default function Calender(){
    return(
        <div className="h-dvh bg-black">
            <Header />
            <div className="h-full flex flex-col items-center justify-center">
                <div className="text-center -mt-[150px] mb-[90px]">
                    <h1 className='poppins text-[20px] sm:text-[30px] text-white'>UPCOMING EVENTS</h1>
                </div>
                <CalenderModal />
            </div>
            
        </div>
    )
}