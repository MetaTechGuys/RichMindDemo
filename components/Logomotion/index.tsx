'use client';
import { motion } from 'motion/react';
import { PropsWithChildren } from 'react';
import { useBoolean } from 'usehooks-ts';

export default function LogomotionVideo({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  const show = useBoolean(false);
  return (
    <>
      <motion.video
        className={className}
        muted
        autoPlay
        src="/logomotion.mp4"
        onEnded={show.setTrue}
      />
      {show.value ? children : null}
    </>
  );
}
