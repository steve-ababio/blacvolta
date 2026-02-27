import { Suspense } from "react";
import Hero from "@/app/components/hero/hero";
import EditorialLoader from "@/app/components/article-card-loader/article-card-loader";
import DettyDecemberGuides from "./components/dettydecemberguide";

export default async function DettyDecemberGuide(){
    return(
        <main className="h-screen">
            <Hero headertext="Detty December Guide"/>
            <Suspense fallback={<EditorialLoader size={9} />}>
                <DettyDecemberGuides />    
            </Suspense>
        </main>
    )
}