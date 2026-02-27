'use client'
import ArticleCard from "@/app/editorials/components/article-card/article-card";
import { Article } from "@/app/types/types";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FcKindle } from "react-icons/fc";
import useSWR from "swr";
import ArticleCardLoader from "@/app/components/article-card-loader/article-card-loader";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function Editorials(){
    const { data,error, isLoading } = useSWR<{success:boolean,data:{articles:Article[]}}>(
        `https://api.blacvolta.com/api/news?limit=3&status=published`, 
        fetcher
    );
     if(isLoading) return <ArticleCardLoader size={3}/>;
    const news = data!.data.articles;
    return(
        <section className="flex flex-col pt-[3rem]">
            <div className="px-[5%] ">
                <h2 className="text-[25px] pb-8 font-kamerik font-bold md:text-[30px] text-center text-bvlight">EDITORIALS</h2>
                <div className="justify-between items-center md:items-start w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fit,460px)] gap-10 lg:gap-6">
                    {
                        news.length === 0 ? 
                        <div className="text-bvlight text-[18px] font-kamerik flex justify-center items-center gap-x-4">There are no editorials <FcKindle size={40} /></div>
                        :news.map((article:Article)=>(
                            <ArticleCard key={article.id} article={article}/>
                        ))
                    }
                </div>
                {
                    news.length > 0 &&
                    <Link className="flex py-8 hover:underline gap-x-1 items-center" href="/editorials">
                        <span className="text-white text-[1rem] font-kamerik font-bold">View more editorials</span>
                        <BsArrowRight color="white" size={20} />
                    </Link>
                }
            </div>
        </section>
    )
}