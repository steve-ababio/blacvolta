export default function ProductCardSkeleton() {
    return (
      <div
        className="relative w-full rounded-3xl p-4 overflow-hidden bg-zinc-900 shadow-xl shadow-black/40 animate-float"
      >
        {/* Shimmer overlay */}
        <div className="absolute inset-0 shimmer-dark pointer-events-none" />
  
        {/* Image container */}
        <div
          className="
            relative h-[180px] rounded-2xl overflow-hidden
            bg-zinc-800
            flex items-center justify-center
          "
        >
          {/* Badge */}
          <div className="absolute top-3 left-3 h-7 w-24 rounded-full bg-zinc-700" />
  
          {/* Heart */}
          <div className="absolute top-3 right-3 h-9 w-9 rounded-full bg-zinc-700 animate-pulse-fast" />
  
          {/* Shoe placeholder */}
          <div className="h-20 w-44 rounded-xl bg-zinc-700" />
  
          {/* Carousel dots */}
          <div className="absolute bottom-3 flex gap-2">
            <span className="dot dark-dot" />
            <span className="dot dark-dot delay-1" />
            <span className="dot dark-dot delay-2" />
          </div>
        </div>
  
        {/* Text */}
        <div className="mt-4 space-y-3">
          <div className="h-4 w-16 rounded bg-zinc-700" />
  
          <div className="h-5 w-full rounded bg-zinc-700" />
          <div className="h-5 w-3/4 rounded bg-zinc-700" />
  
          <div className="h-6 w-24 rounded bg-zinc-700" />
  
          {/* Button */}
          <div className="mt-4 h-12 w-full rounded-full bg-zinc-600 animate-pulse" />
        </div>
      </div>
    );
  }
  