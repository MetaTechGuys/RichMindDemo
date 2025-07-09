import { PropsWithChildren } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <ResponsiveHelper />
      <Navbar />
      <main className="w-screen bg-white">{children}</main>
      <Footer />
      <div className="fixed bottom-0 -z-10 h-screen w-full bg-black"></div>
    </>
  );
}

function ResponsiveHelper() {
  return process.env.NODE_ENV === 'development' ? (
    <div className="bg-accent fixed end-0 top-0 z-50 size-8 rounded-bl-xl text-center text-sm text-white">
      <span className="p-1 sm:hidden">xs</span>
      <span className="hidden p-1 sm:block md:hidden">sm</span>
      <span className="hidden p-1 md:block lg:hidden">md</span>
      <span className="hidden p-1 lg:block xl:hidden">lg</span>
      <span className="hidden p-1 xl:block 2xl:hidden">xl</span>
      <span className="hidden p-1 2xl:block">2xl</span>
    </div>
  ) : null;
}
