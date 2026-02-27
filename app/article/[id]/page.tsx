'use client'
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { format } from "date-fns";
import useSWR from "swr";
import { Article } from "@/app/types/types";
import Link from "next/link";
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";
import { useRouter } from "next/navigation";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const ArticleDetail = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const router = useRouter()
    const { data,error, isLoading } = useSWR<{success:boolean,data:Article}>(
        `https://api.blacvolta.com/api/news/${id}`, 
        fetcher
    );
    if(isLoading) return (<div>Loading Article</div>)

    const article = data!.data;
    if (!article) {
        return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="text-center space-y-4">
            <h1 className="font-heading text-3xl font-bold text-white">Article not found</h1>
            <Link href="/" className="text-accent hover:underline inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Back to news
            </Link>
            </div>
        </div>
        );
    }

    const imgSrc = article.images[0].imageUrl;
    const date = format(new Date(article.publishedAt), "MMMM d, yyyy");

    return (
    <div className="min-h-screen bg-black">
      {/* Nav */}
     {/* <Navbar /> */}

      {/* Hero image */}
      <div className="animate-fade-in">
      {/* max-h-[480px] */}
        <div className="relative w-full h-[500px] md:h-full md:aspect-[21/9] overflow-hidden">
          <button onClick={()=>{router.push("/editorials")}} className="flex justify-center items-center h-10 w-10 absolute top-4 left-5 z-50 rounded-full bg-white/10 backdrop-blur-sm">
            <ArrowLeft className="text-white h-6 w-6 "/>
          </button>
          <img
            src={imgSrc}
            alt={article.images[0].altText || "Article image"}
            className="w-full h-full object-cover"
          />
         <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
         <div className="animate-fade-in-slow px-6 lg:px-10 absolute bottom-0" style={{ animationDelay: "150ms", animationFillMode: "forwards" }}>
              {/* Category badge */}
              <span className="inline-block rounded-full bg-accent px-3 py-1 text-accent-foreground text-xs font-semibold uppercase tracking-wider">
                {article.category.name}
              </span>

              {/* Title */}
              <h1 className="mt-5 font-heading max-w-5xl text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl lg:leading-[1.1]">
                {article.title}
              </h1>

              {/* Meta */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#b4b4b4] pb-6">
                <span className="font-medium text-white">{article.writer.lastName}</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-white" />
                  {date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-white" />
                  {article.estimatedReadingTime} min read
                </span>
              </div>
              </div>
          </div>
      </div>

      {/* Article content */}
      <main className="mx-auto font-light max-w-3xl px-6 mt-8 mb-10 relative z-10">
        
          {/* Body */}
          {article.content ? (
            <div
              className="prose-article mt-8 text-white/90 leading-[1.8] text-[17px] space-y-5"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          ) : (
            <div className="mt-8 space-y-5 text-foreground/85 leading-[1.8] text-[17px]">
              <p>{article.excerpt}</p>
              <p className="text-muted-foreground italic">Full article coming soon.</p>
            </div>
          )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ArticleDetail;
