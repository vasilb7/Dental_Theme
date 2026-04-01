'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Heart, Zap, Users } from 'lucide-react';

export function MissionValuesSection() {
  const { lang } = useLanguage();

  const values = lang === 'bg' ? [
    {
      title: 'Безкомпромисно качество',
      description: 'Използваме само най-добрите материали и технологии в света.',
      icon: Shield
    },
    {
      title: 'Пациентът на първо място',
      description: 'Вашият комфорт и спокойствие са наш основен приоритет.',
      icon: Heart
    },
    {
      title: 'Иновативен подход',
      description: 'Постоянно внедряваме нови дигитални методи за по-бързо лечение.',
      icon: Zap
    },
    {
      title: 'Експертен екип',
      description: 'Нашите лекари са специалисти с международно признание.',
      icon: Users
    }
  ] : [
    {
      title: 'Uncompromising Quality',
      description: 'We use only the best materials and technologies in the world.',
      icon: Shield
    },
    {
      title: 'Patient First',
      description: 'Your comfort and peace of mind are our top priority.',
      icon: Heart
    },
    {
      title: 'Innovative Approach',
      description: 'We constantly implement new digital methods for faster treatment.',
      icon: Zap
    },
    {
      title: 'Expert Team',
      description: 'Our doctors are internationally recognized specialists.',
      icon: Users
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {lang === 'bg' ? 'Нашата мисия и ценности' : 'Our Mission & Values'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400"
          >
            {lang === 'bg' 
              ? 'Ние вярваме, че всеки заслужава перфектна усмивка без страх и болка.'
              : 'We believe that everyone deserves a perfect smile without fear or pain.'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 text-accent flex items-center justify-center mb-6">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
