import { IEventDetails } from "@/app/constants/constants";
import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

function fetchAllIsWeeklyEvents(){
    let promise = prisma.event.findMany({
        where:{
            IsEventWeekly:true,
            approved:true,
            paid:true,
        }
    });
    return promise;
}
function fetchAllEventsThatMatchDateProvided(date:string){
    let promise =  prisma.event.findMany({
        where:{
            EventDate:date,
            approved:true,
            paid:true
        }
    });
    return promise;
}
type TEventDetails= Omit<IEventDetails,"Email"|"Organizationname"|"Phonenumber"|"EventId"> & {Email:string|null,Organizationname:string|null,Phonenumber:string|null,EventId:string|null};
export async function GET(req:NextRequest){
    const {searchParams} = new URL(req.url);
    const date = searchParams.get("date") as string;
    const dayofweekofselecteddate = new Date(date).getDay().toString();
    const allweeklyeventspromise = fetchAllIsWeeklyEvents();
    const alleventsthatmatchprovideddatepromise = fetchAllEventsThatMatchDateProvided(date);
    try{
        const [allweeklyevents,alleventsthatmatchprovideddate] = await Promise.all([allweeklyeventspromise, alleventsthatmatchprovideddatepromise]);

        const weeklyeventsofselecteddate:TEventDetails[] = [];
        for(let event of allweeklyevents){
            if(Object.is(event.DayofWeek,dayofweekofselecteddate)){
                event.EventDate = date;
                weeklyeventsofselecteddate.push(event);
            }
        }
        const selectedevents = alleventsthatmatchprovideddate.concat(weeklyeventsofselecteddate);
        return new NextResponse(JSON.stringify(selectedevents),{
            status:200,
            headers:{"Content-Type": "application/json"},
        })
    }catch(error){
        console.log(error);
        return new NextResponse("Internal server error",{
            status:500
        })
    }
}
