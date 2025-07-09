'use client';

import { cn } from '@/utils/jsx-tools';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useLayoutEffect, useRef, useState } from 'react';

export default function GallerySection() {
  const [top, setTop] = useState(1000);
  const [length, setLength] = useState(800);
  const [scalefactor, setScalefactor] = useState(2);

  useLayoutEffect(() => {
    const rec = ref.current?.getBoundingClientRect();
    setTop(rec?.top ?? 0);
    setLength(rec?.height ?? 800);
    setScalefactor(2);
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [top, top + length * 0.8], [1, scalefactor], {
    clamp: true,
  });
  const y = useTransform(scrollY, [top, top + length], [0, length], { clamp: true });

  return (
    <>
      <motion.div
        ref={ref}
        transition={{ ease: 'linear' }}
        style={{ scale, y }}
        className="relative grid size-full h-screen! grid-flow-col grid-cols-1 grid-rows-4 gap-4 p-4 text-black sm:grid-cols-[15fr_35fr_15fr] md:gap-6 lg:grid-cols-[31fr_35fr_31fr] xl:container xl:mx-auto"
      >
        {inView
          ? items.map((item, index) => (
              <motion.video
                key={index}
                src={item.src}
                muted
                autoPlay
                loop
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 * Math.random() }}
                className={cn('size-full rounded-2xl object-cover', item.className, {
                  'row-span-2': item.double,
                })}
              />
            ))
          : null}
      </motion.div>
      <div className="w-full" style={{ height: length }}></div>
    </>
  );
}

interface GalleryItem {
  src: string;
  className?: string;
  double?: true;
}

const items: GalleryItem[] = [
  { src: '/video/05.webm', double: true, className: 'hidden sm:block' },
  { src: '/video/011.webm', className: 'hidden sm:block' },
  { src: '/video/031.webm', className: 'hidden sm:block' },
  { src: '/video/gallery-top.webm' },
  { src: '/video/richmind-corporate-video-3-lq.webm', double: true },
  { src: '/video/021.webm' },
  { src: '/video/04.webm', double: true, className: 'hidden sm:block' },
  { src: '/video/02.webm', double: true, className: 'hidden sm:block' },
];
