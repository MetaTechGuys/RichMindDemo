'use client';
import logo from '@/assets/img/RichMindlogo-white.png';
import { useScroll, useTransform, motion } from 'motion/react';
import Image from 'next/image';

export default function Navbar() {
  const { scrollY } = useScroll();
  // const x = useTransform(scrollY, [0, 300], [0, -200]);
  const w = useTransform(scrollY, [0, 300], [300, 150]);

  return (
    <nav className="fixed top-0 z-10 grid w-full grid-cols-[min-content_1fr_min-content]">
      <div>1</div>
      <motion.div className="flex justify-center" style={{ width: w }}>
        <Image src={logo} alt="" className="w-full" />
      </motion.div>
      <div>1</div>
    </nav>
  );
}
