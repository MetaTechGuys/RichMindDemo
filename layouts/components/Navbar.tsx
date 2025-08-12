'use client';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react';
import Link from 'next/link';
import { ComponentProps, useState } from 'react';

interface LinkData {
  title: string;
  href: string;
}

const links: LinkData[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Companies',
    href: '#companies',
  },
  {
    title: 'About Us',
    href: '/about-us',
  },
];

export default function Navbar({
  className,
  secondary,
}: ComponentProps<'nav'> & { secondary?: boolean }) {
  const [showFixedNav, setFixedNav] = useState(false);
  const { scrollY } = useScroll({ axis: 'y' });
  const showFixedNavMotion = useTransform(
    () => typeof window !== 'undefined' && scrollY.get() >= window.innerHeight * 0.9,
  );
  useMotionValueEvent(showFixedNavMotion, 'change', setFixedNav);

  return (
    <AnimatePresence>
      {showFixedNav || secondary ? (
        <motion.nav
          key="fixed"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ ease: 'easeInOut' }}
          className="bg-b glass fixed inset-0 bottom-auto z-50 mx-auto flex w-full justify-center gap-4 bg-black/30 px-4 shadow-2xl sm:w-fit sm:rounded-b-2xl sm:px-8 sm:pt-2 sm:pb-4 md:px-16"
        >
          <div className={className}>
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
      {!secondary ? (
        <motion.nav key="static" className={className}>
          {links.map((link, i) => (
            <Link key={i} className="contents" href={link.href}>
              <motion.div
                className="p-2 text-center"
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 2.0 + i * 0.2 } }}
              >
                <motion.div whileHover={{ y: -5 }}>{link.title}</motion.div>
              </motion.div>
            </Link>
          ))}
        </motion.nav>
      ) : null}
    </AnimatePresence>
  );
}
