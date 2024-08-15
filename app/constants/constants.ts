
export interface IEventDetails {
    Id:string,
    Organizationname?:string,
    Email?:string,
    Phonenumber?:string,
    EventId?:string,
    Venue:string,
    EventDate:string,
    EventName:string,
    EventTime:string,
    SocialLinks:string,
    TicketLinks:string,
    Description:string,
    FlyerImagePath:string,
    InquiryNumber:string,
    IsEventWeekly:boolean,
    DayofWeek:string,
    approved:boolean
    paid:boolean
}

export const BASE_URI = "www.blacvolta.com";