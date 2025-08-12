'use client';

import { Button } from '@/atoms';
import { MEDIA, POSTERS } from '@/utils/constants';
import { cn } from '@/utils/jsx-tools';
import Lottie from 'lottie-react';
import animationData from '@/public/animates/worldmap/data.json';

import { AnimatePresence, motion, useInView } from 'motion/react';
import {
  ComponentProps,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

interface IPoint {
  label: string;
  x: number;
  y: number;
  isMain?: boolean;
  slug: keyof typeof MEDIA;
}

const points: IPoint[] = [
  { label: 'UK', x: 596, y: 245, isMain: true, slug: 'london' },
  { label: 'UAE', x: 800, y: 384, isMain: true, slug: 'dubai' },
  { label: 'zaf', x: 686, y: 599, slug: 'zaf' },
  { label: 'can', x: 215, y: 229, slug: 'canada' },
  { label: 'aus', x: 1088, y: 600, slug: 'aus' },
  { label: 'usa', x: 246, y: 311, slug: 'usa' },
  { label: 'jpn', x: 1060, y: 329, slug: 'jpn' },
  { label: 'ind', x: 877, y: 424, slug: 'india' },
  { label: 'sau', x: 767, y: 399, slug: 'saudi' },
  { label: 'chn', x: 974, y: 346, slug: 'china' },
  { label: 'try', x: 718, y: 311, slug: 'try' },
  { label: 'ita', x: 647, y: 295, slug: 'italy' },
  { label: 'spa', x: 586, y: 307, slug: 'spain' },
  { label: 'deu', x: 638, y: 253, slug: 'germany' },
  { label: 'fra', x: 613, y: 273, slug: 'frence' },
];

const mainBranches = [
  ['UK', 'london'],
  ['UAE', 'dubai'],
] as const;

export default function WorldMapSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inview = useInView(ref, { once: process.env.NODE_ENV === 'production' });
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState<(typeof mainBranches)[number][0] | undefined>();
  const [showMore, setShowMore] = useState<keyof typeof MEDIA | undefined>();

  useEffect(() => {
    function timeupdate(this: HTMLVideoElement) {
      if (this.currentTime > 8) {
        this.currentTime = 3;
      }
    }
    videoRef.current?.addEventListener('timeupdate', timeupdate);

    return () => {
      videoRef.current?.removeEventListener('timeupdate', timeupdate);
    };
  }, []);

  return (
    <div className="size-full bg-linear-(--golded-gulf) p-8" ref={ref}>
      <div className="flex size-full flex-col-reverse justify-end rounded-2xl p-8 md:flex-row">
        <Accordion
          inView={inview}
          items={mainBranches}
          value={active}
          onChange={setActive}
          onClickMore={setShowMore}
        />
        <div className="relative h-full w-full md:w-2/3">
          <Lottie
            animationData={animationData}
            className="absolute inset-0 size-full object-contain"
            loop
          />
          <svg
            className="absolute inset-0 size-full object-contain opacity-5"
            viewBox="-294 5 1880 765"
          >
            {points.map((p) => (
              <Point
                className="z-100"
                key={p.slug}
                label={p.label}
                x={p.x}
                y={p.y}
                isMain={p.isMain}
                onClick={() => setShowMore(p.slug)}
              />
            ))}
          </svg>
        </div>
      </div>
      <AnimatePresence>
        {showMore && showMore in MEDIA ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="backdrop"
              className="fixed inset-0 z-10 h-screen w-screen bg-white/10 bg-clip-padding backdrop-blur-md backdrop-filter"
              onClick={() => {
                setShowMore(undefined);
              }}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -500 }}
              transition={{ duration: 0.7 }}
              key="box"
              className="ms:p-8 xs:p-4 fixed bottom-0 left-0 z-20 m-auto p-2 max-sm:w-full"
            >
              <div className="scroll-lock" />
              <h1 className="text-lg uppercase">{showMore}</h1>
              <video
                className="h-auto w-lg max-w-full rounded-2xl"
                muted
                controls
                autoPlay
                src={MEDIA[showMore] as string}
                poster={POSTERS.blackDot}
              ></video>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

interface PointProps {
  label: string;
  x: number;
  y: number;
  isMain?: boolean;
  className?: string;
  onClick?: VoidFunction;
}

const Point = ({ x, y, className, label, onClick, isMain }: PointProps) => {
  return (
    <g onClick={onClick}>
      {isMain ? (
        <>
          <text x={x + 20} y={y - 30} className="font-display animate-pulse fill-white text-2xl">
            {label}
          </text>
          <line x1={x} x2={x + 15} y1={y} y2={y - 20} className="stroke-white" />
          <line
            x1={x + 15}
            x2={x + 15 + label.length * 20}
            y1={y - 20}
            y2={y - 20}
            className="stroke-white"
          />
        </>
      ) : null}
      <circle
        data-title={label}
        cx={x}
        cy={y}
        className={cn(
          'animate-pulse cursor-pointer',
          className,
          isMain ? 'fill-blue-500/70' : 'fill-blue-300/70',
        )}
        r={isMain ? 15 : 10}
      />
      <circle
        data-title={label}
        cx={x}
        cy={y}
        className={cn('cursor-pointer', className, isMain ? '' : 'fill-blue-300')}
        stroke="#290cfc"
        fill="url(#blue-gradient)"
        r={isMain ? 10 : 6}
      />
    </g>
  );
};

interface AccordionItemProps extends ComponentProps<'input'> {
  title: string;
  src?: string;
  delay?: number;
}

const AccordionItem = ({
  title,
  delay,
  children,
  ...props
}: PropsWithChildren<AccordionItemProps>) => {
  const id = useId();
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay }}
    >
      <label
        htmlFor={id}
        className="flex cursor-pointer items-center justify-between border-b border-white/30 p-3 text-white uppercase"
      >
        <h4>{title}</h4>
        <input
          name="accardion"
          id={id}
          type="radio"
          className="size-0 opacity-0 checked:[&~div]:rotate-180 checked:[&~div_.content-target]:h-auto checked:[&~div_.icon-target]:hidden"
          {...props}
        />
        <div className="relative size-4 transition duration-300">
          <div className="absolute inset-0 m-auto h-px w-4 bg-white/60" />
          <div className="icon-target absolute inset-0 m-auto h-4 w-px bg-white/60" />
        </div>
      </label>
      <AnimatePresence propagate>
        {props.checked ? (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="content-target h-0 overflow-hidden"
          >
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
};

interface AccordionProps<T extends readonly [string, string]> {
  inView?: boolean;
  items: readonly T[];
  value?: T[0];
  onChange?: Dispatch<SetStateAction<T[0] | undefined>>;
  onClickMore?: (s: T[1]) => unknown;
}

const Accordion = <T extends readonly [string, string]>({
  inView,
  onChange,
  value,
  items,
  onClickMore,
}: AccordionProps<T>) => {
  return inView ? (
    <div className="w-full pb-48 md:w-1/3 md:pt-48">
      {items.map(([item, more]) => (
        <AccordionItem
          key={item}
          title={item}
          delay={0.3}
          checked={value === item}
          onChange={() => onChange?.(value !== item ? item : undefined)}
        >
          <Button variant="primary" className="m-2" onClick={() => onClickMore?.(more)}>
            View More
          </Button>
        </AccordionItem>
      ))}
    </div>
  ) : null;
};
