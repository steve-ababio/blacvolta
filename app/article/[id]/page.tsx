import { Metadata } from "next";
import axios from "@/app/lib/axios";
import { ArticleContent } from "./components/content/content";


export async function generateMetadata({params}:{params:{id:number}}):Promise<Metadata>{
  try{
      const response = await axios.get(`https://api.blacvolta.com/api/news?id=${params.id}`);
      const metadata = response.data.data;
      return{
          title:metadata?.title,
          description:metadata?.description,
          alternates:{
              canonical:`https://api.blacvolta.com/api/news/${params.id}`
          },
          openGraph:{
              title:metadata?.title,
              description:metadata?.description,
              images:[metadata!.images[0].imageUrl],
              url: `https://api.blacvolta.com/api/news/${params.id}`
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
