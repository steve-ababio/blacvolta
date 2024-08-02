export interface IEventForm{
    organizationname:string,
    phonenumber:string,
    email:string,
    eventname:string,
    eventdate:string,
    eventtime:string,
    ticketlinks:string
    inquirynumber:string,
    eventdescription:string,
    sociallinks:string,
    eventflyer?:FileList,
    eventvenue:string
}

export const FILE_UPLOAD_URL = "https://files.blacvolta.com/upload.php";