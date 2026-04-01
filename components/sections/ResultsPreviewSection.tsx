'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SecondaryButton } from '@/components/ui/SecondaryButton';
import { useLanguage } from '@/contexts/LanguageContext';

export function ResultsPreviewSection() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading 
            title={lang === 'bg' ? 'Реални резултати, реални усмивки' : 'Real Results, Real Smiles'}
            subtitle={lang === 'bg' ? 'Вижте разликата, която нашата експертна грижа може да направи. Гордеем се, че помагаме на нашите пациенти да постигнат здравите и красиви усмивки, които заслужават.' : 'See the difference our expert care can make. We take pride in helping our patients achieve the healthy, beautiful smiles they deserve.'}
            className="mb-0 max-w-2xl"
          />
          <Link href="/gallery" className="shrink-0">
            <SecondaryButton>{lang === 'bg' ? 'Вижте цялата галерия' : 'View Full Gallery'}</SecondaryButton>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Orthodontics */}
          <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 shadow-xl border border-white/5">
            <Image 
              src="/Hero_Real_Results_Real Smiles/904.png" 
              alt="Orthodontics result" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
              <h4 className="font-bold text-xl text-white tracking-tight">
                {lang === 'bg' ? 'Ортодонтия' : 'Orthodontics'}
              </h4>
              <p className="text-sm text-slate-300 font-medium mt-1">
                {lang === 'bg' ? 'Алайнери и брекети' : 'Aligners & Brackets'}
              </p>
            </div>
          </div>

          {/* Card 2: Veneers */}
          <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 shadow-xl border border-white/5">
            <Image 
              src="/Hero_Real_Results_Real Smiles/2.jpg" 
              alt="Veneers result" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
              <h4 className="font-bold text-xl text-white tracking-tight">
                {lang === 'bg' ? 'Естетична промяна' : 'Smile Makeover'}
              </h4>
              <p className="text-sm text-slate-300 font-medium mt-1">
                {lang === 'bg' ? 'Порцеланови фасети' : 'Porcelain Veneers'}
              </p>
            </div>
          </div>

          {/* Card 3: Implants */}
          <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 shadow-xl border border-white/5">
            <Image 
              src="/Hero_Real_Results_Real Smiles/Emergency Dentist in London.jpg" 
              alt="Implant result" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
              <h4 className="font-bold text-xl text-white tracking-tight">
                {lang === 'bg' ? 'Зъбни импланти' : 'Dental Implants'}
              </h4>
              <p className="text-sm text-slate-300 font-medium mt-1">
                {lang === 'bg' ? 'Дълготрайни решения' : 'Long-term Solutions'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
