import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ConditionalHeaderFooter } from '@/components/layout/ConditionalHeaderFooter';
import { OfflineBanner } from '@/components/layout/OfflineBanner';
import { ScrollToTop } from '@/components/utils/ScrollToTop';
import { DiscountPopup } from '@/components/ui/DiscountPopup';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Дентална Клиника | Град',
  description: 'Модерна дентална клиника, предлагаща експертна грижа, персонализирано лечение и комфортно изживяване за пациента. Запазете своя час днес.',
  icons: {
    icon: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="bg" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans bg-background text-slate-800 antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <LanguageProvider>
          <ScrollToTop />
          <OfflineBanner />
          <DiscountPopup />
          <ConditionalHeaderFooter>
            <main className="flex-grow">
              {children}
            </main>
          </ConditionalHeaderFooter>
        </LanguageProvider>
      </body>
    </html>
  );
}
