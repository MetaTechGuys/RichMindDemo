// import Navbar from '@/layouts/components/Navbar';
import WebsiteLayout from '@/layouts/WebsiteLayout';
import { PropsWithChildren } from 'react';

export default function HomeLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <WebsiteLayout>
      {/* <Navbar fluid /> */}
      {children}
    </WebsiteLayout>
  );
}
