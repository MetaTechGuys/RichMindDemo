'use client';
import { links } from '@/data';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function NavLinks() {
  return (
    <nav
      key="static"
      className="font-display text-gold-light z-2 grid gap-2 font-bold sm:grid-cols-3 sm:gap-4 sm:text-2xl md:gap-8"
    >
      {links.map((link, i) => (
        <Link key={i} className="contents" href={link.href}>
          <motion.div
            className="p-2 text-center"
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0, transition: { delay: i * 0.2 } }}
          >
            <motion.div whileHover={{ y: -5 }}>{link.title}</motion.div>
          </motion.div>
        </Link>
      ))}
    </nav>
  );
}
