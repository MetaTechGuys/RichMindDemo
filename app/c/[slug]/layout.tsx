import { PhotoProvider } from '@/components/PhotoViewer';
import WebsiteLayout from '@/layouts/WebsiteLayout';
import { PropsWithChildren } from 'react';

export default function AboutUsLayout({ children }: PropsWithChildren) {
  return (
    <WebsiteLayout secondary thirdinary>
      <PhotoProvider>{children}</PhotoProvider>
    </WebsiteLayout>
  );
}
