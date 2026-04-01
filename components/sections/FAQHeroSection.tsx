'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { HelpCircle } from 'lucide-react';

export function FAQHeroSection() {
  const { lang } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 text-accent mb-8"
          >
            <HelpCircle className="w-8 h-8" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {lang === 'bg' ? 'Как можем да ви помогнем?' : 'How can we help you?'}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto"
          >
            {lang === 'bg' 
              ? 'Намерете отговори на най-често задаваните въпроси относно нашите услуги, процедури и грижа за пациентите.'
              : 'Find answers to the most frequently asked questions about our services, procedures, and patient care.'}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
