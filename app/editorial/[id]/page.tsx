import { prisma } from "@/app/lib/prisma";
import Paragraphs from "@/app/editorial/[id]/components/paragraphs/paragraphs";
import EditorialDetails from "@/app/editorial/[id]/components/editorialdetails/editorialdetails";
import Hero from "@/app/components/hero/hero";

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
export default async function Editorial({params}:{params:{id:number}}){
    const blog = await getEditorial(parseInt(params.id.toString(),10));
    const blogdate = new Date(blog!.date).toLocaleDateString("en-us",{
        year:'numeric',
        month:"short",
        day:"numeric"
    });
    return(
        <div className="h-screen w-full overflow-x-hidden">
            <div>
                <Hero headertext="EDITORIALS" />
                <main className="md:px-[20%] px-8">
                    <EditorialDetails blogimagepath={blog!.imagepath} blogdate={blogdate} author={blog!.author} title={blog!.title}/>
                    <Paragraphs paragraphs={blog!.paragraph} />
                </main>
            </div>
        </div>
    )
}