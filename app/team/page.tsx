import { Metadata } from 'next';
import { TeamHeroSection } from '@/components/sections/TeamHeroSection';
import { FullTeamSection } from '@/components/sections/FullTeamSection';
import { BookingCTASection } from '@/components/sections/BookingCTASection';

export const metadata: Metadata = {
  title: 'Екип | Премиум Дентална Клиника',
  description: 'Запознайте се с нашите опитни специалисти.',
};

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <TeamHeroSection />
      <FullTeamSection />
      <BookingCTASection />
    </main>
  );
}
