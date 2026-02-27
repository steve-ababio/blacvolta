import ProductCardSkeleton from "../product-card-skeleton/product-card-skeleton";

export default function ProductSkeletonLoader() {
  return (
    <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-4 gap-4">
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </div>
        <div className="hidden grid-cols-1 mt-8 md:grid md:grid-cols-2 lg:grid-cols-3 w-full px-4 gap-4">
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </div>
  </div>
  );
}
