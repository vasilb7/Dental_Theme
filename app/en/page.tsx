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
  title: 'Dental Clinic | Home',
  description: 'Welcome to our dental clinic in Varna. We offer modern and painless treatment for your smile.',
};

export default function EnglishHomePage() {
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
