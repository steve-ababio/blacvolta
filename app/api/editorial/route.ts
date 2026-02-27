import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

async function getEditorial(id:number){
    return await prisma.blogPost.findUnique({
        where:{
            id
        },
        include:{
            paragraph:true
        },
    });
}
export async function GET(req:NextRequest){
    const {searchParams} = new URL(req.url);
    const id = searchParams.get("id");
    try{
        const editorial = await getEditorial(parseInt(id!.toString(),10));
        const description = editorial?.paragraph[0].body.substring(0,100)
        return NextResponse.json({
            title:editorial?.title,
            description,
            id:editorial?.id,
            imagepath:editorial?.imagepath,
        },{status:200});
    }catch(error){
        return new Response("Internal Server Error",{status:500});
    }
}

export const revalidate = 0;