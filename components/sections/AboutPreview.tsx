'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { AIBadge } from '@/components/ui/AIBadge';

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
                  src="/VBMODELS_AI/together.png" 
                  alt="Modern dental clinic" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <AIBadge position="bottom-left" className="bottom-4 left-4" />
              </div>
              
              {/* Floating element replaced with custom button */}
              <div className="absolute -bottom-6 -right-6 z-20">
                <button 
                  className="experience-button"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'Dental Clinic',
                        url: window.location.href
                      }).catch(() => {});
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert(lang === 'bg' ? 'Линка е копиран!' : 'Link copied!');
                    }
                  }}
                >
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="experience-icon">
                    <path
                      d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
                    ></path>
                  </svg>
                  <span className="text-xl font-black">
                    {lang === 'bg' ? 'Сподели' : 'Share'}
                  </span>
                </button>
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
