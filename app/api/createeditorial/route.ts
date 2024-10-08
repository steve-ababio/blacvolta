import { prisma } from "@/app/lib/prisma";
import { uploadImage } from "@/app/utils/utils";
import { NextRequest, NextResponse } from "next/server";

type ParagraphType = {
    blogID:number,
    body:string,
    position:number,
    imagepath:string,
    instagrampostlink:string,
}
async function createParagraphs(paragraphs:ParagraphType[]){
    return await prisma.paragraph.createMany({
        data:paragraphs
    });
}
async function createEditorial(author:string,date:string,title:string,imagepath:string,approved:boolean){
    return await prisma.blogPost.create({
        data:{
            author,
            date,
            title,
            imagepath,
            approved,
            dettydecember:false

        },
        select:{
            id:true
        }
    });
}
export async function POST(req:NextRequest){
    const data = await req.formData();
    const paragraphs:ParagraphType[] = [];
    
    // Retrieve form data
    const blogtitle = data.get("blogtitle") as string;
    const author = data.get("authorname") as string;
    const date = data.get("datewritten") as string;
    const blogimage = data.get("blogimage") as File;

    // upload editorial image
    let blogimagepath = await uploadImage(blogimage);
    //Store editorial into database
    const approved = false;
    let {id} = await createEditorial(author,date,blogtitle,blogimagepath,approved);

    // retreive paragraphs and store in memory
    let paragraphstring = data.getAll("paragraph");
    for(let i = 0;i < paragraphstring.length;i++) {
        const paragraphimage = data.get(`paragraphs[${i}]-image`) as File|null;
        const paragraph = JSON.parse(paragraphstring[i] as string);
        const instagrampostlink = paragraph.instagrampostlink;
        if(instagrampostlink.includes("/?utm_source=ig_web_copy_link")){
            let startindex = instagrampostlink.indexOf("/?utm_source=ig_web_copy_link");
            paragraph.instagrampostlink = `${instagrampostlink.substring(0,startindex)}/embed/`;
        }else if(instagrampostlink.includes("/?igsh=")){
            let startindex = instagrampostlink.indexOf("/?igsh=");
            paragraph.instagrampostlink = `${instagrampostlink.substring(0,startindex)}/embed/`;
        }
        //upload paragraph image 
        let paragraphimagepath = "";
        if(paragraphimage instanceof File) {
            paragraphimagepath = await uploadImage(paragraphimage);
        }
        // associate paragraphs with the editorial created
        paragraphs.push({
            blogID:id,
            body:paragraph.body,
            position:parseInt(paragraph.position,10),
            imagepath:paragraphimagepath,
            instagrampostlink:paragraph.instagrampostlink,
        });
    }
    try{
        // store paragraphs in the database
        await createParagraphs(paragraphs);
    }catch(error){
        console.log(error)
        return NextResponse.json({message:"Error creating blog post: "+error});
    }
    return NextResponse.json({message:"Blog post created successfully"});
}