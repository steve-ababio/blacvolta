import { Metadata } from "next";
import { ArticleContent } from "./components/content/content";
import { htmlToText } from "@/app/utils/paystack/utils";


export async function generateMetadata({params}:{params:{id:string}}):Promise<Metadata>{
  try{
      const response = await fetch(`https://api.blacvolta.com/api/news/${params.id}`,{
        next: { revalidate: 300 }, // cache for 5 mins
      }
    );
   
    if (!response.ok) throw new Error("Failed");
      const json = await response.json();
      const metadata = json.data;
      return{
          title:metadata?.title,
          description:htmlToText(metadata?.description).slice(0,30),
          alternates:{
              canonical:`https://blacvolta.com/app/news/${params.id}`
          },
          openGraph:{
              title:metadata?.title,
              description:htmlToText(metadata?.description).slice(0,30),
              images:[metadata!.images[0].imageUrl],
              url: `https://blacvolta.com/app/news/${params.id}`
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
const ArticleDetail = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    return (
      <>
        <ArticleContent id={id} />
      </>
    )
};

export default ArticleDetail;
