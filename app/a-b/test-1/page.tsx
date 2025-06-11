'use client';

import { MEDIA, POSTERS } from '@/utils/constants';

export default function ABTest1() {
  return (
    <main className="h-screen w-screen bg-black p-8">
      <h1 className="fixed start-1 top-1 text-white">Load From CDN</h1>
      <video src={MEDIA.siteBanner} poster={POSTERS.blackDot} controls autoPlay muted></video>
    </main>
  );
}
