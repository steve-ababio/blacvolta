import { prisma } from "@/app/lib/prisma";
import Paragraphs from "./components/paragraphs/paragraphs";
import BlogDetails from "./components/blogdetails/blogdetails";
import BlogHeader from "@/app/components/blogheader/blogheader";

async function getBlogPost(id:number){
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
export default async function Blog({params}:{params:{id:number}}){
    const blog = await getBlogPost(parseInt(params.id.toString(),10));
    const blogdate = new Date(blog!.date).toLocaleDateString("en-us",{
        year:'numeric',
        month:"short",
        day:"numeric"
    });
    return(
        <div className="h-screen w-full overflow-x-hidden">
            <div>
                <BlogHeader />
                <main className="md:px-[20%] px-8">
                    <BlogDetails blogdate={blogdate} author={blog!.author} title={blog!.title}/>
                    <Paragraphs paragraphs={blog!.paragraph} />
                </main>
            </div>
        </div>
    )
}