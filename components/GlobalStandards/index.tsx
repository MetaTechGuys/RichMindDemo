'use client';

import { MEDIA, POSTERS } from '@/utils/constants';

export default function GlobalStandardsSection() {
  return (
    <div className="size-full py-4">
      <div className="relative flex size-full items-center overflow-hidden rounded-2xl bg-black px-8 py-8 md:px-16 lg:px-24 xl:px-32">
        <div className="font-display z-10 flex max-w-2xl flex-1 flex-col gap-5 text-lg text-white">
          <h4 className="xs:text-4xl sm:text-6x text-2xl">High Standards in Global Investments</h4>
          <p>
            RichMind Holding aims to stay at the top of the global market through executing
            inventive investment approaches and delivering long-term, sustainable growth. We
            methodically identify and allocate resources to industries that have significant
            expansion potential.
          </p>
          <ul className="custom-checklist leading-12">
            <li className="">Strategic Investments in Key Sectors</li>
            <li>Sustainability and Innovation Engagement</li>
          </ul>
          <p>
            We have a wide-reaching global presence in major markets, allowing us to generate
            substantial returns on our investments while impacting regional economies.
          </p>
        </div>
        <div className="absolute right-0 h-full lg:w-2/3">
          <video
            autoPlay
            loop
            muted
            className="size-full object-cover object-left"
            src={MEDIA.globe}
            poster={POSTERS.purpleglobe}
          />
        </div>
      </div>
    </div>
  );
}
