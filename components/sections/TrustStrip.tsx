'use client';

import React from 'react';
import { Award, Clock, HeartPulse, Stethoscope, ThumbsUp, MessageCircle, AlertCircle, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function TrustStrip() {
  const { lang } = useLanguage();

  const features = lang === 'bg' ? [
    { icon: Stethoscope, text: 'Опитни зъболекари' },
    { icon: Award, text: 'Модерно оборудване' },
    { icon: HeartPulse, text: 'Грижа и комфорт' },
    { icon: ThumbsUp, text: 'Персонализирано лечение' },
    { icon: Clock, text: 'Бързо запазване на час' },
    { icon: MessageCircle, text: 'Безплатна консултация' },
    { icon: AlertCircle, text: 'Спешна помощ' },
    { icon: Users, text: 'Подходящо за семейства' },
  ] : [
    { icon: Stethoscope, text: 'Experienced Dentists' },
    { icon: Award, text: 'Modern Equipment' },
    { icon: HeartPulse, text: 'Comfort Focused' },
    { icon: ThumbsUp, text: 'Personalized Treatment' },
    { icon: Clock, text: 'Convenient Booking' },
    { icon: MessageCircle, text: 'Free Consultation' },
    { icon: AlertCircle, text: 'Emergency Care' },
    { icon: Users, text: 'Family Friendly' },
  ];

  return (
    <div className="bg-white py-6 md:py-8 border-y border-slate-100 shadow-sm relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-y-6 gap-x-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-3 text-center md:text-left group">
              <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-xl bg-slate-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <feature.icon className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <span className="font-semibold text-slate-800 text-[11px] md:text-xs lg:text-[13px] leading-tight">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
