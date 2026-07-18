'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('./leaflet-map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-zinc-900/50 rounded-2xl flex items-center justify-center border border-white/5 min-h-[300px]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-4 border-[#D49A35] border-t-transparent rounded-full animate-spin"></div>
        <span className="text-[#D4CEC4] text-sm font-light">Loading Map...</span>
      </div>
    </div>
  ),
});

export default function InteractiveMap() {
  return <LeafletMap />;
}
