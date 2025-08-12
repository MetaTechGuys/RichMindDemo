'use client';

import { MEDIA, POSTERS } from '@/utils/constants';

export default function GlobalStandardsSection() {
  return (
    <div className="size-full py-4">
      <div className="relative flex size-full items-center overflow-hidden rounded-2xl px-8 py-8 md:px-16 lg:px-24 xl:px-32">
        <div className="z-10 flex max-w-2xl flex-1 flex-col gap-5 text-sm sm:text-base">
          <h4 className="font-display xs:text-2xl max-xs:text-center mb-5 bg-linear-(--golded-gradient-2) bg-clip-text text-xl font-bold text-transparent sm:text-4xl">
            High Standards in Global Investments
          </h4>
          <p className="md:text-xl">
            RICHMIND Holding aims to stay at the top of the global market through executing
            inventive investment approaches and delivering long-term, sustainable growth. We
            methodically identify and allocate resources to industries that have significant
            expansion potential.
          </p>
          <ul className="custom-checklist leading-10 md:text-xl md:leading-12">
            <li className="">Strategic Investments in Key Sectors</li>
            <li>Sustainability and Innovation Engagement</li>
          </ul>
          <p className="md:text-xl">
            We have a wide-reaching global presence in major markets, allowing us to generate
            substantial returns on our investments while impacting regional economies.
          </p>
        </div>
        <div className="absolute right-0 h-full lg:w-2/3">
          <video
            autoPlay
            loop
            muted
            className="size-full object-cover object-left mix-blend-exclusion hue-rotate-171"
            src={MEDIA.globe}
            poster={POSTERS.purpleglobe}
          />
        </div>
      </div>
    </div>
  );
}
