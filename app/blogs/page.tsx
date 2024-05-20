
import { Suspense } from "react";
import BlogHeader from "../components/blogheader/blogheader";
import BlogList from "./components/bloglist/bloglist";


export default async function Blogs(){
    return(
        <main className="h-screen">
            <BlogHeader />
            <Suspense fallback={<div className="text-[20px] text-white font-kamerik flex justify-center items-center">Fetching blogs</div>}>
                <BlogList />    
            </Suspense>
            
        </main>
    )
}