'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function ServicesHeroSection() {
  const { lang } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/dental-services-hero/1920/1080?blur=2"
          alt="Dental Services"
          fill
          className="object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {lang === 'bg' ? 'Изключителна грижа за вашата усмивка' : 'Exceptional Care for Your Smile'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed"
          >
            {lang === 'bg' 
              ? 'Ние предлагаме пълна гама от висококачествени дентални услуги, използвайки най-съвременните технологии и материали, за да ви осигурим здрава и красива усмивка за цял живот.' 
              : 'We offer a full range of high-quality dental services using state-of-the-art technology and materials to provide you with a healthy and beautiful smile for life.'}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
