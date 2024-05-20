import { Suspense } from "react";
import BlogHeader from "../components/blogheader/blogheader";
import BlogList from "./components/bloglist/bloglist";


export default async function Blogs(){
    return(
        <main className="h-screen">
            <BlogHeader />
            <BlogList />
        </main>
    )
}