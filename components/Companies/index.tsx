'use client';
import investment from '@/assets/img/companies/box1-investment.webp';
import virtualAssets from '@/assets/img/companies/box2-virtual-assets-2.webp';
import media from '@/assets/img/companies/box3-media-2.webp';
import properties from '@/assets/img/companies/box4-properties-3.webp';
import projectManager from '@/assets/img/companies/box5-project-manager-2.webp';
import development from '@/assets/img/companies/box6-development-2.webp';
import holiday from '@/assets/img/companies/box7-holiday.webp';
import cosmomed from '@/assets/img/companies/box8-cosmomed.webp';
import vipClub from '@/assets/img/companies/box9-vip-club.webp';
import sport from '@/assets/img/companies/box10-sport-3.webp';
import academy from '@/assets/img/companies/box11-academy-2.webp';
import trading from '@/assets/img/companies/box12-trading.webp';

import Image, { StaticImageData } from 'next/image';
import { Button } from '@/atoms';
import { cn } from '@/utils/jsx-tools';

export default function CompaniesSection() {
  return (
    <div className="size-full max-w-full py-4">
      <div className="size-full overflow-hidden rounded-2xl bg-black px-8 py-8 max-sm:w-full md:px-16 lg:px-24 xl:px-32">
        <div className="font-display z-10 flex flex-1 flex-col gap-5 text-lg text-white">
          <h4 className="text-4xl sm:text-6xl">Rich Mind Holding&apos;s Companies</h4>
          <p>
            The portfolio of RichMind Holding is diverse, incorporating an extensive spectrumof
            industries, and it is indicative of our drive to sustainability, innovation, and growth.
            The broader mission of RichMind Holding is to drive global influence and create lasting
            value,and each company within the group operates with a distinctive focus.The synergy of
            these entities is the basis of our strength, as each plays a vital part in establishing
            an upward trajectory for our stakeholders and the communities we support.
          </p>
        </div>
        <div className="container mx-auto mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {companies.map((c) => (
            <CompanyItem value={c} key={c.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface CompanyData {
  title: string;
  image: StaticImageData;
  imgClassName?: string;
}

interface CompanyItemProps {
  value: CompanyData;
}

function CompanyItem({ value }: CompanyItemProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border-3 border-black transition duration-700 hover:scale-105 hover:[&>img]:scale-110">
      <Image
        src={value.image}
        alt={value.title}
        className={cn('-m-px size-full object-cover transition duration-1000', value.imgClassName)}
      />
      <Button className="absolute! right-0 bottom-3 left-0 z-10 mx-auto w-1/2" variant="primary">
        {value.title}
      </Button>
    </div>
  );
}

const companies: CompanyData[] = [
  {
    title: 'investment',
    image: investment,
  },
  { image: virtualAssets, title: 'Virtual Assets' },
  { image: media, title: 'media' },
  { image: properties, title: 'properties' },
  { image: projectManager, title: 'project Manager' },
  { image: development, title: 'development' },
  { image: holiday, title: 'holiday' },
  { image: cosmomed, title: 'cosmomed' },
  { image: vipClub, title: 'vip Club' },
  { image: sport, title: 'sport' },
  { image: academy, title: 'academy', imgClassName: 'object-left' },
  { image: trading, title: 'trading' },
];
