'use client';

import { Article } from "@/app/types/types";
import { FcKindle } from "react-icons/fc";
import ArticleCard from "../article-card/article-card";
import { useEffect, useRef } from "react";
import useSWRInfinite from "swr/infinite";
import ArticleCardLoader from "@/app/components/article-card-loader/article-card-loader";

const PAGE_SIZE = 10;

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function EditorialList() {
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const getKey = (pageIndex: number, previousPageData: any) => {
    if (
      previousPageData &&
      previousPageData.data.articles.length === 0
    ) {
      return null;
    }

    return `https://api.blacvolta.com/api/news?status=published&limit=${PAGE_SIZE}&page=${pageIndex + 1}`;
  };

  const {
    data,
    size,
    setSize,
    isLoading,
    isValidating,
  } = useSWRInfinite(getKey, fetcher);

  const articles: Article[] =
    data?.flatMap(page => page.data.articles) ?? [];

  // Intersection Observer
  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !isValidating) {
          setSize(size + 1);
        }
      },
      { rootMargin: "200px" } // prefetch earlier
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [setSize, size, isValidating]);

  if (isLoading) return <ArticleCardLoader size={3} />;

  return (
    <div className="px-[5%]">
      {/* <CtaButton
        href="uploadeditorial"
        className="mt-12 mx-auto"
        label="CLICK HERE TO PUBLISH AN EDITORIAL"
      /> */}

      <div className="justify-center md:items-start items-center grid grid-cols-1 max-w-full md:grid md:grid-cols-[repeat(auto-fit,350px)] py-12 gap-14">
        {articles.length === 0 ? (
          <div className="text-white text-[18px] font-kamerik flex justify-center items-center gap-x-4">
            There are no editorials <FcKindle size={40} />
          </div>
        ) : (
          articles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))
        )}
      </div>
      {/* Infinite scroll trigger */}
      <div ref={loadMoreRef} className="h-12 flex justify-center">
        {isValidating && <ArticleCardLoader size={6} />}
      </div>
    </div>
  );
}
