import { htmlToText } from "@/app/utils/paystack/utils";
import { Metadata } from "next";
import EventContent from "./components/content/content";
import { isNumber } from "@/app/utils/utils";


export async function generateMetadata({params}:{params:{id:string}}):Promise<Metadata>{
  try{
    const { id } = params;
    const endpoint = isNumber(id)
      ? `https://api.blacvolta.com/api/events/${id}`
      : `https://api.blacvolta.com/api/events/ref/${id}`;
      const response = await fetch(endpoint,{
        next: { revalidate: 300 }, // cache for 5 mins
      })
     
    if (!response.ok) throw new Error("Failed");
      const json = await response.json();
      const metadata = json.data;
      return{
          title:metadata?.title,
          description:htmlToText(metadata?.description).slice(0,30),
          alternates:{
              canonical:endpoint
          },
          openGraph:{
              title:metadata?.title,
              description:htmlToText(metadata?.description).slice(0,30),
              images:[metadata.featured_image_url],
              url: endpoint
          }
      }
  }catch(error){
      console.log(error)
      return{
          title:"Not found",
          description:"The page you are looking for does not exist"
      }
  }
}
export default function EventDetail({ params }: { params: { id: string } }) {
    return (
      <EventContent id={params.id} />
    )
}
