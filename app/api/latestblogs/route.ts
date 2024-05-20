// import { prisma } from "@/app/lib/prisma";
// import { NextResponse } from "next/server";

// async function getBlogLatestPosts(){
//     return await prisma.blogPost.findMany({
//         orderBy:{
//             id:"desc"
//         },
//         take:3
//     });
// }
// export async function GET(){
//     const latestblogs = await getBlogLatestPosts();
//     return NextResponse.json(latestblogs);
// }