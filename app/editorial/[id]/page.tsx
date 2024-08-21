import { prisma } from "@/app/lib/prisma";
import Paragraphs from "@/app/editorial/[id]/components/paragraphs/paragraphs";
import EditorialDetails from "@/app/editorial/[id]/components/editorialdetails/editorialdetails";
import Hero from "@/app/components/hero/hero";
import { Metadata } from "next";

async function getEditorial(id:number){
    return await prisma.blogPost.findUnique({
        where:{
            id
        },
        relationLoadStrategy:"join",
        include:{
            paragraph:true
        },
    });
}

export async function generateMetadata({params}:{params:{id:number}}):Promise<Metadata>{
    try{
        const response = await fetch(`https://www.blacvolta.com/api/editorial?id=${params.id}`,{cache:'no-store'});
        const metadata = await response.json();
        return{
            title:metadata?.title,
            description:metadata?.description,
            alternates:{
                canonical:`https://www.blacvolta.com/editorial/${params.id}`
            },
            openGraph:{
                title:metadata?.title,
                description:metadata?.description,
                images:[metadata!.imagepath],
                url:`https://www.blacvolta.com/editorial/${params.id}`
            }
        }
    }catch(error){
        console.log(error)
        return{
            title:"Not found",
            description:"The page you are looking for does not exist"
        }
    }
}

export default async function Editorial({params}:{params:{id:number}}){
    const editorial = await getEditorial(parseInt(params.id.toString(),10));
    const editorialdate = new Date(editorial!.date).toLocaleDateString("en-us",{
        year:'numeric',
        month:"short",
        day:"numeric"
    });
    return(
            <div className="h-screen w-full overflow-x-hidden">
                <div>
                    <Hero headertext="EDITORIALS" />
                    <main className="md:px-[20%] px-8">
                        <EditorialDetails 
                            blogimagepath={editorial!.imagepath}
                            blogdate={editorialdate} 
                            author={editorial!.author}
                            title={editorial!.title}
                        />
                        <Paragraphs isdettydecember={editorial!.dettydecember} paragraphs={editorial!.paragraph} />
                    </main>
                </div>
            </div>
    )
}