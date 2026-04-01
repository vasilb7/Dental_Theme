'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto', // 'auto' for instant jump, 'smooth' for smooth scroll
    });
  }, [pathname]);

  return null;
}
