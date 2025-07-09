'use client';

import { cn } from '@/utils/jsx-tools';
import { ComponentProps, useId, useRef, useState } from 'react';

export default function WorldMapSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [step, setStep] = useState(0);
  return (
    <div className="size-full py-4">
      <div className="flex size-full flex-col-reverse justify-end rounded-2xl bg-black p-8 md:flex-row">
        <div className="w-full pb-48 md:w-1/3 md:pt-48">
          <AccordionItem title="UK" />
          <AccordionItem title="UAE" />
        </div>
        <div className="relative h-full w-full md:w-2/3">
          <video
            autoPlay
            muted
            className="size-full object-contain object-right"
            src="/video/Part1.webm"
            onEnded={() => {
              setStep(1);
              videoRef.current?.play();
            }}
          />
          <video
            ref={videoRef}
            muted
            loop
            autoPlay={step === 1}
            className={cn('absolute inset-0 size-full object-contain object-right', {
              'opacity-0': step === 0,
            })}
            src="/video/Part2.webm"
          />
          <svg className="absolute inset-0 size-full object-cover" viewBox="0 0 1280 765">
            <defs>
              <linearGradient id="gold-gradient" x1="1" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#886a38" />
                <stop offset="33%" stopColor="#9b7c45" />
                <stop offset="67%" stopColor="#c5a86e" />
                <stop offset="100%" stopColor="#795b34" />
              </linearGradient>
            </defs>
            <Point iso3="gbr" cx={597} cy={244} main />
            <Point iso3="uae" cx={800} cy={384} main />
            <Point iso3="zaf" cx={686} cy={599} />
            <Point iso3="can" cx={215} cy={229} />
            <Point iso3="aus" cx={1088} cy={600} />
            <Point iso3="usa" cx={246} cy={311} />
            <Point iso3="jpn" cx={1060} cy={329} />
            <Point iso3="ind" cx={877} cy={424} />
            <Point iso3="sau" cx={767} cy={399} />
            <Point iso3="chn" cx={974} cy={346} />
            <Point iso3="try" cx={718} cy={311} />
            <Point iso3="ita" cx={647} cy={295} />
            <Point iso3="spa" cx={586} cy={307} />
            <Point iso3="deu" cx={638} cy={253} />
            <Point iso3="fra" cx={613} cy={273} />
          </svg>
        </div>
      </div>
    </div>
  );
}

interface PointProps extends Pick<ComponentProps<'circle'>, 'cx' | 'cy' | 'className'> {
  iso3: string;
  main?: boolean;
}

const Point = ({ cx, cy, className, iso3, main }: PointProps) => {
  return (
    <g>
      <circle
        data-title={iso3}
        cx={cx}
        cy={cy}
        className={cn(
          'animate-pulse cursor-pointer',
          className,
          main ? 'fill-gold-light/70' : 'fill-white/70',
        )}
        r={main ? 15 : 8}
      />
      <circle
        data-title={iso3}
        cx={cx}
        cy={cy}
        className={cn('cursor-pointer', className, main ? '' : 'fill-white')}
        stroke="#886a38"
        fill="url(#gold-gradient)"
        r={main ? 8 : 4}
      />
    </g>
  );
};

interface AccordionItemProps {
  title: string;
  src?: string;
}

const AccordionItem = ({ title }: AccordionItemProps) => {
  const id = useId();
  return (
    <div>
      <label
        htmlFor={id}
        className="text-gold-light border-gold-dark/30 flex items-center justify-between border-b p-3 uppercase"
      >
        <h4>{title}</h4>
        <input
          name="accardion"
          id={id}
          type="radio"
          value={1}
          className="size-0 opacity-0 checked:[&~div]:rotate-180"
        />
        <div className="border-gold-dark/60 h-px w-4 border-b transition duration-300" />
      </label>
    </div>
  );
};
