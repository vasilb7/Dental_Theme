import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BookingCTASection } from '@/components/sections/BookingCTASection';

const servicesData: Record<string, { name: string; desc: string }> = {
  'teeth-whitening': { name: 'Избелване на зъби', desc: 'Професионално избелване за блестяща усмивка.' },
  'implants': { name: 'Зъбни импланти', desc: 'Дълготрайно решение за липсващи зъби.' },
  'orthodontics': { name: 'Ортодонтия', desc: 'Изправяне на зъбите с брекети или алайнери.' },
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];
  
  if (!service) {
    return { title: 'Услугата не е намерена' };
  }

  return {
    title: `${service.name} | Премиум Дентална Клиника`,
    description: service.desc,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-primary mb-6">{service.name}</h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          {service.desc}
        </p>
      </div>
      <BookingCTASection />
    </>
  );
}
