'use client';
import { MEDIA, POSTERS } from '@/utils/constants';
import { motion, useInView } from 'motion/react';
import { PropsWithChildren, useRef } from 'react';

export default function LogomotionVideo({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { once: true, amount: 'some' });
  return (
    <>
      <motion.video className={className} muted ref={ref} autoPlay poster={POSTERS.logomotion}>
        {inView ? (
          <>
            <source src={MEDIA.logomotion} />
            <source src={MEDIA.logomotionFallback1} />
          </>
        ) : null}
      </motion.video>
      {children}
    </>
  );
}
