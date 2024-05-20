import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

async function getAllBlogPosts(){
    return await prisma.blogPost.findMany({
        relationLoadStrategy:"join",
        include:{
            paragraph:true
        },
        orderBy:{
            id:"desc"
        },
    });
}
export async function GET(){
    const blogs = await getAllBlogPosts();
    return NextResponse.json(blogs);
}