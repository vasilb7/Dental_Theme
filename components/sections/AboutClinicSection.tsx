'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function AboutClinicSection() {
  const { lang } = useLanguage();

  return (
    <section id="about-clinic" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-slate-100 text-slate-500 rounded-full">
              {lang === 'bg' ? 'Нашата история' : 'Our Story'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              {lang === 'bg' 
                ? 'Повече от 15 години създаваме усмивки, които променят животи' 
                : 'For more than 15 years, we have been creating smiles that change lives'}
            </h2>
            <div className="prose prose-lg text-slate-600 max-w-none space-y-6">
              <p>
                {lang === 'bg' 
                  ? 'Всичко започна с една проста мечта: да създадем място, където денталното лечение не е източник на страх, а път към по-добро самочувствие и здраве. През 2010 г. отворихме вратите на нашата първа малка практика с два стола и голямо сърце.'
                  : 'It all started with a simple dream: to create a place where dental treatment is not a source of fear, but a path to better self-esteem and health. In 2010, we opened the doors of our first small practice with two chairs and a big heart.'}
              </p>
              <p>
                {lang === 'bg'
                  ? 'Днес „Дентална Клиника“ е лидер в дигиталната стоматология в региона. Инвестирахме в най-модерните 3D скенери, лазери и софтуер за планиране на усмивката, за да гарантираме прецизност, която преди беше невъзможна.'
                  : 'Today, "Dental Clinic" is a leader in digital dentistry in the region. We invested in the most modern 3D scanners, lasers, and smile design software to guarantee precision that was previously impossible.'}
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-xl"
            >
              <Image 
                src="https://picsum.photos/seed/clinic-history-1/800/600" 
                alt="Clinic history" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-xl"
            >
              <Image 
                src="https://picsum.photos/seed/clinic-history-2/800/600" 
                alt="Modern equipment" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-10 md:p-16 rounded-[3rem] border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              {lang === 'bg' ? 'Нашата визия за бъдещето' : 'Our Vision for the Future'}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed italic">
              {lang === 'bg'
                ? '„Вярваме, че бъдещето на стоматологията е в персонализираната грижа и минимално инвазивните процедури. Нашата цел е да продължим да бъдем пионери в дигиталните технологии, като същевременно запазим човешкото отношение и емпатията, които ни дефинират.“'
                : '"We believe that the future of dentistry lies in personalized care and minimally invasive procedures. Our goal is to continue to be pioneers in digital technologies, while maintaining the human touch and empathy that define us."'}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                AP
              </div>
              <div>
                <div className="font-bold text-slate-900">
                  {lang === 'bg' ? 'Д-р Александър Петров' : 'Dr. Alexander Petrov'}
                </div>
                <div className="text-sm text-slate-500">
                  {lang === 'bg' ? 'Основател и главен лекар' : 'Founder & Chief Physician'}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
