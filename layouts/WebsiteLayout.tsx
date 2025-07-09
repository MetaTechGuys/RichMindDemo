import { PropsWithChildren } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Copyright from './components/Copyright';
import Cursor from '@/atoms/Cursor';

export default function WebsiteLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Cursor />
      <header className="contents">
        <ResponsiveHelper />
        <Navbar />
      </header>
      {children}
      <footer className="snap-end">
        <Footer />
        <video
          src="/video/0505.webm"
          className="fixed inset-0 -z-[1] h-screen w-screen object-cover"
          autoPlay
          loop
          muted
        ></video>
        <Copyright />
      </footer>
    </>
  );
}

function ResponsiveHelper() {
  return process.env.NODE_ENV === 'development' ? (
    <div className="fixed end-0 top-0 z-50 size-8 rounded-bl-xl bg-rose-400 text-center text-sm text-white">
      <span className="p-1 sm:hidden">xs</span>
      <span className="hidden p-1 sm:block md:hidden">sm</span>
      <span className="hidden p-1 md:block lg:hidden">md</span>
      <span className="hidden p-1 lg:block xl:hidden">lg</span>
      <span className="hidden p-1 xl:block 2xl:hidden">xl</span>
      <span className="hidden p-1 2xl:block">2xl</span>
    </div>
  ) : null;
}
