import { Metadata } from 'next';
import { FAQSection } from '@/components/sections/FAQSection';
import { FAQHeroSection } from '@/components/sections/FAQHeroSection';
import { BookingCTASection } from '@/components/sections/BookingCTASection';

export const metadata: Metadata = {
  title: 'Често задавани въпроси | Премиум Дентална Клиника',
  description: 'Отговори на най-често задаваните въпроси от нашите пациенти.',
};

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <FAQHeroSection />
      <FAQSection />
      <BookingCTASection />
    </main>
  );
}
