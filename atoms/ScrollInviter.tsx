'use client';

import { cn } from '@/utils/jsx-tools';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react';
import { ComponentProps, useState } from 'react';

export default function ScrollInviter({ className }: ComponentProps<'div'>) {
  const [show, setShow] = useState(true);
  const { scrollY } = useScroll({ axis: 'y' });
  const showMotion = useTransform(() => scrollY.get() < 1);
  useMotionValueEvent(showMotion, 'change', setShow);
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          exit={{ y: 50, opacity: 0 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={cn(
            'stroke-gold-light top-auto z-20 mx-auto flex animate-bounce cursor-pointer flex-col items-center justify-center gap-1',
            className,
          )}
        >
          <a href="#gallery" className="contents">
            <span className="text-gold-light text-xs text-nowrap uppercase">scroll down</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-6 fill-current"
            >
              <path
                fillRule="evenodd"
                className=""
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </a>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
