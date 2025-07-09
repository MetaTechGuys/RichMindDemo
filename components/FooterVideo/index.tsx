'use client';

import { Button, Icon } from '@/atoms';
import { MEDIA, POSTERS } from '@/utils/constants';
import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useRef } from 'react';
import { useBoolean } from 'usehooks-ts';

export default function FooterVideoSection() {
  const { setTrue, value: canPlay } = useBoolean(false);
  const vidRef = useRef<HTMLVideoElement>(null);
  const playVideo = useCallback(() => {
    setTrue();
    vidRef.current?.play();
  }, [setTrue]);
  return (
    <div className="relative size-full overflow-clip">
      <video
        src={MEDIA.aboutUsFooter}
        poster={POSTERS.richmindCorporate}
        className="max-h-screen w-full object-cover"
        controls
        ref={vidRef}
      />
      <AnimatePresence>
        {!canPlay ? (
          <motion.video
            key="video"
            transition={{ duration: 2 }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            src={MEDIA.aboutUsFooterDemo}
            autoPlay
            muted
            loop
            className="absolute inset-0 z-[1] m-auto w-full object-cover"
          />
        ) : null}
        {!canPlay ? (
          <motion.div
            key="video-controls"
            exit={{ height: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex-center absolute inset-0 top-auto z-[2] h-full w-full bg-gradient-to-t from-black to-transparent"
          >
            <AnimatePresence propagate>
              {!canPlay ? (
                <motion.div
                  initial={{ x: 0, opacity: 0, scale: 5 }}
                  exit={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  viewport={{ amount: 0.8, once: true }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  <Button onClick={playVideo}>
                    <Icon name="play" className="size-24 text-white" />
                  </Button>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="flex-center absolute inset-0 top-auto z-[1] h-12 w-full bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}
