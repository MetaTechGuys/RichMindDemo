import { PropsWithChildren } from 'react';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import { MEDIA } from '@/utils/constants';
import { cn } from '@/utils/jsx-tools';

interface LayoutProps {
  secondary?: boolean;
  thirdinary?: boolean;
}

export default function WebsiteLayout({
  children,
  secondary,
  thirdinary,
}: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <header className="contents">
        <ResponsiveHelper />
      </header>
      {children}
      {!thirdinary ? (
        <video
          src={MEDIA.blackBackground}
          muted
          autoPlay
          loop
          className="fixed inset-0 -z-1 h-screen w-screen object-cover mix-blend-difference hue-rotate-165"
        />
      ) : null}
      <footer className={cn('relative snap-end', { 'bg-white': !thirdinary })}>
        <Footer secondary={secondary} />
        <Copyright />
      </footer>
    </>
  );
}

function ResponsiveHelper() {
  return process.env.NODE_ENV === 'development' ? (
    <div className="fixed end-0 top-0 z-50 size-8 rounded-bl-xl bg-rose-400 text-center text-sm text-white">
      <span className="2xs:hidden p-1">base</span>
      <span className="2xs:block xs:hidden hidden p-1">xxs</span>
      <span className="xs:block hidden p-1 sm:hidden">xs</span>
      <span className="hidden p-1 sm:block md:hidden">sm</span>
      <span className="hidden p-1 md:block lg:hidden">md</span>
      <span className="hidden p-1 lg:block xl:hidden">lg</span>
      <span className="hidden p-1 xl:block 2xl:hidden">xl</span>
      <span className="hidden p-1 2xl:block">2xl</span>
    </div>
  ) : null;
}
