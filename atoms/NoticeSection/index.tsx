'use client';

import { MEDIA, POSTERS } from '@/utils/constants';
import { cn } from '@/utils/jsx-tools';
import { useInView } from 'motion/react';
import { ComponentProps, PropsWithChildren, useRef } from 'react';

export function NoticeSection({
  children,
  className,
  neon,
  eager,
}: Readonly<PropsWithChildren<ComponentProps<'div'> & { neon?: boolean; eager?: boolean }>>) {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref);
  return (
    <div className={cn('size-full py-8 sm:py-12 md:py-16 lg:py-20', className)}>
      <div className={cn('relative overflow-hidden rounded-2xl', { 'neon-box': neon })}>
        <div className="relative z-10">{children}</div>
        <video
          ref={ref}
          className="absolute inset-0 z-0 size-full object-cover"
          poster={POSTERS.black}
          muted
          autoPlay
          loop
          preload={eager ? 'auto' : 'none'}
        >
          {inView ? <source src={MEDIA.black} /> : null}
        </video>
      </div>
    </div>
  );
}
