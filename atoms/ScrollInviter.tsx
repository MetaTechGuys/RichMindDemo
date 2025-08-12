'use client';

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react';
import { useState } from 'react';

export default function ScrollInviter() {
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
          className="stroke-gold-light fixed inset-0 top-auto bottom-10 z-20 mx-auto flex animate-bounce cursor-pointer flex-col items-center justify-center gap-2"
        >
          <a href="#gallery" className="contents">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 24"
              className="w-6 fill-current"
            >
              <path
                fill-rule="evenodd"
                className="translate-y-0"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
              <path
                fill-rule="evenodd"
                className="translate-y-1.5"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
              <path
                fill-rule="evenodd"
                className="translate-y-3"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
            <span className="text-gold-light text-xs text-nowrap uppercase">scroll down</span>
          </a>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
