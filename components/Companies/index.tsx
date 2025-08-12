'use client';
import { companies, CompanyData } from '@/data';
import { cn } from '@/utils/jsx-tools';
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function CompaniesSection() {
  return (
    <div className="size-full max-w-full py-4">
      <div className="size-full overflow-hidden rounded-2xl px-8 py-8 max-sm:w-full md:px-16 lg:px-24 xl:px-32">
        <div className="z-10 flex flex-1 flex-col gap-5 text-sm sm:text-base">
          <h4 className="font-display xs:text-2xl max-xs:text-center mb-5 bg-linear-(--golded-gradient-2) bg-clip-text text-xl font-bold text-transparent sm:text-4xl">
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
            <Link key={c.slug} href={`/c/${c.slug}`} className="contents">
              <CompanyItem key={c.slug} value={c} />
            </Link>
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
  const content = (
    <>
      <div className="font-display bg-linear-(--golded-gradient) bg-clip-text text-center text-4xl font-bold text-transparent">
        {value.title}
      </div>
    </>
  );
  return (
    <div className="relative cursor-pointer overflow-hidden rounded-3xl border-3 border-white transition-transform duration-700 will-change-transform perspective-dramatic hover:scale-105 hover:[&>img]:translate-z-2">
      <Image
        src={value.image}
        alt={value.title}
        className={cn(
          '-m-px size-full object-cover transition-transform duration-1000 will-change-transform',
          value.imgClassName,
        )}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 'all' }}
        transition={{ duration: 0.7 }}
        className="absolute inset-0 flex items-center justify-center rounded-3xl bg-black/60 p-8 pointer-fine:hidden"
      >
        {content}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="absolute inset-0 flex items-center justify-center rounded-3xl bg-black/60 p-8 pointer-coarse:hidden"
      >
        {content}
      </motion.div>
    </div>
  );
}
