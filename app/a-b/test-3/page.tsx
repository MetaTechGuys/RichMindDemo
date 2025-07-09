'use client';

import { POSTERS } from '@/utils/constants';
import Script from 'next/script';

export default function ABTest1() {
  return (
    <main className="h-screen w-screen bg-black p-8">
      <h1 className="fixed start-1 top-1 text-white">Load From PDR</h1>
      <Script
        type="module"
        src="https://cdn.jsdelivr.net/npm/dash-video-element@0/+esm"
        defer
      ></Script>
      {/* @ts-expect-error: web-component */}
      <dash-video
        src="/video/baner-site-2-manifest.mpd"
        poster={POSTERS.blackDot}
        controls
        autoPlay
        muted
      />
    </main>
  );
}
