'use client';
import Lottie from 'lottie-react';
import animationData from '@/public/animates/worldmap/data.json';

export default function CompanyPage() {
  return (
    <main className="relative min-h-screen bg-white bg-linear-(--midnight-blue) p-16">
      <Lottie animationData={animationData} loop />
    </main>
  );
}
