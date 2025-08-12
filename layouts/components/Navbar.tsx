'use client';
import { links } from '@/data';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [showFixedNav, setFixedNav] = useState(false);
  const { scrollY } = useScroll({ axis: 'y' });
  const showFixedNavMotion = useTransform(
    () => typeof window !== 'undefined' && scrollY.get() >= window.innerHeight * 0.9,
  );
  useMotionValueEvent(showFixedNavMotion, 'change', setFixedNav);

  return (
    <AnimatePresence>
      {showFixedNav ? (
        <motion.nav
          key="fixed"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ ease: 'easeInOut' }}
          className="bg-b glass fixed inset-0 bottom-auto z-50 mx-auto flex w-full justify-center gap-4 bg-black/30 px-4 shadow-2xl sm:w-fit sm:rounded-b-2xl sm:px-8 sm:pt-2 sm:pb-4 md:px-16"
        >
          <div className="font-display text-gold-light z-2 grid grid-cols-3 font-bold sm:gap-4 sm:text-xl md:gap-8">
            {links.map((link, i) => (
              <Link key={i} className="contents" href={link.href}>
                <div className="p-2 text-center">
                  <motion.div whileHover={{ y: -2 }} className="text-white">
                    {link.title}
                  </motion.div>
                </div>
              </Link>
            ))}
          </div>
        </motion.nav>
      ) : null}
    </AnimatePresence>
  );
}
