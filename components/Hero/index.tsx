'use client';

import { useRef } from 'react';

export default function HeroSection() {
  const audioRef = useRef<HTMLAudioElement>(null);
  return (
    <div className="relative size-full">
      <video
        id="hero-video"
        autoPlay
        loop
        className="size-full object-cover"
        onPlay={() => audioRef.current?.play()}
        onPause={() => audioRef.current?.pause()}
      >
        <source src="/video/site-banner.webm" type="video/mp4" />
        <audio loop id="hero-audio" ref={audioRef}>
          <source src="/audio/richmind-corporate-video-3-lq.mp3" type="audio/mpeg" />
        </audio>
      </video>
      <button className="absolute top-0 z-10 bg-linear-(--golded-gradient) p-4">main</button>
    </div>
  );
}
