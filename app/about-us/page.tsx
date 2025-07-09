'use client';
import image2 from '@/assets/img/about-us/about-us-2.jpg';
import image3 from '@/assets/img/about-us/about-us-3.jpg';
import image4l from '@/assets/img/about-us/about-us-4l.jpg';
import image4r from '@/assets/img/about-us/about-us-4r.jpg';
import { Parallax } from '@/atoms';
import FooterVideoSection from '@/components/FooterVideo';
import { MEDIA } from '@/utils/constants';
import { motion } from 'motion/react';
import Image from 'next/image';
import { CSSProperties, useRef } from 'react';

const normal = { x: 0, y: 0, opacity: 1, rotate: 0, rotateY: 0 } as const;
const viewport = { amount: 0.5, once: true } as const;
const transition = { duration: 0.7 } as const;

export default function AboutUsPage() {
  const step1Ref = useRef<HTMLElement>(null);
  // const [bounds, setBounds] = useState<Record<stepsName, DOMRect>>({});
  // const { scrollY } = useScroll();
  // const step1x = useTransform(scrollY, [bounds.step1.top, bounds.step1.bottom], [200, 0], {
  //   clamp: true,
  // });
  // useLayoutEffect(() => {
  //   setBounds({
  //     step1: step1Ref.current!.getBoundingClientRect(),
  //   });
  // }, []);

  return (
    <main className="flex flex-col bg-black">
      <h1 className="sr-only">Richmind</h1>
      <div className="contents text-5xl sm:text-7xl lg:text-9xl">
        <div className="font-display relative ms-16 mt-16 grid w-min snap-end grid-cols-1 grid-rows-1 text-center text-nowrap capitalize">
          <h2 className="text-stroke opacity-75">About Us</h2>
          <div className="absolute bottom-0 left-0 origin-bottom-right -translate-x-2 scale-90">
            About Us
          </div>
        </div>
      </div>
      <section className="snap-center bg-black pt-4 md:pt-12">
        <Parallax
          baseVelocity={-0.8}
          className="font-display h-10 text-xl text-white md:h-14 md:text-3xl"
          flexClassName="gap-12"
        >
          <span>Technology </span>
          <span>Process Excellence</span>
          <span>Business Strategy</span>
          <span>Organizational Growth</span>
        </Parallax>
        <Parallax
          baseVelocity={0.8}
          className="font-display h-10 text-xl text-white md:h-14 md:text-3xl"
          flexClassName="gap-12"
        >
          <span>Strategic Oversight</span>
          <span>Strategic Leadership in Finance and Marketing</span>
          <span>Governance Principles</span>
          <span>Integrity and Compliance</span>
        </Parallax>
      </section>
      <section className="prose mpt-4 max-w-full! snap-center bg-black md:mt-12">
        {/* section 1 */}
        <div className="container mx-auto items-stretch gap-12 p-12 lg:flex">
          <motion.div
            className="flex-1"
            initial={{ x: -200, opacity: 0 }}
            whileInView={normal}
            viewport={viewport}
            transition={transition}
          >
            <video
              src={MEDIA.aboutUs}
              style={videoMask}
              autoPlay
              muted
              loop
              className="my-0! size-full rounded-xl object-cover lg:my-16"
            />
          </motion.div>
          <motion.div
            className="flex-1 text-white"
            initial={{ x: 200, opacity: 0 }}
            whileInView={normal}
            viewport={viewport}
            transition={transition}
          >
            <p className="leading-6">
              Globally active in numerous industries, RichMind Holding promotes innovation and
              success in several fields.With operations in more than thirty countries,the company
              shines in spotting and seizing investment opportunities supporting environmentally
              friendly development.
            </p>
            <p className="leading-6">
              RichMind Holding’s vision goes beyond conventional financial success to include an
              effort to influence the markets and communities it serves positively. The company’s
              method promises it stays ahead of world trends and market needs by combining a
              proactive investment strategy with excellent industry knowledge.
            </p>
          </motion.div>
        </div>
      </section>
      <section
        ref={step1Ref}
        className="prose max-w-full! snap-center bg-[#EFEDEB] text-black transition-all duration-1000"
      >
        {/* section 2 */}
        <div className="container mx-auto flex-row-reverse gap-12 px-12 lg:flex">
          <motion.div
            className="flex-1"
            initial={{ x: 200, opacity: 0 }}
            whileInView={normal}
            viewport={viewport}
            transition={transition}
          >
            <Image src={image2} alt="about-us-1" className="w-full rounded-xl" />
          </motion.div>
          <motion.div
            className="flex flex-1 flex-col justify-center"
            initial={{ x: -200, opacity: 0 }}
            whileInView={normal}
            viewport={viewport}
            transition={transition}
          >
            <p>
              RichMind Holding’s approach to expansion is motivated by creativity. The company
              invests much in research and development to lead technological and service
              innovations. RichMind Holding helps its staff members investigatefresh ideas and
              challenge the limits of feasible by fostering an innovative culture.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="prose max-w-full! snap-center bg-white text-black">
        {/* section 3 */}
        <div className="container mx-auto gap-12 px-12 lg:flex">
          <motion.div
            className="flex-1"
            initial={{ x: -200, opacity: 0 }}
            whileInView={normal}
            viewport={viewport}
            transition={transition}
          >
            <Image src={image3} alt="about-us-1" className="w-full rounded-xl" />
          </motion.div>
          <motion.div
            className="flex flex-1 flex-col justify-center"
            initial={{ x: 200, opacity: 0 }}
            whileInView={normal}
            viewport={viewport}
            transition={transition}
          >
            <p>
              The strategic goals of RichMind Holding seek to advance the company into a future of
              widened influence and bettered profitability. The targets focus on reaffirming core
              business areas while exploring new opportunities for motion.diversification and
              communication. RichMind Holding aims to double its market presence in strategic
              regions over the next five years, focusing on efficiency and environmental
              responsibility.
            </p>
            <p>
              Another primary objective is improving shareholder value through organized financial
              management and strategic acquisitions. By conforming to these goals, RichMind Holding
              aims to strengthen its market position and contribute generously to global economic
              stability and development.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="prose max-w-full! snap-center bg-[#EFEDEB] py-12">
        {/* section 4 */}
        <div className="container mx-auto items-center justify-center gap-12 lg:flex">
          <motion.div
            className="mx-12 mb-12 overflow-clip rounded-2xl text-white lg:m-0 lg:w-1/2 xl:w-1/3"
            initial={{ y: 70, opacity: 0 }}
            whileInView={normal}
            viewport={viewport}
            transition={transition}
          >
            <Image src={image4l} alt="about-us-1" className="m-0! w-full" />
            <p className="my-0! bg-black p-4 text-center">
              Corporate governance at RichMind Holding follows top standards of integrity and
              accountability. The system of governance assures that all businesspractices alignwith
              legal requirements and ethical standards, maintaining stakeholders’ interests while
              raising shareholder value. RichMind Holdingemploys an organized approach to governance
              involving precise oversight, reporting transparency, and clear lines of
              accountability. The Board of Directors,formed by experienced professionals from
              different industries, is integral in guiding and implementing the company’s strategy.
              The following belief in solid leadership confirms the company’s reliability and
              secures its position as a reliable partnerin the
              <span className="text-nowrap"> business world.</span>
            </p>
          </motion.div>
          <motion.div
            className="mx-12 overflow-clip rounded-2xl text-white lg:m-0 lg:w-1/2 xl:w-1/3"
            initial={{ y: 70, opacity: 0 }}
            whileInView={normal}
            viewport={viewport}
            transition={{ ...transition, delay: 0.1 }}
          >
            <Image src={image4r} alt="about-us-1" className="m-0! w-full" />
            <p className="my-0! bg-black p-4 text-center">
              RichMind Holding’s leadership team comprises determined innovators and expert
              visionaries. Every member drives the business toward its strategic goals by bringing a
              great variety of knowledge and a different viewpoint. RichMind Holding has positioned
              itself as a leader in multiple industriesthanks to its international finance and
              business strategy background and its president and CEO leading the team. Executives
              focused on operations, marketing, finance, and human resources support the CEO.
              RichMind Holding’s diversified leadership guarantees that it will negotiate the
              complexity of the worldwide market with agility and accuracy, preserving its
              competitive advantage and reputation as
              <span className="text-nowrap"> a market leader.</span>
            </p>
          </motion.div>
        </div>
      </section>
      <section className="relative snap-center bg-black">
        <FooterVideoSection />
      </section>
    </main>
  );
}

const videoMask: CSSProperties = {
  maskImage: 'url(/video-mask-16-9.png)',
  maskSize: '100%',
};
