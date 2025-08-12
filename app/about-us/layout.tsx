import Navbar from '@/layouts/components/Navbar';
import WebsiteLayout from '@/layouts/WebsiteLayout';
import { PropsWithChildren } from 'react';

export default function AboutUsLayout({ children }: PropsWithChildren) {
  return (
    <WebsiteLayout secondary>
      <Navbar />
      {children}
    </WebsiteLayout>
  );
}
