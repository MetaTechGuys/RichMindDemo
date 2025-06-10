'use client';
import logo from '@/assets/img/RichMindlogo-white.png';
import { Button, Icon } from '@/atoms';
import { useScroll, useTransform, motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

interface NavbarProps {
  hideLogo?: boolean;
}

export default function Navbar({ hideLogo }: NavbarProps) {
  const [isOpen, setOpen] = useState(false);
  const { scrollY } = useScroll();
  // const x = useTransform(scrollY, [0, 300], [0, -200]);
  const w = useTransform(scrollY, [0, 300], [300, 200]);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    setOpen(false);
  };
  /** @ts-expect-error: ref is null at ssr load time */
  useOnClickOutside(ref, handleClickOutside);

  return (
    <>
      <nav className="fixed top-0 z-10 flex w-full items-center justify-between">
        {!hideLogo ? (
          <motion.div className="flex justify-center" style={{ width: w }}>
            <Image
              src={logo}
              alt=""
              className="w-full scale-75 sm:scale-100"
              loading="eager"
              priority
            />
          </motion.div>
        ) : (
          <>
            <div className="me-auto h-28"></div>
            <Button href="/" className="size-20" innerClassName="flex-center">
              <Icon name="back-outlined" className="size-full" />
            </Button>
          </>
        )}
        <Button
          className="me-12 size-20 p-4"
          onClick={() => {
            setOpen((o) => !o);
          }}
          innerClassName="p-0!"
        >
          <Icon name="align-right" className="size-full" />
        </Button>
      </nav>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            ref={ref}
            initial={{ height: 0 }}
            animate={{ height: 400 }}
            exit={{ height: 0 }}
            className="bg-opacity-10 font-display fixed top-0 z-30 grid h-100 w-screen grid-cols-2 overflow-hidden bg-black/50 bg-clip-padding p-8 capitalize shadow backdrop-blur-sm backdrop-filter md:grid-cols-4"
          >
            <div className="flex flex-col gap-4">
              <Link href="/">Home</Link>
              <Link href="/about-us">About Us</Link>
              <a href="#">Our Work</a>
              <a href="#">Our Agency</a>
              <a href="#">Services</a>
              <a href="#">Insights</a>
              <a href="#">SEO Checker</a>
              <a href="#">Contact</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#">phone</a>
              <a href="#">02078705794</a>
              <a href="#">Email</a>
              <a href="#">test@test.com</a>
              <a href="#">follow</a>
              <a href="#">Start a Project</a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
