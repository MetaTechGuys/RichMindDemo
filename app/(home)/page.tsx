import { NoticeSection } from '@/atoms/NoticeSection';
import CompaniesSection from '@/components/Companies';
import GallerySection from '@/components/Gallery';
import GlobalStandardsSection from '@/components/GlobalStandards';
import HeroSection from '@/components/Hero';
import RichMindStrategySection from '@/components/RichMindStrategy';
import WorldMapSection from '@/components/WorldMap';

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col gap-8">
      <section className="h-screen snap-center">
        <HeroSection />
      </section>
      <section className="snap-center">
        <NoticeSection>
          <div className="font-display flex flex-col gap-10 py-20 text-center text-xl text-white">
            <h4 className="text-4xl">Global reach, local expertise</h4>
            <p>
              Our mission is to use operational expertise and strategic investments to promote
              innovation, sustainability, and brilliance, reaffirming our ongoing mission to do
              worldwide community service.
            </p>
          </div>
        </NoticeSection>
      </section>
      <section className="h-screen snap-center">
        <GallerySection />
      </section>
      <section className="h-screen snap-center">
        <WorldMapSection />
      </section>
      <section className="h-screen snap-center">
        <GlobalStandardsSection />
      </section>
      <section className="min-h-screen snap-center">
        <CompaniesSection />
      </section>
      <section className="h-screen snap-center">
        <RichMindStrategySection />
      </section>
      <section className="snap-center">
        <NoticeSection>
          <div className="font-display flex flex-col gap-10 py-20 text-center text-xl text-white">
            <h4 className="text-4xl">See Our Latest Work</h4>
            <p>Explore how we’ve transformed ideas into impactful designs.</p>
          </div>
        </NoticeSection>
      </section>
    </main>
  );
}
