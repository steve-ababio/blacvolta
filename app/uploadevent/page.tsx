import { ToastContainer } from "react-toastify";
import EventForm from "./components/eventform/eventform";
import NavBar from "../components/navbar/navbar";

export default function UploadEvent(){
    return(
        <main className=" bg-bvprimary pt-1 min-h-screen w-full">
            <NavBar />
            <div className="bg-bvprimary mt-[90px] lg:mt-[150px] w-[80%] mx-auto max-w-[50rem] text-white ">
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