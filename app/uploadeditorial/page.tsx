import { ToastContainer } from "react-toastify";
import NavBar from "@/app/components/navbar/navbar";
import EditorialForm from "./components/editorialform";
import "react-toastify/dist/ReactToastify.css";

export default function UploadBlog(){
    return(
        <main className=" bg-bvprimary pt-1 min-h-screen w-full">
            <NavBar />
            <div className="bg-bvprimary mt-[90px] lg:mt-[120px] w-[80%] mx-auto max-w-[50rem] text-white ">
                <h1 className="text-[2.4rem] text-white font-bold text-center">EDITORIAL</h1>
                <ToastContainer 
                    position="top-center"
                    theme="light"
                    hideProgressBar={true}
                    autoClose={5000}
                />
                <EditorialForm />
            </div>
        </main>
    )
}