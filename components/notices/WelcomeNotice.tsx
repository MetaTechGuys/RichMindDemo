'use client';
import { NoticeSection } from '@/atoms/NoticeSection';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function WelcomeNotice() {
  const ref = useRef<HTMLDivElement>(null);
  const inview = useInView(ref, { once: true });

  return (
    <NoticeSection>
      <div
        ref={ref}
        className="font-display flex flex-col gap-10 px-10 py-40 text-center text-lg text-white"
      >
        {inview ? (
          <motion.h4
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-3xl"
          >
            Global reach, local expertise
          </motion.h4>
        ) : null}
        {inview ? (
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="lg:mx-auto lg:max-w-2/3"
          >
            Our mission is to use operational expertise and strategic investments to promote
            innovation, sustainability, and brilliance, reaffirming our ongoing mission to do
            worldwide community service.
          </motion.p>
        ) : null}
      </div>
    </NoticeSection>
  );
}
