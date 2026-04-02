import { Metadata } from 'next';
import { ServicesHeroSection } from '@/components/sections/ServicesHeroSection';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ServicesProcessSection } from '@/components/sections/ServicesProcessSection';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { BookingCTASection } from '@/components/sections/BookingCTASection';

export const metadata: Metadata = {
  title: 'Услуги | Премиум Дентална Клиника',
  description: 'Разгледайте пълния набор от дентални услуги, които предлагаме.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ServicesHeroSection />
      <ServicesGrid />
      <TechnologySection />
      <ServicesProcessSection />
      <BookingCTASection />
    </div>
  );
}
