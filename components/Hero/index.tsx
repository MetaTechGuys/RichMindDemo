'use client';
import logo from '@/assets/img/RichMindlogo-white.png';
import { Button, Icon } from '@/atoms';
import { NoticeSection } from '@/atoms/NoticeSection';
import { MEDIA, POSTERS } from '@/utils/constants';
import {
  AnimatePresence,
  cubicBezier,
  easeIn,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react';
import Image from 'next/image';
import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const [loading, setLoading] = useState(true);
  const [hasConset, setConset] = useState(false);

  const coverVidRef = useRef<HTMLVideoElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const { scrollY } = useScroll();
  const vol = useTransform(scrollY, [0, 1000], [1, 0], { clamp: true });
  useMotionValueEvent(vol, 'change', (v) => {
    if (!audioRef.current) return;
    if (!videoRef.current) return;
    if (v === 0) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    audioRef.current.volume = v;
  });

  const vol2 = useTransform(scrollY, [900, 1300, 4500, 5500], [0, 1, 1, 0], { clamp: true });
  useMotionValueEvent(scrollY, 'change', console.log);
  useMotionValueEvent(vol2, 'change', (v) => {
    const galleryMainVideo = document.getElementById('main-gallery-video') as
      | HTMLVideoElement
      | undefined;
    if (!galleryMainVideo) return;
    if (v === 0) {
      galleryMainVideo.pause();
    } else {
      galleryMainVideo.play();
    }
    galleryMainVideo.volume = v;
  });

  useEffect(() => {
    const hasConset = sessionStorage.getItem('skip-conset');

    setConset(!!hasConset);
    setLoading(false);
  }, []);

  const handlePlay = useCallback(() => {
    coverVidRef.current?.play();
    audioRef.current?.play();
    const galleryMainVideo = document.getElementById('main-gallery-video') as
      | HTMLVideoElement
      | undefined;
    if (galleryMainVideo && !galleryMainVideo.hasAttribute('data-touch')) {
      galleryMainVideo.setAttribute('data-touch', 'done');
      galleryMainVideo.volume = 0;
      galleryMainVideo.play();
      setTimeout(() => {
        galleryMainVideo.pause();
      }, 100);
    }
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
            className="fixed z-30 h-screen w-screen"
            id="play-video-consent"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: cubicBezier(1, 0, 1, 1), duration: 0.7 }}
          >
            <div className="bg-opacity-10 absolute size-full bg-black/30 bg-clip-padding backdrop-blur-sm backdrop-filter" />
            {loading ? null : (
              <motion.div
                className="size-full"
                initial={{ y: 500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <NoticeSection className="flex-center" neon eager>
                  <div
                    className="font-display flex min-w-[50vw] flex-col items-center gap-4 p-10 py-15 text-center text-xl text-white"
                    style={fontPreloadStyle}
                  >
                    <Image src={logo} alt="" className="-my-6 max-w-xs" loading="eager" />
                    <h4 className="text-4xl opacity-80">Welcome to Richmind</h4>
                    <p className="max-w-md">Learn about our projects and companies</p>
                    <Button variant="primary" className="text-base" onClick={getConset}>
                      Start the Experience
                      <Icon
                        name="sound-on"
                        className="absolute inset-0 m-auto size-12 -translate-x-20 opacity-10"
                      />
                    </Button>
                    <small className="text-sm opacity-50">
                      Wear headphons for better experience
                    </small>
                  </div>
                </NoticeSection>
              </motion.div>
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="relative size-full overflow-hidden">
        <video
          loop
          ref={videoRef}
          poster={POSTERS.siteBanner}
          className="absolute inset-0 z-[1] m-auto h-full object-none sm:object-cover xl:w-full"
          onPlay={handlePlay}
          onPause={handlePause}
        >
          <source src={MEDIA.siteBanner} type="video/mp4" />
          <audio loop id="hero-audio" ref={audioRef}>
            <source src={MEDIA.heroAudio} type="audio/mpeg" />
          </audio>
        </video>
        <video
          ref={coverVidRef}
          muted
          loop
          poster={POSTERS.blackDot}
          className="inset-0 z-0 size-full scale-110 object-cover blur-sm sm:hidden"
        >
          <source src={MEDIA.siteBanner} type="video/mp4" />
        </video>
        {hasConset ? (
          <div className="--lg:px-68 absolute inset-0 z-[2] flex size-full flex-col justify-between gap-4 bg-black/40 px-4 sm:justify-center sm:gap-6 sm:px-8 md:gap-4 lg:gap-8">
            <motion.h1
              transition={{ delay: 0.5, ease: easeIn }}
              initial={{ scale: 10, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="font-body! xs:leading-12 mt-48 truncate pb-1 text-lg text-[48px]! italic sm:mt-32 sm:text-2xl md:text-3xl"
            >
              Inspire People <br />
              Design the Future
            </motion.h1>
            <motion.h4
              transition={{ delay: 0.7, ease: easeIn }}
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="font-body! mb-auto sm:mb-0 sm:text-xl md:text-2xl"
            >
              Rich Mind Holding is Multinational Corporation With an Extensive <br />
              Portofolio of Resources in Rapidly expanding industries
            </motion.h4>
            <div className="mb-16 flex w-full flex-wrap items-end justify-between sm:block sm:gap-8 lg:mt-6 lg:flex">
              <ul className="custom-checklist w-xs shrink-0 translate-y-2 leading-10 sm:text-xl md:text-2xl">
                <motion.li
                  transition={{ delay: 0.8 }}
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="-my-2 md:m-0"
                >
                  Rich Mind Investment
                </motion.li>
                <motion.li
                  transition={{ delay: 0.9 }}
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="-my-2 md:m-0"
                >
                  Rich Developement
                </motion.li>
                <motion.li
                  transition={{ delay: 1 }}
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="-my-2 md:m-0"
                >
                  Rich Mind Virtual Asset
                </motion.li>
              </ul>
              <motion.div
                transition={{ delay: 0.5 }}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="xs:flex-nowrap xs:mt-22 mt-10 flex w-min flex-1 flex-wrap justify-end gap-2 sm:mt-8 sm:w-full md:gap-4 md:text-xl lg:w-xl"
              >
                <Button
                  variant="primary"
                  className="xs:w-[200px] w-full sm:w-auto"
                  innerClassName="sm:px-10!"
                >
                  Rich Mind Holding
                </Button>
                <Button
                  href="#companies"
                  variant="outline"
                  className="xs:w-[200px] w-full sm:w-auto"
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

const fontPreloadStyle: CSSProperties = {
  fontFamily: 'var(--google-font-display)',
};
