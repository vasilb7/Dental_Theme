'use client';

import React from 'react';
import Link from 'next/link';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Phone, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function BookingCTASection() {
  const { lang } = useLanguage();

  return (
    <section className="pt-4 pb-20 lg:pt-14 lg:pb-24 bg-white">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-3xl p-5 sm:p-8 md:p-16 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {lang === 'bg' ? 'Готови ли сте да подобрите усмивката си?' : 'Ready to Improve Your Smile?'}
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              {lang === 'bg' 
                ? 'Насрочете своята консултация днес и направете първата стъпка към оптимално орално здраве в комфортна и професионална среда.'
                : 'Schedule your consultation today and take the first step towards optimal oral health in a comfortable, professional environment.'}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={lang === 'bg' ? "/zapazi-chas" : "/book-appointment"} className="w-full sm:w-auto">
                <PrimaryButton className="bg-white text-primary hover:bg-slate-100 w-full text-sm md:text-base px-6 md:px-8 py-3.5 md:py-4">
                  <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  {lang === 'bg' ? 'Запази час онлайн' : 'Book Online'}
                </PrimaryButton>
              </Link>
              <span className="text-white/60 text-sm font-medium hidden sm:block">{lang === 'bg' ? 'или' : 'or'}</span>
              <a 
                href="tel:+359877737772" 
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-transparent px-4 xs:px-6 py-3.5 text-xs xs:text-sm font-semibold text-white transition-colors hover:bg-white/10 w-full sm:w-auto whitespace-nowrap"
              >
                <Phone className="mr-2 h-4 w-4" />
                {lang === 'bg' ? 'Обадете се на +359 87 773 7772' : 'Call +359 87 773 7772'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
