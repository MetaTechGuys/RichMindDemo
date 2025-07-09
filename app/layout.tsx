import { cn } from '@/utils/jsx-tools';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const sans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Highend | Online food',
  description: 'Awesoem food in Awesome Resturant',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          sans.variable,
          `bg-black max-w-screen overflow-x-hidden`,
        )}
      >
        {children}
      </body>
    </html>
  );
}
