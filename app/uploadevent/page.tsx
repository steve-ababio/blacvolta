import { ToastContainer } from "react-toastify";
import EventForm from "./components/eventform/eventform";
import NavBar from "../components/navbar/navbar";
// import ComingSoon from "./components/comingsoon/comingsoon";

export default function UploadEvent(){
    return(
        <main className=" bg-bvprimary pt-1 min-h-screen w-full">
            <NavBar />
            <div className="bg-bvprimary mt-[90px] lg:mt-[120px] h-full w-[80%] mx-auto max-w-[50rem] text-white ">
                <h1 className="text-[2rem] md:text-[2.4rem] text-white font-bold text-center">PUBLISH MY EVENT</h1>   
                <ToastContainer 
                    position="top-center"
                    theme="light"
                    hideProgressBar={true}
                    autoClose={5000}
                />
                <EventForm />
            </div>
        </main>
    )
}