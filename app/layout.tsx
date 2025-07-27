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
  preload: true,
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Richmind Holding',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
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
