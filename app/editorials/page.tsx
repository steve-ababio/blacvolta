import { Suspense } from "react";
import Hero from "@/app/components/hero/hero";
import EditorialLoader from "@/app/components/article-card-loader/article-card-loader";
import EditorialList from "@/app/editorials/components/editoriallist/editoriallist";

export default async function Editorials(){
    return(
        <main className="h-screen">
            <Hero headertext="EDITORIALS"/>
            <Suspense fallback={<EditorialLoader size={9} />}>
                <EditorialList />    
            </Suspense>
        </main>
    )
}