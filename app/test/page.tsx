import { MEDIA } from '@/utils/constants';

export default async function CompanyPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <video
        className="absolute z-0 size-full object-cover mix-blend-exclusion hue-rotate-171"
        src={MEDIA.blackBackground}
        muted
        autoPlay
      />
      <video
        className="absolute z-1 size-full object-cover mix-blend-darken"
        src="/Comp 1_1.mp4"
        muted
        autoPlay
      />
    </main>
  );
}
