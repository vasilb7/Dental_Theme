import { Metadata } from 'next';
import { AdvancedAboutSection } from '@/components/sections/AdvancedAboutSection';
import { BookingCTASection } from '@/components/sections/BookingCTASection';

export const metadata: Metadata = {
  title: 'About Us | Premium Dental Clinic',
  description: 'Learn about our history, our values, and meet our world-class team of dental specialists.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AdvancedAboutSection />
      <BookingCTASection />
    </div>
  );
}
