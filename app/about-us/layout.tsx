import Navbar from '@/layouts/components/Navbar';
import WebsiteLayout from '@/layouts/WebsiteLayout';
import { PropsWithChildren } from 'react';

export default function AboutUsLayout({ children }: PropsWithChildren) {
  return (
    <WebsiteLayout secondary>
      <Navbar
        secondary
        className="font-display text-gold-light z-2 grid grid-cols-3 gap-2 font-bold sm:gap-4 sm:text-2xl md:gap-8"
      />
      {children}
    </WebsiteLayout>
  );
}
