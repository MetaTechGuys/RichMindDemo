import WebsiteLayout from '@/layouts/WebsiteLayout';
import { PropsWithChildren } from 'react';

export default function HomeLayout({ children }: Readonly<PropsWithChildren>) {
  return <WebsiteLayout>{children}</WebsiteLayout>;
}
