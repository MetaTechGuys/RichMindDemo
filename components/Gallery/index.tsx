'use client';

import { cn } from '@/utils/jsx-tools';
import { motion, useScroll, useTransform } from 'motion/react';

interface GallerySectionProps {
  start?: number;
  length?: number;
  scalefactor?: number;
}

export default function GallerySection({
  start = 0,
  length = 800,
  scalefactor = 2,
}: GallerySectionProps) {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [start, start + length * 0.8], [1, scalefactor], {
    clamp: true,
  });
  const y = useTransform(scrollY, [start, start + length], [0, length], { clamp: true });

  return (
    <>
      <motion.div
        transition={{ ease: 'linear' }}
        style={{ scale, y }}
        className="relative grid size-full h-screen! grid-flow-col grid-cols-1 grid-rows-4 gap-4 p-4 text-black sm:grid-cols-[15fr_35fr_15fr] md:gap-6 lg:grid-cols-[31fr_35fr_31fr] xl:container xl:mx-auto"
      >
        {items.map((item, index) => (
          <video
            key={index}
            src={item.src}
            muted
            autoPlay
            loop
            className={cn('size-full rounded-2xl object-cover', item.className, {
              'row-span-2': item.double,
            })}
          />
        ))}
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
  { src: '/video/467-162-Flog.webm' },
  { src: '/video/richmind-corporate-video-3-lq.webm', double: true },
  { src: '/video/021.webm' },
  { src: '/video/04.webm', double: true, className: 'hidden sm:block' },
  { src: '/video/02.webm', double: true, className: 'hidden sm:block' },
];
