import { any, object, string } from "zod";

export const EventSchema = object({
    organizationname: string({message:"Organization name is required"}).min(1),
    phonenumber:string({message:"Phone number is required"}).min(1),
    email:string().email("Email is required").min(1),
    eventname:string({message:"Event name is required"}).min(1),
    eventdate:string({message:"Event date is required"}).min(1),
    eventtime:string({message:"Event time is required"}).min(1),
    ticketlinks:string(),
    eventdescription:string(),
    sociallinks:string(),
    inquirynumber:string(),
    eventflyer:any()
})