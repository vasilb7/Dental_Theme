'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { AIBadge } from '@/components/ui/AIBadge';

export function TeamHeroSection() {
  const { lang } = useLanguage();

  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/VBMODELS_AI/together.png"
          alt={lang === 'bg' ? 'Екипът на нашата клиника' : 'Our Clinic Team'}
          fill
          className="object-cover object-top filter brightness-[0.45] contrast-[1.05]"
          priority
        />
        {/* Dark / Gradient Overlay to make text pop & blend seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-slate-950/70" />
        <AIBadge position="bottom-right" className="bottom-6 right-6" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg tracking-tight"
          >
            {lang === 'bg' ? 'Запознайте се с нашите експерти' : 'Meet Our Experts'}
          </motion.h1>
        </div>
      </div>
    </section>
  );
}



