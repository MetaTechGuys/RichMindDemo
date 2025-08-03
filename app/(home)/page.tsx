import { Button, ScrollTop } from '@/atoms';
import { NoticeSection } from '@/atoms/NoticeSection';
import CompaniesSection from '@/components/Companies';
import GallerySection from '@/components/Gallery';
import GlobalStandardsSection from '@/components/GlobalStandards';
import HeroSection from '@/components/Hero';
import WelcomeNotice from '@/components/notices/WelcomeNotice';
import RichMindStrategySection from '@/components/RichMindStrategy';
import WorldMapSection from '@/components/WorldMap';

export default function Home() {
  return (
    <main className="flex flex-col">
      <ScrollTop auto />
      <section id="top" className="grid min-h-screen snap-center">
        <HeroSection />
      </section>
      <section className="grid snap-center">
        <WelcomeNotice />
      </section>
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
        <NoticeSection>
          <div className="flex flex-col items-center gap-10 px-10 py-40 text-center text-xl text-white">
            <h4 className="font-display text-3xl xl:text-5xl 2xl:text-6xl">See Our Latest Work</h4>
            <p className="md:text-xl lg:mx-auto lg:max-w-2/3 2xl:text-3xl">
              Explore how we’ve transformed ideas into impactful designs.
            </p>
            <Button variant="primary">View Portofolio</Button>
          </div>
        </NoticeSection>
      </section>
    </main>
  );
}
