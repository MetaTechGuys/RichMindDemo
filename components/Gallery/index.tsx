'use client';

import { MEDIA, POSTERS } from '@/utils/constants';
import { cn } from '@/utils/jsx-tools';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import {
  ComponentProps,
  RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { useBoolean } from 'usehooks-ts';

const tailLength = 3000;

export default function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const vidRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { value: isFullScreen, toggle: toggleIsFullscreen } = useBoolean(false);

  const handlePlay = useCallback(() => {
    if (vidRef.current && audioRef.current) {
      audioRef.current.currentTime = vidRef.current.currentTime;
      audioRef.current?.play();
    }
  }, []);

  const handlePause = useCallback(() => {
    audioRef.current?.pause();
  }, []);

  const [scalefactor, setScalefactor] = useState(2);
  const [hasZoomAnimate, enableZoomAnimation] = useState(true);

  useLayoutEffect(() => {
    const wWidth = window.innerWidth;
    const wHeight = window.innerHeight;
    const vRect = vidRef.current!.getBoundingClientRect();

    const scale = Math.max(1, wHeight / vRect.height, wWidth / vRect.width);

    enableZoomAnimation(wWidth > 641);
    setScalefactor(scale);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end end'],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, scalefactor]);
  const borderRadius = useTransform(scrollYProgress, [0.3, 0.45], [16, 0]);

  useEffect(() => {
    function onFullscreen() {
      toggleIsFullscreen();
    }
    vidRef.current!.addEventListener('fullscreenchange', onFullscreen);
    vidRef.current!.addEventListener('webkitfullscreenchange', onFullscreen);
    vidRef.current!.addEventListener('mozfullscreenchange', onFullscreen);
    return () => {
      vidRef.current?.removeEventListener('fullscreenchange', onFullscreen);
      vidRef.current?.removeEventListener('webkitfullscreenchange', onFullscreen);
      vidRef.current?.removeEventListener('mozfullscreenchange', onFullscreen);
    };
  }, []);

  return (
    <div ref={ref}>
      <motion.div
        style={hasZoomAnimate ? { scale } : undefined}
        className="sticky top-0 grid size-full h-screen! grid-cols-[1fr_1fr_1fr] grid-rows-[min-content_1fr_min-content_min-content] gap-4 p-4 text-black md:grid-cols-[15fr_35fr_15fr] md:grid-rows-4 md:gap-6 xl:container xl:mx-auto"
      >
        <GalleryVideo
          src={MEDIA.gallery05}
          poster={POSTERS.gallery05}
          className="can-hidden-sm md:row-span-2"
        />
        <GalleryVideo src={MEDIA.galleryTop} poster={POSTERS.galleryTop} />
        <GalleryVideo
          src={MEDIA.gallery04}
          poster={POSTERS.gallery04}
          className="can-hidden-sm md:row-span-2"
        />
        <motion.div
          style={{ borderRadius }}
          className="relative row-span-4 size-full overflow-clip rounded-2xl max-md:col-span-3 md:row-span-2"
        >
          <GalleryVideo
            id="main-gallery-video"
            ref={vidRef}
            className={cn(
              'size-full rounded-none!',
              isFullScreen ? 'object-contain md:object-cover' : 'object-cover',
            )}
            poster={POSTERS.richmindCorporate}
            controls={!hasZoomAnimate}
            onPlay={handlePlay}
            onPause={handlePause}
            playsInline
          >
            <source src={MEDIA.richmindIntro} type="video/webm" />
            <source src={MEDIA.richmindIntroFallback1} type="video/webm" />

            <audio loop id="hero-audio" ref={audioRef}>
              <source src={MEDIA.heroAudio} type="audio/mpeg" />
            </audio>
          </GalleryVideo>
        </motion.div>
        <GalleryVideo
          src={MEDIA.gallery02}
          poster={POSTERS.gallery02}
          className="can-hidden-sm md:row-span-2"
        />
        <GalleryVideo
          src={MEDIA.gallery011}
          poster={POSTERS.gallery011}
          className="can-hidden-sm"
        />
        <GalleryVideo
          src={MEDIA.gallery031}
          poster={POSTERS.gallery031}
          className="can-hidden-sm"
        />
        <GalleryVideo
          src={MEDIA.gallery021}
          poster={POSTERS.gallery021}
          className="max-md:hidden"
        />
      </motion.div>
      {hasZoomAnimate ? <div className="min-h-screen" style={{ height: tailLength }} /> : null}
    </div>
  );
}

const GalleryVideo = ({
  className,
  children,
  autoPlay = true,
  src,
  ref: refEx,
  ...props
}: ComponentProps<'video'> &
  Pick<ComponentProps<'source'>, 'src'> & { ref?: RefObject<HTMLVideoElement | null> }) => {
  const refIn = useRef<HTMLVideoElement>(null);
  const ref = refEx ?? refIn;
  const inView = useInView(ref);
  return (
    <video
      ref={ref}
      muted
      autoPlay={autoPlay}
      loop
      preload="none"
      className={cn('size-full rounded-2xl object-cover', className)}
      {...props}
    >
      {src && inView ? <source src={src} /> : null}
      {inView ? children : undefined}
    </video>
  );
};
