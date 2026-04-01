'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export function AboutHeroSection() {
  const { lang } = useLanguage();

  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/dental-clinic-about/1920/1080"
          alt="Dental Clinic Interior"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {lang === 'bg' ? (
                <>Грижа за вашата усмивка с <span className="text-accent">професионализъм</span> и внимание</>
              ) : (
                <>Caring for your smile with <span className="text-accent">professionalism</span> and attention</>
              )}
            </h1>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
              {lang === 'bg' 
                ? 'Ние вярваме, че всеки заслужава здрава и красива усмивка. Нашата мисия е да предоставим най-високо качество на дентална грижа в комфортна и приятелска среда.'
                : 'We believe everyone deserves a healthy and beautiful smile. Our mission is to provide the highest quality dental care in a comfortable and friendly environment.'}
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
