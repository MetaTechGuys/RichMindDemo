'use client';
import investment from '@/assets/img/box1-investment.jpg';
import virtualAssets from '@/assets/img/box2-virtual assets.jpg';
import media from '@/assets/img/box3-media.jpg';
import properties from '@/assets/img/box4-properties.jpg';
import projectManager from '@/assets/img/box5-project-manager.jpg';
import development from '@/assets/img/box6-development.jpg';
import holiday from '@/assets/img/box7-holiday.jpg';
import cosmomed from '@/assets/img/box8-cosmomed.jpg';
import vipClub from '@/assets/img/box9-vip-club.jpg';
import sport from '@/assets/img/box10-sport.jpg';
import academy from '@/assets/img/box11-academy.jpg';
import trading from '@/assets/img/box12-trading.png';

import Image, { StaticImageData } from 'next/image';
import { Button } from '@/atoms';

export default function CompaniesSection() {
  return (
    <div className="size-full py-4">
      <div className="size-full overflow-hidden rounded-2xl bg-black px-8 py-8 md:px-16 lg:px-24 xl:px-32">
        <div className="font-display z-10 flex flex-1 flex-col gap-5 text-xl text-white">
          <h4 className="text-6xl">Rich Mind Holding&apos;s Companies</h4>
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
        className="-m-px size-full object-cover transition duration-1000"
      />
      <Button className="absolute! right-0 bottom-3 left-0 z-10 mx-auto w-1/2" variant="secondary">
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
  { image: academy, title: 'academy' },
  { image: trading, title: 'trading' },
];
