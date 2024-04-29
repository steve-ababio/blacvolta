export const BASE_URL = "/api/events";

export interface IEventDetails {
    Description:string,
    EventDate:string,
    EventName:string,
    EventTime:string,
    FlyerImagePath:string,
    Id:string,
    InquiryNumber:string,
    SocialLinks:string,
    TicketLinks:string,
    Venue:string,
    IsEventWeekly:boolean,
    DayofWeek:string
    paid:boolean,
    approved:boolean
}