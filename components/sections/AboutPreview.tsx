'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function AboutPreview() {
  const { lang } = useLanguage();

  const strengths = lang === 'bg' ? [
    'Над 15 години опит',
    'Модерни технологии',
    'Безболезнено лечение'
  ] : [
    'Over 15 years of experience',
    'Modern technology',
    'Painless treatment'
  ];

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/together.png" 
                  alt="Modern dental clinic" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-44 md:h-44 bg-primary/95 backdrop-blur-md rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 text-white flex flex-col justify-end shadow-2xl border border-white/20 z-20">
                <div className="text-3xl md:text-5xl font-black mb-1 md:mb-2 tracking-tighter">15+</div>
                <div className="text-[9px] md:text-xs font-bold opacity-90 uppercase tracking-[0.15em] leading-tight">
                  {lang === 'bg' ? <>Години<br />опит</> : <>Years of<br />Experience</>}
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7">
            <div>
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-slate-100 text-slate-500 rounded-full">
                {lang === 'bg' ? 'За нас' : 'About Us'}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-[1.1]">
                {lang === 'bg' ? (
                  <>Традиция в грижата, <br /><span className="text-primary italic font-serif">иновация</span> в лечението</>
                ) : (
                  <>Tradition in care, <br /><span className="text-primary italic font-serif">innovation</span> in treatment</>
                )}
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-xl mb-10">
                <p>
                  {lang === 'bg' 
                    ? 'Основана с визията да промени представите за дентално лечение, нашата клиника съчетава десетилетия опит с най-новите постижения в дигиталната стоматология.'
                    : 'Founded with the vision to change the perception of dental treatment, our clinic combines decades of experience with the latest advancements in digital dentistry.'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {strengths.map((strength, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm font-semibold text-slate-800">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link 
                href={lang === 'bg' ? "/za-nas" : "/about"}
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-accent hover:text-primary transition-all group"
              >
                {lang === 'bg' ? 'Научете повече за нас' : 'Learn more about us'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
