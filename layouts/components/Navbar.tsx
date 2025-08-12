'use client';
import { links } from '@/data';
import { cn } from '@/utils/jsx-tools';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar({ fluid = false }) {
  const [showFixedNav, setFixedNav] = useState(!fluid);
  const { scrollY } = useScroll({ axis: 'y' });
  const showFixedNavMotion = useTransform(
    () => !fluid || (typeof window !== 'undefined' && scrollY.get() >= window.innerHeight * 0.3),
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
          className="bg-b glass fixed inset-0 bottom-auto z-50 mx-auto flex w-full justify-center gap-4 bg-black/30 px-4 shadow-2xl sm:w-fit sm:rounded-b-2xl sm:px-8 sm:pt-2 sm:pb-4 lg:px-16"
        >
          <div className="font-display text-gold-light z-2 flex font-bold sm:gap-4 md:text-xl lg:gap-8">
            {links.map((link, i) => (
              <Link
                key={i}
                className={cn(link.mobile ? 'contents' : 'hidden sm:contents')}
                href={link.href + (link.hash ?? '')}
              >
                <div className="p-2 text-center">
                  <motion.div whileHover={{ y: -2 }} className="text-nowrap text-white">
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
