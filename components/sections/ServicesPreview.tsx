'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, HeartPulse } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ServicesPreview() {
  const { lang } = useLanguage();

  const previewServices = lang === 'bg' ? [
    {
      title: 'Естетична стоматология',
      description: 'Избелване, фасети и бондинг за вашата перфектна усмивка.',
      icon: Sparkles,
      link: '/uslugi#cosmetic'
    },
    {
      title: 'Имплантология',
      description: 'Възстановяване на липсващи зъби с най-съвременни импланти.',
      icon: Shield,
      link: '/uslugi#restorative'
    },
    {
      title: 'Профилактика',
      description: 'Редовни прегледи и почистване за дълготрайно орално здраве.',
      icon: HeartPulse,
      link: '/uslugi#preventative'
    }
  ] : [
    {
      title: 'Cosmetic Dentistry',
      description: 'Whitening, veneers, and bonding for your perfect smile.',
      icon: Sparkles,
      link: '/services#cosmetic'
    },
    {
      title: 'Implantology',
      description: 'Restoring missing teeth with state-of-the-art implants.',
      icon: Shield,
      link: '/services#restorative'
    },
    {
      title: 'Prevention',
      description: 'Regular check-ups and cleaning for long-term oral health.',
      icon: HeartPulse,
      link: '/services#preventative'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <SectionHeading 
              title={lang === 'bg' ? 'Нашите основни услуги' : 'Our Core Services'}
              subtitle={lang === 'bg' ? 'Ние предлагаме цялостна грижа за вашето дентално здраве, съчетавайки опит и иновации.' : 'We offer comprehensive care for your dental health, combining expertise and innovation.'}
              noMargin
            />
          </div>
          <Link 
            href={lang === 'bg' ? "/uslugi" : "/services"}
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group"
          >
            {lang === 'bg' ? 'Вижте всички услуги' : 'View all services'}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <Link 
                href={service.link}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary group-hover:text-accent transition-colors"
              >
                {lang === 'bg' ? 'Научете повече' : 'Learn more'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
