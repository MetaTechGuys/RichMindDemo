'use client';
import { motion } from 'motion/react';

export default function LogomotionVideo({ className }: { className?: string }) {
  return <motion.video className={className} muted autoPlay src="/logomotion.mp4" />;
}
