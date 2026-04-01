import { Metadata } from 'next';
import { GalleryHeroSection } from '@/components/sections/GalleryHeroSection';
import { FullGallerySection } from '@/components/sections/FullGallerySection';
import { BookingCTASection } from '@/components/sections/BookingCTASection';

export const metadata: Metadata = {
  title: 'Галерия | Премиум Дентална Клиника',
  description: 'Разгледайте резултатите от нашите лечения.',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <GalleryHeroSection />
      <FullGallerySection />
      <BookingCTASection />
    </main>
  );
}
