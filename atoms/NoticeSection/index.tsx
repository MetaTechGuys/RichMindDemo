'use client';

import { cn } from '@/utils/jsx-tools';
import { ComponentProps, PropsWithChildren } from 'react';

export function NoticeSection({
  children,
  className,
  neon,
  innerClassName,
  // eager,
}: Readonly<
  PropsWithChildren<
    ComponentProps<'div'> & { neon?: boolean; eager?: boolean; innerClassName?: string }
  >
>) {
  // const ref = useRef<HTMLVideoElement>(null);
  // const inView = useInView(ref);

  return (
    <div className={cn('size-full py-8 sm:py-12 md:py-16 lg:py-20', className)}>
      <div
        className={cn('relative overflow-hidden rounded-2xl', { 'neon-box': neon }, innerClassName)}
      >
        <div className="relative z-10">{children}</div>
        {/* <video
          ref={ref}
          className="absolute inset-0 z-0 size-full object-cover mix-blend-exclusion hue-rotate-171"
          poster={POSTERS.black}
          muted
          autoPlay
          loop
          preload={eager ? 'auto' : 'none'}
        >
          {inView ? <source src={MEDIA.black} /> : null}
        </video> */}
      </div>
    </div>
  );
}
