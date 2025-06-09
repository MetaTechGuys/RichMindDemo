import WebsiteLayout from '@/layouts/WebsiteLayout';
import { PropsWithChildren } from 'react';

export default function AboutUsLayout({ children }: PropsWithChildren) {
  return <WebsiteLayout secondary>{children}</WebsiteLayout>;
}
