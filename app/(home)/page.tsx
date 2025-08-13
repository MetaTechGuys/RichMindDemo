'use client';
import { Button, ScrollTop } from '@/atoms';
import { NoticeSection } from '@/atoms/NoticeSection';
import { RoyalSection } from '@/atoms/RoyalSection';
import ScrollInviter from '@/atoms/ScrollInviter';
import CompaniesSection from '@/components/Companies';
import GallerySection from '@/components/Gallery';
import GlobalStandardsSection from '@/components/GlobalStandards';
import LogomotionVideo from '@/components/Logomotion';
import WelcomeNotice from '@/components/notices/WelcomeNotice';
import RichMindStrategySection from '@/components/RichMindStrategy';
import WorldMapSection from '@/components/WorldMap';
// import NavLinks from '@/layouts/components/NavLinks';

export default function Home() {
  return (
    <main className="flex flex-col">
      <ScrollTop auto />
      <RoyalSection
        full
        size={60}
        id="top"
        className="flex h-screen items-center justify-center bg-[url(/white-flag-matterial.jpg)] bg-cover bg-blend-hard-light"
      >
        <div className="flex size-full flex-col items-center justify-end py-8 sm:gap-[calc(20vh_-_60px)]">
          {/* <NavLinks /> */}
          <LogomotionVideo className="pointer-events-none absolute inset-0 size-full object-contain mix-blend-multiply max-sm:-translate-y-10 max-sm:scale-75 max-sm:object-cover" />
          <div className="z-2 h-10">
            <ScrollInviter className="sm:mt-10x mt-0 [animation-duration:3000ms]" />
          </div>
        </div>
      </RoyalSection>
      <section className="grid snap-center">
        <WelcomeNotice />
      </section>
      <section id="gallery" className="grid min-h-screen overflow-clip">
        <GallerySection />
      </section>
      <section id="worldmap" className="grid min-h-screen snap-center border-t-8 border-white">
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
          <div className="flex flex-col items-center gap-10 px-10 py-40 text-center text-xl">
            <h4 className="font-display z-4 bg-linear-(--golded-gradient-2) bg-clip-text text-3xl font-bold text-transparent xl:text-5xl 2xl:text-6xl">
              See Our Latest Work
            </h4>
            <p className="z-4 md:text-xl lg:mx-auto lg:max-w-2/3 2xl:text-3xl">
              Explore how we’ve transformed ideas into impactful designs.
            </p>
            <Button className="z-4" variant="primary">
              View Portofolio
            </Button>
          </div>
        </NoticeSection>
      </section>
    </main>
  );
}
