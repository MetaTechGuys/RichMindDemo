'use client';
import { Button, ScrollTop } from '@/atoms';
import { NoticeSection } from '@/atoms/NoticeSection';
import { RoyalSection } from '@/atoms/RoyalSection';
import ScrollInviter from '@/atoms/ScrollInviter';
import CompaniesSection from '@/components/Companies';
import GallerySection from '@/components/Gallery';
import GlobalStandardsSection from '@/components/GlobalStandards';
// import HeroSection from '@/components/Hero';
import LogomotionSection from '@/components/Logomotion';
// import WelcomeNotice from '@/components/notices/WelcomeNotice';
import RichMindStrategySection from '@/components/RichMindStrategy';
import WorldMapSection from '@/components/WorldMap';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <main className="flex flex-col">
      <ScrollTop auto />
      <RoyalSection size={120} id="top" className="flex h-screen items-center justify-center">
        <LogomotionSection className="mix-blend-multiply" />
        <motion.div className="font-display text-gold-light absolute grid translate-y-50 grid-cols-3 gap-8 text-2xl font-bold">
          <Link className="contents" href="#top">
            <motion.div
              className="p-2 text-center"
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 2.0 } }}
            >
              <motion.div whileHover={{ y: -5 }}>Home</motion.div>
            </motion.div>
          </Link>
          <Link className="contents" href="#gallery">
            <motion.div
              className="p-2 text-center"
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 2.2 } }}
            >
              <motion.div whileHover={{ y: -5 }}>Gallery</motion.div>
            </motion.div>
          </Link>
          <Link className="contents" href="#worldmap">
            <motion.div
              className="p-2 text-center"
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 2.4 } }}
            >
              <motion.div whileHover={{ y: -5 }}>Branches</motion.div>
            </motion.div>
          </Link>
        </motion.div>
        <ScrollInviter />
      </RoyalSection>
      {/* <section id="top" className="grid min-h-screen snap-center">
        <HeroSection />
      </section> */}
      {/* <section className="grid snap-center">
        <WelcomeNotice />
      </section> */}
      <section id="gallery" className="grid min-h-screen overflow-clip">
        <GallerySection />
      </section>
      <section id="worldmap" className="grid min-h-screen snap-center">
        <WorldMapSection />
      </section>
      <section id="standards" className="grid min-h-screen snap-center">
        <GlobalStandardsSection />
      </section>
      <section id="companies" className="grid min-h-screen snap-center">
        <CompaniesSection />
      </section>
      <section id="strategy" className="grid min-h-screen snap-center">
        <RichMindStrategySection />
      </section>
      <section className="grid snap-center">
        <NoticeSection innerClassName="p-8">
          <RoyalSection className="flex flex-col items-center gap-10 px-10 py-40 text-center text-xl">
            <h4 className="font-display text-3xl xl:text-5xl 2xl:text-6xl">See Our Latest Work</h4>
            <p className="md:text-xl lg:mx-auto lg:max-w-2/3 2xl:text-3xl">
              Explore how we’ve transformed ideas into impactful designs.
            </p>
            <Button variant="primary">View Portofolio</Button>
          </RoyalSection>
        </NoticeSection>
      </section>
    </main>
  );
}
