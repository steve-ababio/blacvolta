import { IEventDetails } from "@/app/constants/constants";
import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

async function fetchDayRecurringEvents(dayOfWeek:string){
    let promise = await prisma.event.findMany({
        where:{
            IsEventWeekly:true,
            approved:true,
            paid:true,
            hidden:false,
            // DayOfWeek:dayOfWeek
        }
    });
    return promise;
}
async function fetchAllEventsThatMatchDateProvided(date:string){
    let promise = await prisma.event.findMany({
        where:{
            EventDate:date,
            approved:true,
            paid:true,
            hidden:false
        }
    });
    return promise;
}
type TEventDetails= Omit<IEventDetails,"Email"|"Organizationname"|"Phonenumber"|"EventId"> & {Email:string|null,Organizationname:string|null,Phonenumber:string|null,EventId:string|null};
export async function GET(req:NextRequest){
    const { searchParams } = new URL(req.url);
    const dateParam = searchParams.get("date");
    if (!dateParam) {
        return NextResponse.json({ error: "Missing date parameter" }, { status: 400 });
    }
    const parsedDate = new Date(dateParam);
    if (Number.isNaN(parsedDate.getTime())) {
        return NextResponse.json({ error: "Invalid date parameter" }, { status: 400 });
    }
    const dayOfWeek = String(parsedDate.getDay());
    try {
        const [dayRecurringEvents, allEventsMatchingDate] = await Promise.all([
            fetchDayRecurringEvents(dayOfWeek),
            fetchAllEventsThatMatchDateProvided(dateParam)
        ]);
        const recurringEvents: TEventDetails[] = dayRecurringEvents.map(event=>({...event, EventDate:dateParam}));
        const selectedEvents = [...(allEventsMatchingDate || []), ...recurringEvents];
        return NextResponse.json(selectedEvents, { status: 200 });
    } catch (error) {
        console.error("GET /api/events error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}