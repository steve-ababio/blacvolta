
import { Suspense } from "react";
import BlogList from "./components/bloglist/editoriallist";
import EditorialHeader from "../components/editorialheader/editorialheader";
import EditorialLoader from "../components/editorialloader/editorialloader";
import EditorialList from "./components/bloglist/editoriallist";

export default async function Editorials(){
    return(
        <main className="h-screen">
            <EditorialHeader />
            <Suspense fallback={<EditorialLoader size={9} />}>
                <EditorialList />    
            </Suspense>
        </main>
    )
}