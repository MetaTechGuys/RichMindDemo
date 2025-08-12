'use client';
import { Button } from '@/atoms';
import { companies, CompanyData } from '@/data';
import { cn } from '@/utils/jsx-tools';
import Image from 'next/image';

export default function CompaniesSection() {
  return (
    <div className="size-full max-w-full py-4">
      <div className="size-full overflow-hidden rounded-2xl px-8 py-8 max-sm:w-full md:px-16 lg:px-24 xl:px-32">
        <div className="z-10 flex flex-1 flex-col gap-5 text-lg">
          <h4 className="font-display xs:text-4xl mb-5 text-2xl sm:text-6xl">
            RICHMIND Holding&apos;s Companies
          </h4>
          <p className="md:text-xl 2xl:text-2xl">
            The portfolio of RICHMIND Holding is diverse, incorporating an extensive spectrumof
            industries, and it is indicative of our drive to sustainability, innovation, and growth.
            The broader mission of RICHMIND Holding is to drive global influence and create lasting
            value,and each company within the group operates with a distinctive focus.The synergy of
            these entities is the basis of our strength, as each plays a vital part in establishing
            an upward trajectory for our stakeholders and the communities we support.
          </p>
        </div>
        <div className="container mx-auto mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {companies.map((c) => (
            <CompanyItem key={c.slug} value={c} />
            // <Link key={c.slug} href={`/c/${c.slug}`} className="contents">
            // </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

interface CompanyItemProps {
  value: CompanyData;
}

function CompanyItem({ value }: CompanyItemProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border-3 border-white transition-transform duration-700 will-change-transform perspective-dramatic hover:scale-105 hover:[&>img]:translate-z-2">
      <Image
        src={value.image}
        alt={value.title}
        className={cn(
          '-m-px size-full object-cover transition-transform duration-1000 will-change-transform',
          value.imgClassName,
        )}
      />
      <Button
        className="absolute! right-0 bottom-3 left-0 z-10 mx-auto max-w-min min-w-1/2"
        variant="glass"
        innerClassName="text-center!"
      >
        {value.title}
      </Button>
    </div>
  );
}
