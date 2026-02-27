
import useScrollAnimation from "@/app/hooks/use-scroll-animation";
import { Article } from "@/app/types/types";
import { format } from "date-fns";
import Link from "next/link";


interface ArticleCardProps {
  article: Article;
  variant?: "hero" | "secondary";
  imageImport?: string;
  delay?: number;
}

const ArticleCard = ({ article, variant = "secondary", imageImport, delay = 0 }: ArticleCardProps) => {
  const date = format(new Date(article.publishedAt), "MMM d, yyyy");
  const imgSrc = imageImport || article.images[0].imageUrl;
  const { ref, isVisible } = useScrollAnimation(0.1);

  const slug = `/article/${article.id}`;

  if (variant === "hero") {
    return (
      <div
        ref={ref}
        className={isVisible ? "animate-fade-in-slow" : "opacity-0"}
        style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
      >
        <Link href={slug} className="group block">
          <article className="relative overflow-hidden rounded-lg cursor-pointer aspect-[16/9] md:aspect-[2/1]">
            <img
              src={imgSrc}
              alt={article.images[0].altText || "Article image"}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-accent-foreground/80">
                <span className="rounded-full bg-accent px-3 py-1 text-accent-foreground text-[11px] font-semibold">
                  {article.category.name}
                </span>
                <span className="text-white/70">{article.estimatedReadingTime} min read</span>
              </div>
              <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight text-white md:text-4xl lg:text-[2.75rem] lg:leading-[1.12] max-w-3xl transition-opacity duration-300">
                {article.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base line-clamp-2">
                {article.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-white/60">
                <span className="font-medium text-white/90">{article.writer.lastName}</span>
                <span>·</span>
                <time dateTime={article.publishedAt}>{date}</time>
              </div>
            </div>
          </article>
        </Link>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <Link href={slug} className="group block">
        <article className="relative overflow-hidden rounded-lg cursor-pointer aspect-[16/10] sm:aspect-[16/9]">
          <img
            src={imgSrc}
            alt={article.images[0].altText || "Article image"}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-4">
            <div className="flex items-center gap-3 text-xs justify-between font-medium  tracking-widest">
              <span className="rounded-full uppercase bg-accent px-2 py-1 text-accent-foreground text-[10px] font-semibold">
                {article.category.name}
              </span>
              <span className="text-white/70 text-sm">{article.estimatedReadingTime} min read</span>
            </div>
            <div>
                <h3 className="mt-2 font-heading text-lg font-semibold leading-snug text-white md:text-xl  line-clamp-2">
                    {article.title}
                </h3>
                <div className="mt-3 flex items-center gap-2 text-xs text-white/50">
                    <span className="font-medium text-white/80">{article.writer.lastName}</span>
                    <span>·</span>
                    <time dateTime={article.publishedAt}>{date}</time>
                </div>
          </div>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default ArticleCard;
