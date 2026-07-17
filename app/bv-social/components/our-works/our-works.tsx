'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ZoomIn, X, Calendar, User, ArrowUpRight, Film, Image as ImageIcon } from 'lucide-react';

interface WorkItem {
  id: string;
  type: 'video' | 'image';
  videoUrl?: string; // YouTube video ID
  imageUrl?: string;
}

const worksData: WorkItem[] = [
  {
    id: 'work-1',
    type: 'video',
    videoUrl: 's0AL6Evs9lw?M21dy6FTqk7MUXFw', // Placeholder ID - replace with actual YouTube Video ID
  },
  {
    id: 'work-2',
    type: 'video',
    videoUrl: 'TFtYnSd2sVI?si=EQNAGB5Us13j0NPc',
  },
  {
    id: 'work-3',
    type: 'video',
    videoUrl: 'NW0wwX-OZYE?si=wEYZVpaqn4u0PfYp',
  },

    {
    id: 'work-4',
    type: 'video',
    videoUrl: 'akjc00WCIRU?si=6vYtrmkGlLFY3SrR',
  },

    {
    id: 'work-5',
    type: 'video',
    videoUrl: 'hFUGxeBEalE?si=sojPbBH-vH90XW3j',
  },

    {
    id: 'work-6',
    type: 'video',
    videoUrl: 'Gmv4GD3hqJc?si=CcJMIF_03wjdOKQU',
  },

    {
    id: 'work-7',
    type: 'video',
    videoUrl: 'JdsCJJSDfZk?si=kT-7FHU6TlZGrkuJ',
  },

  {
    id: 'work-8',
    type: 'video',
    videoUrl: 'xklr3_-wq5E?si=-vUwD8iv2T55_XBP',
  },

];

const getYoutubeId = (url: string) => {
  if (!url) return '';
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
  if (match) return match[1];
  return url.split('?')[0];
};

const getYoutubeThumbnail = (url: string) => {
  const id = getYoutubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : '';
};

export default function OurWorks() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'video' | 'image'>('all');
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Reset active index when filter changes
  useEffect(() => {
    setActiveIndex(0);
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  }, [activeFilter]);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const children = container.children;
    if (!children.length) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const scrollToItem = (index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const children = container.children;
    if (index >= 0 && index < children.length) {
      const child = children[index] as HTMLElement;
      const targetScroll = child.offsetLeft - (container.clientWidth - child.clientWidth) / 2;
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  // Lock scroll when modal is active
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  // Escape key handler to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredWorks = worksData.filter((work) => {
    if (activeFilter === 'all') return true;
    return work.type === activeFilter;
  });

  return (
    <section className="bg-black py-16 px-4 md:px-8 lg:px-16 font-kamerik text-white border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#a6e804] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase mb-4">
            Our Works
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base font-light font-sans">
            Explore how we translate creativity, cultural insights, and storytelling into impactful digital and experiential campaigns.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center items-center gap-3 mb-12 flex-wrap">
          {(['all', 'video', 'image'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#a6e804] text-black shadow-[0_0_15px_rgba(166,232,4,0.3)]'
                  : 'bg-zinc-900/60 text-zinc-400 border border-zinc-800/80 hover:text-white hover:border-[#a6e804]/50'
              }`}
            >
              {filter === 'all' && 'All Projects'}
              {filter === 'video' && 'Videos & Reels'}
              {filter === 'image' && 'Campaigns & Photos'}
            </button>
          ))}
        </div>

        {/* CSS for hiding scrollbars */}
        <style dangerouslySetInnerHTML={{ __html: `
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        ` }} />

        {/* Works Desktop Grid View */}
        <motion.div 
          layout
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={work.id}
                onClick={() => setSelectedItem(work)}
                className="group relative bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 md:rounded-lg overflow-hidden cursor-pointer hover:border-[#a6e804]/40 hover:shadow-[0_0_30px_rgba(166,232,4,0.05)] transition-all duration-500 flex flex-col h-full"
              >
                {/* Media Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                  {
                    work.type === "image" &&
                    <img
                      src={work.imageUrl}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt=""
                    />
                  }
                  {
                  work.type === "video" &&
                   <div className="relative aspect-video w-full bg-black">
                      <iframe
                        src={`https://www.youtube.com/embed/${getYoutubeId(work.videoUrl || '')}?autoplay=1&rel=0`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full border-0"
                      />
                    </div>
                  }
                  <div className="absolute bottom-3 right-3">
                    <span className="p-1.5 rounded-full bg-black/80 backdrop-blur-md border border-zinc-800 text-zinc-300 flex items-center justify-center">
                      {work.type === 'video' ? <Film className="w-3.5 h-3.5" /> : <ImageIcon className="w-3.5 h-3.5" />}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Works Mobile Carousel View */}
        <div className="block md:hidden relative w-full">
          <div 
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar scroll-smooth px-4 -mx-4"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {filteredWorks.map((work) => (
              <div
                key={work.id}
                onClick={() => setSelectedItem(work)}
                className="snap-center shrink-0 w-[85vw] sm:w-[75vw] aspect-video bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-xl overflow-hidden cursor-pointer relative"
              >
                {/* Media Container */}
                <div className="relative w-full h-full overflow-hidden bg-zinc-950">
                  {work.type === 'image' ? (
                    <img
                      src={work.imageUrl}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  ) : (
                    <div className="relative w-full h-full bg-black flex items-center justify-center group">
                      <img
                        src={getYoutubeThumbnail(work.videoUrl || '')}
                        className="w-full h-full object-cover opacity-80"
                        alt=""
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors duration-300">
                        <span className="p-3.5 rounded-full bg-[#a6e804] text-black shadow-[0_0_15px_rgba(166,232,4,0.4)] transform group-hover:scale-105 transition-transform duration-300">
                          <Play className="w-5 h-5 fill-current translate-x-[1px]" />
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3">
                    <span className="p-1.5 rounded-full bg-black/80 backdrop-blur-md border border-zinc-800 text-zinc-300 flex items-center justify-center">
                      {work.type === 'video' ? <Film className="w-3.5 h-3.5" /> : <ImageIcon className="w-3.5 h-3.5" />}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          {filteredWorks.length > 1 && (
            <div className="flex justify-center items-center gap-2 mt-4 flex-wrap">
              {filteredWorks.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToItem(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'w-5 bg-[#a6e804]' : 'w-1.5 bg-zinc-700 hover:bg-zinc-500'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Lightbox / Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 bg-black/95 backdrop-blur-md"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className={`relative w-full max-w-5xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl ${
                  selectedItem.type === 'video' ? 'max-w-4xl' : 'max-w-5xl'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 hover:bg-black/90 border border-zinc-800/80 hover:border-[#a6e804] text-zinc-400 hover:text-white transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
                <div>
                  {selectedItem.type === 'video' ? (
                    <div className="relative aspect-video w-full bg-black">
                      <iframe
                        src={`https://www.youtube.com/embed/${getYoutubeId(selectedItem.videoUrl || '')}?autoplay=1&rel=0`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full border-0"
                      />
                    </div>
                  ) : (
                    <div className="relative bg-zinc-900 flex items-center justify-center min-h-[300px] md:min-h-[500px]">
                      <img
                        src={selectedItem.imageUrl}
                        className="w-full h-full object-cover max-h-[70vh]"
                        alt=""
                      />
                    </div>
                  )}
                </div>
              
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}






