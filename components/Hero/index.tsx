'use client';

import { Button, Icon } from '@/atoms';
import { NoticeSection } from '@/atoms/NoticeSection';
import { useCallback, useRef, useState } from 'react';
import logo from '@/assets/img/RichMindlogo-white.png';
import Image from 'next/image';
import { AnimatePresence, cubicBezier, easeIn, motion } from 'motion/react';

export default function HeroSection() {
  const [hasConset, setConset] = useState(false);

  const coverVidRef = useRef<HTMLVideoElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = useCallback(() => {
    coverVidRef.current?.play();
    audioRef.current?.play();
  }, []);

  const handlePause = useCallback(() => {
    coverVidRef.current?.pause();
    audioRef.current?.pause();
  }, []);

  const getConset = useCallback(() => {
    setConset(true);
    videoRef.current?.play();
  }, []);
  return (
    <>
      <AnimatePresence>
        {!hasConset ? (
          <motion.div
            className="fixed z-50 h-screen w-screen"
            id="play-video-consent"
            initial={{ scale: 1, opacity: 1 }}
            exit={{ scale: 10, opacity: 0 }}
            transition={{ ease: cubicBezier(1, 0, 1, 1) }}
          >
            <div className="bg-opacity-10 absolute size-full bg-black/30 bg-clip-padding backdrop-blur-sm backdrop-filter" />
            <motion.div
              className="size-full"
              initial={{ y: 500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <NoticeSection className="flex-center" neon>
                <div className="font-display flex flex-col items-center gap-4 px-10 py-20 text-center text-xl text-white">
                  <Image src={logo} alt="" className="w-1/2" />
                  <h4 className="text-4xl">Welcome to Richmind</h4>
                  <p>Our mission is to use operational expertise and strategic investments</p>
                  <Button variant="primary" className="text-sm" onClick={getConset}>
                    Continue
                    <Icon name="play" className="size-4" />
                  </Button>
                  <small>Wear headphons for better experience</small>
                </div>
              </NoticeSection>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="relative size-full overflow-hidden">
        <video
          loop
          ref={videoRef}
          className="absolute inset-0 z-[1] m-auto h-full object-none sm:object-cover xl:w-full"
          onPlay={handlePlay}
          onPause={handlePause}
        >
          <source src="/video/site-banner.webm" type="video/mp4" />
          <audio loop id="hero-audio" ref={audioRef}>
            <source src="/audio/richmind-corporate-video-3-lq.mp3" type="audio/mpeg" />
          </audio>
        </video>
        <video
          ref={coverVidRef}
          muted
          loop
          className="inset-0 z-0 size-full scale-110 object-cover blur-sm sm:hidden"
        >
          <source src="/video/site-banner.webm" type="video/mp4" />
        </video>
        {hasConset ? (
          <div className="absolute inset-0 z-[2] flex size-full flex-col justify-center gap-4 bg-black/40 px-8 sm:gap-6 md:gap-12 lg:gap-16">
            <motion.h1
              transition={{ delay: 0.5, ease: easeIn }}
              initial={{ scale: 10, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="font-body! truncate text-5xl leading-14 md:text-6xl md:leading-18 lg:text-7xl lg:leading-21 xl:text-8xl xl:leading-24"
            >
              Inspire People <br />
              Design the Future
            </motion.h1>
            <motion.h4
              transition={{ delay: 0.7, ease: easeIn }}
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="font-body! text-xl md:text-2xl"
            >
              Rich Mind Holding is Multinational Corporation With an Extensive <br />
              Portofolio of Resources in Rapidly expanding industries
            </motion.h4>
            <div className="flex w-full flex-wrap items-end justify-between sm:gap-8">
              <ul className="custom-checklist w-xs shrink-0 text-xl leading-10 md:text-2xl">
                <motion.li
                  transition={{ delay: 0.8 }}
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  Rich Mind Investment
                </motion.li>
                <motion.li
                  transition={{ delay: 0.9 }}
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  Rich Developement
                </motion.li>
                <motion.li
                  transition={{ delay: 1 }}
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  Rich Mind Virtual Asset
                </motion.li>
              </ul>
              <motion.div
                transition={{ delay: 0.5 }}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex w-min flex-1 flex-wrap justify-end gap-2 md:gap-4 md:text-xl"
              >
                <Button
                  variant="primary"
                  className="w-[200px] sm:w-auto"
                  innerClassName="sm:px-10!"
                >
                  Rich Mind Holding
                </Button>
                <Button
                  variant="outline"
                  className="w-[200px] sm:w-auto"
                  innerClassName="sm:px-10!"
                >
                  Holding&apos;s Companies
                </Button>
              </motion.div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
