import { cn } from '@/utils/jsx-tools';
import type { Metadata } from 'next';
import { Playfair_Display, Manrope } from 'next/font/google';
import './core.css';
import './animates.css';
import './globals.css';

const serif = Playfair_Display({
  variable: '--google-font-serif',
  weight: ['400', '700'],
  subsets: ['latin'],
  preload: true,
  display: 'swap',
  fallback: ['Times New Roman', 'Times', 'serif'],
});

const sans = Manrope({
  variable: '--google-font-sans',
  weight: ['400', '700'],
  subsets: ['latin'],
  preload: true,
  display: 'swap',
  fallback: ['Arial', 'Helvetica', 'Tahoma', 'Roboto'],
});

export const metadata: Metadata = {
  title: 'RICHMIND Holding',
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
        className={cn(
          serif.variable,
          sans.variable,
          `min-h-screen max-w-screen overflow-x-hidden text-white`,
        )}
      >
        {children}
      </body>
    </html>
  );
}
