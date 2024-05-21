
import { Suspense } from "react";
import BlogHeader from "../components/blogheader/blogheader";
import BlogList from "./components/bloglist/bloglist";
import BlogLoader from "../components/blogloader/blogloader";


export default async function Blogs(){
    return(
        <main className="h-screen">
            <BlogHeader />
            <Suspense fallback={<BlogLoader size={9} />}>
                <BlogList />    
            </Suspense>
        </main>
    )
}