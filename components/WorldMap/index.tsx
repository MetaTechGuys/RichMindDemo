'use client';

import { Button } from '@/atoms';
import { MEDIA, POSTERS } from '@/utils/constants';
import { cn } from '@/utils/jsx-tools';
import { AnimatePresence, motion, useInView } from 'motion/react';
import {
  ComponentProps,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useId,
  useRef,
  useState,
} from 'react';

const mainBranches = [
  ['UK', 'london'],
  ['UAE', 'dubai'],
] as const;

export default function WorldMapSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inview = useInView(ref, { once: process.env.NODE_ENV === 'production' });
  const videoRef = useRef<HTMLVideoElement>(null);
  const [step, setStep] = useState(0);
  const [active, setActive] = useState<(typeof mainBranches)[number][0] | undefined>();
  const [showMore, setShowMore] = useState<keyof typeof MEDIA | undefined>();
  return (
    <div className="size-full py-4" ref={ref}>
      <div className="flex size-full flex-col-reverse justify-end rounded-2xl bg-black p-8 md:flex-row">
        <Accordion
          inView={inview}
          items={mainBranches}
          value={active}
          onChange={setActive}
          onClickMore={setShowMore}
        />
        <div className="relative h-full w-full brightness-125 md:w-2/3 md:brightness-100">
          <video
            autoPlay
            muted
            className="size-full object-contain object-right"
            src={MEDIA.mapPart1}
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
            src={MEDIA.mapPart2}
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
            <Point label="UK" x={596} y={245} isMain onClick={() => setShowMore('london')} />
            <Point label="UAE" x={800} y={384} isMain onClick={() => setShowMore('dubai')} />
            <Point label="zaf" x={686} y={599} onClick={() => setShowMore('dubai')} />
            <Point label="can" x={215} y={229} onClick={() => setShowMore('canada')} />
            <Point label="aus" x={1088} y={600} onClick={() => setShowMore('aus')} />
            <Point label="usa" x={246} y={311} onClick={() => setShowMore('usa')} />
            <Point label="jpn" x={1060} y={329} onClick={() => setShowMore('jpn')} />
            <Point label="ind" x={877} y={424} onClick={() => setShowMore('india')} />
            <Point label="sau" x={767} y={399} onClick={() => setShowMore('saudi')} />
            <Point label="chn" x={974} y={346} onClick={() => setShowMore('china')} />
            <Point label="try" x={718} y={311} onClick={() => setShowMore('try')} />
            <Point label="ita" x={647} y={295} onClick={() => setShowMore('italy')} />
            <Point label="spa" x={586} y={307} onClick={() => setShowMore('spain')} />
            <Point label="deu" x={638} y={253} onClick={() => setShowMore('germany')} />
            <Point label="fra" x={613} y={273} onClick={() => setShowMore('frence')} />
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
              className="fixed bottom-0 left-0 z-20 m-auto p-8"
            >
              <h1 className="text-lg">{showMore}</h1>
              <video
                className="h-auto min-w-lg rounded-2xl"
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
          <text
            x={x + 20}
            y={y - 30}
            className="font-display fill-gold-light animate-pulse text-2xl"
          >
            {label}
          </text>
          <line x1={x} x2={x + 15} y1={y} y2={y - 20} className="stroke-gold-dark" />
          <line
            x1={x + 15}
            x2={x + 15 + label.length * 20}
            y1={y - 20}
            y2={y - 20}
            className="stroke-gold-dark"
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
          isMain ? 'fill-gold-light/70' : 'fill-white/70',
        )}
        r={isMain ? 15 : 8}
      />
      <circle
        data-title={label}
        cx={x}
        cy={y}
        className={cn('cursor-pointer', className, isMain ? '' : 'fill-white')}
        stroke="#886a38"
        fill="url(#gold-gradient)"
        r={isMain ? 8 : 4}
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
        className="text-gold-light border-gold-dark/30 flex items-center justify-between border-b p-3 uppercase"
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
          <div className="bg-gold-dark/60 absolute inset-0 m-auto h-px w-4" />
          <div className="bg-gold-dark/60 icon-target absolute inset-0 m-auto h-4 w-px" />
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
          delay={1.3}
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
