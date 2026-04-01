'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Zap, Users, Coffee, CalendarCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function WhyChooseUsSection() {
  const { lang } = useLanguage();

  const reasons = lang === 'bg' ? [
    {
      title: 'Подход, ориентиран към пациента',
      description: 'Вслушваме се във вашите нужди и съобразяваме всеки план за лечение с вашите специфични цели.',
      icon: Heart
    },
    {
      title: 'Модерни технологии',
      description: 'От дигитални рентгенови снимки до 3D сканиране, ние използваме съвременни инструменти за прецизност.',
      icon: Zap
    },
    {
      title: 'Комфортна среда',
      description: 'Нашата клиника е проектирана да действа релаксиращо, с удобства, които намаляват тревожността.',
      icon: Coffee
    },
    {
      title: 'Опитни специалисти',
      description: 'Екипът ни включва експерти в различни дентални области, осигурявайки цялостна грижа.',
      icon: Users
    },
    {
      title: 'Прозрачна комуникация',
      description: 'Обясняваме всички процедури и разходи предварително, за да вземате информирани решения.',
      icon: ShieldCheck
    },
    {
      title: 'Гъвкаво работно време',
      description: 'Предлагаме удобни часове за посещение, за да се впишем във вашия натоварен график.',
      icon: CalendarCheck
    }
  ] : [
    {
      title: 'Patient-First Approach',
      description: 'We listen to your needs and tailor every treatment plan to your specific goals.',
      icon: Heart
    },
    {
      title: 'Modern Technology',
      description: 'From digital X-rays to 3D scanning, we use advanced tools for precision.',
      icon: Zap
    },
    {
      title: 'Comfortable Environment',
      description: 'Our clinic is designed to feel relaxing, with amenities that help reduce anxiety.',
      icon: Coffee
    },
    {
      title: 'Experienced Specialists',
      description: 'Our team includes experts in various dental fields, ensuring comprehensive care.',
      icon: Users
    },
    {
      title: 'Transparent Communication',
      description: 'We explain all procedures and costs upfront, so you can make informed decisions.',
      icon: ShieldCheck
    },
    {
      title: 'Flexible Scheduling',
      description: 'We offer convenient appointment times to fit your busy life.',
      icon: CalendarCheck
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-slate-900 text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {lang === 'bg' ? 'Защо пациентите избират нас?' : 'Why Patients Choose Us?'}
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              {lang === 'bg' 
                ? 'Ние вярваме, че детайлите правят разликата. От първия контакт до финалния резултат, ние се стремим към съвършенство.'
                : 'We believe details make the difference. From the first contact to the final result, we strive for excellence.'}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800 border border-slate-800 rounded-[2rem] overflow-hidden">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-slate-900 p-8 sm:p-10 hover:bg-slate-800/50 transition-all duration-300 group"
            >
              <div className="mb-6 lg:mb-8 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-accent group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-white group-hover:text-primary transition-colors">{reason.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
