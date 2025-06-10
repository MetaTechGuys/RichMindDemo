'use client';

import { useEffect } from 'react';

interface ScrollTopProps {
  auto?: true;
}
export default function ScrollTop({ auto }: ScrollTopProps) {
  useEffect(() => {
    if (auto) {
      window.scrollTo(0, 0);
    }
  }, []);
  return null;
}
