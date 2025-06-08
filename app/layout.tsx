import { cn } from '@/utils/jsx-tools';
import type { Metadata } from 'next';
import { DM_Serif_Display } from 'next/font/google';
import './core.css';
import './animates.css';
import './globals.css';

// const sans = DM_Sans({
//   variable: '--google-font-sans',
//   subsets: ['latin'],
// });
// const serif = DM_Serif_Text({
//   variable: '--google-font-serif',
//   weight: '400',
//   subsets: ['latin'],
// });
const display = DM_Serif_Display({
  variable: '--google-font-display',
  weight: '400',
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
      <head>
        <link rel="icon" type="image/png" href="/icon.png" />
      </head>
      <body
        className={cn(display.variable, `min-h-screen max-w-screen overflow-x-hidden text-white`)}
      >
        {children}
      </body>
    </html>
  );
}
