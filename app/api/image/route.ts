import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,res:NextResponse){
    const {searchParams} = new URL(req.url);
    const imagepath = searchParams.get("imagepath")!;
    const response = await fetch(imagepath);
    const data = await response.blob();
    return new Response(data);
}