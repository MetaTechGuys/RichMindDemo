'use client';
import logo from '@/assets/img/RichMindlogo-white.png';
import { Button, Icon } from '@/atoms';
import { cn } from '@/utils/jsx-tools';
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
  const scale = useTransform(scrollY, [0, 100], [1, 0.75], { clamp: true });
  const y = useTransform(scrollY, [0, 200], [0, -200], { clamp: true });
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    setOpen(false);
  };
  /** @ts-expect-error: ref is null at ssr load time */
  useOnClickOutside(ref, handleClickOutside);

  return (
    <>
      <nav className="fixed top-0 z-29 flex w-full items-center justify-end">
        {!hideLogo ? (
          <motion.div
            className="fixed start-4 top-10 flex h-32 justify-center sm:h-40 md:top-0 md:h-48"
            style={{ y, scale }}
          >
            <Image
              src={logo}
              alt="Richmind Holding"
              className="w-full origin-left"
              loading="eager"
              priority
            />
          </motion.div>
        ) : (
          <>
            <div className="me-auto h-22"></div>
            <Button
              href="/"
              className={cn('size-18', hideLogo ? '' : 'mt-8')}
              innerClassName="flex-center"
            >
              <Icon name="back-outlined" className="size-full" />
            </Button>
          </>
        )}
        <Button
          className={cn('xs:me-8 me-4 size-18 p-4 sm:me-12', hideLogo ? '' : 'mt-10')}
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
            className="bg-opacity-10 font-display fixed top-0 z-30 h-100 w-screen overflow-hidden bg-black/50 bg-clip-padding p-16 capitalize shadow backdrop-blur-sm backdrop-filter md:p-24"
          >
            <div className="flex flex-col gap-4 text-xl md:col-start-2">
              <Link href="/">Home</Link>
              <Link href="/about-us">About Us</Link>
              {/* <a href="#">Our Work</a> */}
              {/* <a href="#">Our Agency</a> */}
              {/* <a href="#">Services</a> */}
              {/* <a href="#">Insights</a> */}
              {/* <a href="#">SEO Checker</a> */}
              <a href="#" onClick={() => window.scrollTo({ top: 99999 })}>
                Contact
              </a>
            </div>
            {/* <div className="flex flex-col gap-4">
              <a href="#">phone</a>
              <a href="#">02078705794</a>
              <a href="#">Email</a>
              <a href="#">test@test.com</a>
              <a href="#">follow</a>
              <a href="#">Start a Project</a>
            </div> */}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
