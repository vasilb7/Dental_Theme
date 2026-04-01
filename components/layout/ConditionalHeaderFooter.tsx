'use client';

import { usePathname } from 'next/navigation';
import { Header } from './Header';
import { Footer } from './Footer';

export function ConditionalHeaderFooter({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Define routes where header should be hidden
  const hideHeader = pathname === '/auth' || pathname?.startsWith('/auth/');

  return (
    <>
      {!hideHeader && <Header />}
      {children}
      <Footer />
    </>
  );
}
