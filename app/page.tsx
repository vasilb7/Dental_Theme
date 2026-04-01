import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { ResultsPreviewSection } from '@/components/sections/ResultsPreviewSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { DoctorsPreviewSection } from '@/components/sections/DoctorsPreviewSection';
import { BookingCTASection } from '@/components/sections/BookingCTASection';

export const metadata: Metadata = {
  title: 'Дентална Клиника | Начало',
  description: 'Добре дошли в нашата дентална клиника в София. Ние предлагаме модерно и безболезнено лечение за вашата усмивка.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustStrip />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUsSection />
      <ResultsPreviewSection />
      <TestimonialsSection />
      <DoctorsPreviewSection />
      <BookingCTASection />
    </div>
  );
}
