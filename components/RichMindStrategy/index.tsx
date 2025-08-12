'use client';

import { cn } from '@/utils/jsx-tools';
import Image, { StaticImageData } from 'next/image';
import { PropsWithChildren } from 'react';
import innovation from '@/assets/svg/innovation.svg';
import collaboration from '@/assets/svg/collaboration.svg';
import sustainability from '@/assets/svg/sustainability.svg';
import enter from '@/assets/svg/enter.svg';

export default function RichMindStrategySection() {
  return (
    <div className="size-full py-4">
      <div className="2xs:px-8 py-20xs:px-12 flex size-full flex-col justify-center overflow-hidden p-4 py-20 sm:rounded-2xl md:px-16">
        <div className="font-display z-10 flex flex-col gap-5 text-xl">
          <h4 className="xs:text-5xl sm:text-6x text-3xl">
            The Three Pillars of RichMind Strategy
          </h4>
        </div>
        <div className="mt-15 flex w-full flex-col gap-20 lg:mt-15 xl:flex-row xl:gap-8 2xl:justify-around [&>div]:w-full">
          <Card icon={innovation} title="Innovation">
            <p className="xl:min-h-16 xl:text-xl 2xl:text-2xl">
              Leading the charge in developing new technologies and methodologies
            </p>
            <p className="xl:min-h-16 xl:text-xl 2xl:text-2xl">
              We empower our teams to deliver high quality results with the most advanced resources
              available.
            </p>
            <ul className="custom-checklist leading-10 xl:text-xl 2xl:text-2xl">
              <li>Advancing with future tech.</li>
              <li>Utilizing cutting-edge tools.</li>
              <li>Progress through constant improvement.</li>
              <li>Crafting a creative legacy.</li>
            </ul>
          </Card>
          <Card icon={collaboration} title="Collaboration">
            <p className="xl:min-h-16 xl:text-xl 2xl:text-2xl">
              Real collaboration results in a stronger, more cohesive organization
            </p>
            <p className="xl:min-h-16 xl:text-xl 2xl:text-2xl">
              Collaboration is vital for achieving long lasting achievements. We value individual
              contributions.
            </p>
            <ul className="custom-checklist leading-10 xl:text-xl 2xl:text-2xl">
              <li>Succeeding together.</li>
              <li>Building strong partnerships.</li>
              <li>Joint efforts yield results.</li>
              <li>Empowering team excellence</li>
            </ul>
          </Card>
          <Card icon={sustainability} title="Sustainability">
            <p className="xl:min-h-16 xl:text-xl 2xl:text-2xl">
              We belive that long-termsuccess is rooted in sustainable practices
            </p>
            <p className="xl:min-h-16 xl:text-xl 2xl:text-2xl">
              Every project at RICHMIND is approached with a focus on eco-friendly practices and
              sustainability.
            </p>
            <ul className="custom-checklist leading-10 xl:text-xl 2xl:text-2xl">
              <li>Devoted to the environment.</li>
              <li>Building strong partnerships.</li>
              <li>Investing in a green future.</li>
              <li>Promoting eco-friendly practices</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}

interface Props {
  title: string;
  className?: string;
  icon?: StaticImageData;
}

function Card({ title, children, className, icon }: PropsWithChildren<Props>) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5 border-s-3 border-t-3 border-[#1949a7] bg-white p-8 shadow-2xl',
        className,
      )}
    >
      <div className="flex justify-center">
        <Image src={icon ?? innovation} alt={title} />
      </div>
      <h5 className="font-display xs:text-3xl text-center text-2xl sm:text-4xl">{title}</h5>
      {children}
      <div className="mt-auto flex cursor-pointer justify-center">
        <Image src={enter} alt={title} />
      </div>
    </div>
  );
}
