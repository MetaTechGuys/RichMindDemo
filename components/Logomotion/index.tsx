'use client';

import { cn } from '@/utils/jsx-tools';
import { motion } from 'motion/react';

export default function LogomotionSection({ className }: { className?: string }) {
  return (
    <motion.video
      className={cn('h-[calc(100vh)] w-full object-cover', className)}
      muted
      autoPlay
      src="/logomotion.mp4"
    />
  );
}
