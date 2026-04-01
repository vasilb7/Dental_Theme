'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShieldCheck } from 'lucide-react';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { SecondaryButton } from '@/components/ui/SecondaryButton';
import { useLanguage } from '@/contexts/LanguageContext';

export function HeroSection() {
  const { lang } = useLanguage();
  
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900 pt-32 pb-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Hero.png" 
          alt="Modern dental clinic" 
          fill 
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            {lang === 'bg' ? 'Доверена дентална грижа за вашата здрава усмивка' : 'Trusted Dental Care for Your Healthy Smile'}
          </h1>
          <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-xl">
            {lang === 'bg' 
              ? 'Изживейте модерна, безболезнена стоматология в спокойна и приветлива среда. Нашият експертен екип е посветен на вашето здраве.'
              : 'Experience modern, pain-free dentistry in a calm and welcoming environment. Our expert team is dedicated to your health.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 mb-12">
            <Link href={lang === 'bg' ? "/zapazi-chas" : "/book-appointment"}>
              <PrimaryButton className="text-lg px-10 py-5 w-full sm:w-auto shadow-2xl shadow-primary/20">
                {lang === 'bg' ? 'Запази час' : 'Book Appointment'}
              </PrimaryButton>
            </Link>
            <Link href={lang === 'bg' ? "/uslugi" : "/services"}>
              <button className="text-lg px-10 py-5 w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all backdrop-blur-md">
                {lang === 'bg' ? 'Вижте нашите услуги' : 'View Our Services'}
              </button>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {[
                '/review_temple/482890.jpeg',
                '/review_temple/93804.jpeg',
                '/review_temple/89478.jpeg',
                '/review_temple/client_file.jpg',
                '/review_temple/Make_me_drinking_202603220841.jpeg'
              ].map((img, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-800 overflow-hidden relative">
                  <Image 
                    src={img} 
                    alt="Patient" 
                    fill 
                    className="object-cover" 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <span className="font-bold text-white tracking-wide">{lang === 'bg' ? '500+ Доволни пациенти' : '500+ Happy Patients'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Image positioned at the bottom right */}
      <div className="hidden lg:block absolute bottom-0 right-0 w-1/2 h-[80%] lg:h-[90%] xl:h-full z-20 pointer-events-none">
        <Image 
          src="/Hero_desktop.png" 
          alt={lang === 'bg' ? 'Професионална дентална грижа' : 'Professional Dental Care'}
          fill 
          className="object-contain object-right-bottom"
          priority
        />
      </div>
    </section>
  );
}
