'use client';

import { Button, Icon } from '@/atoms';
import { cn } from '@/utils/jsx-tools';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react';
import { ComponentProps, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useBoolean, useCountdown } from 'usehooks-ts';

const tailLength = 3000;
const forceViewTime = process.env.NODE_ENV === 'production' ? 10 : 3;

export default function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const vidRef = useRef<HTMLVideoElement>(null);
  const { value: isForced, setFalse: skipVideo, setTrue: forceWatch } = useBoolean(false);
  const { value: isLock, setFalse: lockAnimation } = useBoolean(false);
  const { value: isFullScreen, toggle: toggleIsFullscreen } = useBoolean(false);
  const [count, { startCountdown }] = useCountdown({
    countStart: forceViewTime,
  });

  const [top, setTop] = useState(1000);
  const [scalefactor, setScalefactor] = useState(2);
  const [hasZoomAnimate, enableZoomAnimation] = useState(true);

  useLayoutEffect(() => {
    setTop(ref.current?.offsetTop ?? 0);
    const wWidth = window.innerWidth;
    const wHeight = window.innerHeight;
    const vRect = vidRef.current!.getBoundingClientRect();

    const scale = Math.max(1, wHeight / vRect.height, wWidth / vRect.width);

    enableZoomAnimation(wWidth > 641);
    setScalefactor(scale);
  }, []);

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [top, top + tailLength / 2], [1, scalefactor], {
    clamp: true,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const lockScrollToForceWatch = useCallback(() => {
    startCountdown();
    forceWatch();
    const viewportHeight = window.innerHeight;
    window.scrollTo({
      top: top + tailLength + vidRef.current!.clientHeight - viewportHeight / 2,
      behavior: 'smooth',
    });
  }, [forceWatch, startCountdown, top]);

  useMotionValueEvent(scale, 'change', (v) => {
    if (v >= scalefactor && count > 0) {
      // vidRef.current!.requestFullscreen();
      lockAnimation();
    }
  });

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
    <>
      <div ref={ref}></div>
      <motion.div
        style={hasZoomAnimate ? { scale: isLock ? scalefactor : scale } : undefined}
        className="sticky top-0 grid size-full h-screen! grid-cols-[15fr_35fr_15fr] grid-rows-4 gap-4 p-4 text-black md:gap-6 xl:container xl:mx-auto"
      >
        <GalleryVideo src="/video/05.webm" className="can-hidden-sm row-span-2" />
        <GalleryVideo src="/video/gallery-top.webm" />
        <GalleryVideo src="/video/04.webm" className="can-hidden-sm row-span-2" />
        <div className="relative row-span-2 size-full overflow-clip rounded-2xl">
          <GalleryVideo
            src="/video/richmind-corporate-video-3-lq.webm"
            ref={vidRef}
            className={cn(
              'size-full',
              isFullScreen ? 'object-contain md:object-cover' : 'object-cover',
            )}
            controls={!hasZoomAnimate}
          />
          {isForced ? (
            <Button
              id="force-prevent-scroll"
              className="bg-gold absolute! end-0 bottom-4 rounded-r-none! text-sm"
              innerClassName="rounded-r-none! inline-flex items-center gap-1 px-3! py-1.5!"
              disabled={count > 0}
              onClick={() => {
                skipVideo();
                setTimeout(() => {
                  window.scrollBy({ top: 100, behavior: 'smooth' });
                }, 500);
              }}
            >
              Skip{count ? <span> in {count}</span> : <Icon name="play" className="-me-3 size-4" />}
            </Button>
          ) : null}
        </div>
        <GalleryVideo src="/video/02.webm" className="can-hidden-sm row-span-2" />
        <GalleryVideo src="/video/011.webm" className="can-hidden-sm" />
        <GalleryVideo src="/video/031.webm" className="can-hidden-sm" />
        <GalleryVideo src="/video/021.webm" />
      </motion.div>
      {hasZoomAnimate && !isLock ? (
        <div className="min-h-screen" style={{ height: tailLength }} />
      ) : null}
    </>
  );
}

const GalleryVideo = ({ className, ...props }: ComponentProps<'video'>) => {
  return (
    <video
      muted
      autoPlay
      loop
      className={cn('size-full rounded-2xl object-cover', className)}
      {...props}
    />
  );
};
