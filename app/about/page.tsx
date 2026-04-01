import { Metadata } from 'next';
import { AboutClinicSection } from '@/components/sections/AboutClinicSection';
import { AboutHeroSection } from '@/components/sections/AboutHeroSection';
import { MissionValuesSection } from '@/components/sections/MissionValuesSection';
import { BookingCTASection } from '@/components/sections/BookingCTASection';

export const metadata: Metadata = {
  title: 'За нас | Дентална Клиника',
  description: 'Научете повече за нашата клиника, мисия и ценности.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHeroSection />
      <AboutClinicSection />
      <MissionValuesSection />
      <BookingCTASection />
    </main>
  );
}
