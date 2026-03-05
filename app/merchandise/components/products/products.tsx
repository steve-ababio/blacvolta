"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SegmentedTabs from "../tabs/tabs";
import { Product } from "@/app/data/product";
import ProductCard from "../product-card/product-card";
import ProductDetail from "../product-detail/product-detail";
import useSWR from "swr";
import ProductSkeletonLoader from "@/app/components/product-skeleton-loader/product-skeleton-loader";
import { GroupedProduct } from "@/app/types/types";
import { groupProducts } from "@/app/utils/utils";
import { RiWhatsappFill } from "react-icons/ri";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProductGrid() {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { data: products = [], error, isLoading } = useSWR<Product[]>(
    `/api/products?category=${activeCategory === "All" ? "" : activeCategory.toUpperCase()}`, 
    fetcher
  );
  const groupedProducts = groupProducts(products);
  const visibleProducts = showAll ? products : products.slice(0, 6);

  if (error)
    return <p className="text-white text-center mt-10">Failed to load products.</p>;

  return (
    <section className="bg-black font-kamerik pt-12 md:pt-24 lg:pt-32 pb-12 px-1 flex flex-col items-center mx-auto w-full max-w-6xl">
      <h2 className="text-2xl text-white font-medium mb-6">New Arrivals</h2>
      <SegmentedTabs
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
        {isLoading ? (
            <ProductSkeletonLoader />
        ) : (
            <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7 px-4 sm:px-0 w-full">
                    <AnimatePresence mode="popLayout">
                        {groupedProducts.map((product:GroupedProduct) => (
                            <ProductCard
                                key={product.type}
                                product={product}
                                onClick={() => setSelectedProduct(product.variants[0])}
                            />
                        ))}

                    </AnimatePresence>
                </div> 
                {
                    visibleProducts.length === 0 && (
                        <div className="flex w-full flex-col justify-center items-center text-center">
                            <img
                                src="/assets/images/empty-products-1.png"
                                alt="Empty shopping bag"
                                className="mb-10 w-40 opacity-80"
                            />
                            <h1 className="mb-3 text-2xl font-semibold tracking-tight text-[#d2d2d2]">
                                No products yet
                            </h1>
                            <p className="text-sm md:text-base leading-relaxed text-[#767676]">
                                There is nothing here at the moment. Check back soon — new items are on the way.
                            </p>
                        </div>
                    )
                }
                {/* {products.length > 10 && (
                    <button
                    className="mt-8 self-center md:self-end text-base text-muted-foreground font-light hover:text-foreground transition-colors"
                    onClick={() => setShowAll((s) => !s)}
                    >
                    {showAll ? "Show Less ‹" : "Show More ›"}
                    </button>
                )} */}
                 <button
                  onClick={() => {
                  window.open("https://wa.me/233540973552", "_blank");
                  }}
                  className="bg-transparent block text-background border-4 border-white rounded-full h-[68px] w-[68px] fixed bottom-10 right-8 shadow-xl flex items-center justify-center"
                  >
                  {/* <IoLogoWhatsapp size={30} color="#25D366"/> */}
                  
                  <RiWhatsappFill size={85} color="#25D366" />
            </button>
            </>
        )}

      <AnimatePresence>
        {selectedProduct && (
          <ProductDetail
            products={products}
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
