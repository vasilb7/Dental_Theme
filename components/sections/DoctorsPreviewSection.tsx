'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { AIBadge } from '@/components/ui/AIBadge';

export function DoctorsPreviewSection() {
  const { lang } = useLanguage();

  const doctors = lang === 'bg' ? [
    {
      name: 'Диана Стефанова',
      role: 'CEO & Основател',
      description: 'Визионер и лидер, отдаден на създаването на нов стандарт в денталната грижа.',
      image: '/VBMODELS_AI/Team_temple/Ceo_Diana_Stefanova.jpeg',
      isCEO: true
    },
    {
      name: 'Натали Кънева',
      role: 'Естетичен специалист',
      description: 'Експерт в преобразяването на усмивки с прецизност и усет към детайла.',
      image: '/VBMODELS_AI/Team_temple/Natali_Qneva.jpeg'
    },
    {
      name: 'Жасмин Добрева',
      role: 'Дентален лекар',
      description: 'Специалист с нежен подход, вярващ в доверието и спокойната атмосфера.',
      image: '/VBMODELS_AI/Team_temple/Jasmin_Dobreva.jpeg'
    }
  ] : [
    {
      name: 'Diana Stefanova',
      role: 'CEO & Founder',
      description: 'Visionary and leader, dedicated to creating a new standard in dental care.',
      image: '/VBMODELS_AI/Team_temple/Ceo_Diana_Stefanova.jpeg',
      isCEO: true
    },
    {
      name: 'Natali Qneva',
      role: 'Aesthetic Specialist',
      description: 'Expert in smile transformations with precision and attention to detail.',
      image: '/VBMODELS_AI/Team_temple/Natali_Qneva.jpeg'
    },
    {
      name: 'Jasmin Dobreva',
      role: 'Dentist',
      description: 'Specialist with a gentle approach, believing in trust and a calm atmosphere.',
      image: '/VBMODELS_AI/Team_temple/Jasmin_Dobreva.jpeg'
    }
  ];

  return (
    <section id="team" className="pt-20 pb-4 lg:pt-28 lg:pb-14 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title={lang === 'bg' ? 'Запознайте се с нашите специалисти' : 'Meet Our Specialists'}
          subtitle={lang === 'bg' ? 'Нашият екип от висококвалифицирани дентални специалисти се е посветил на това да ви осигури най-високия стандарт на грижа.' : 'Our team of highly skilled dental professionals is dedicated to providing you with the highest standard of care.'}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-12">
          {doctors.map((doctor, index) => (
            <div key={index} className="group text-center">
              <div className={`relative w-72 h-72 mx-auto mb-6 rounded-full shadow-md ${doctor.isCEO ? 'ring-4 ring-primary ring-offset-4' : 'bg-slate-100'}`}>
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image 
                    src={doctor.image} 
                    alt={doctor.name} 
                    fill 
                    className="object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <AIBadge position="bottom-right" className="bottom-4 right-4" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">{doctor.name}</h3>
              <p className="text-secondary font-medium mb-4">{doctor.role}</p>
              <p className="text-slate-600 text-sm max-w-xs mx-auto">
                {doctor.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Link href={lang === 'bg' ? "/ekip" : "/en/team"}>
            <PrimaryButton>{lang === 'bg' ? 'Вижте целия екип' : 'View Full Team'}</PrimaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
}

