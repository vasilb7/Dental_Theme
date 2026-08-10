'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CheckCircle2, History, Award, Users } from 'lucide-react';
import { AIBadge } from '@/components/ui/AIBadge';

export function AdvancedAboutSection() {
  const { lang } = useLanguage();

  const history = {
    title: lang === 'bg' ? 'Нашата История' : 'Our History',
    content: lang === 'bg' 
      ? 'Основана през 2012 година, нашата клиника започна с една мисия: да промени начина, по който хората възприемат посещението при зъболекар. През годините инвестирахме в най-съвременните технологии и събрахме екип от специалисти, които споделят еднаква страст към съвършенството и грижата за пациента.'
      : 'Founded in 2012, our clinic began with one mission: to change the way people perceive visiting the dentist. Over the years, we have invested in the most modern technologies and gathered a team of specialists who share the same passion for excellence and patient care.',
    stats: [
      { label: lang === 'bg' ? 'Години опит' : 'Years Experience', value: '12+', icon: History },
      { label: lang === 'bg' ? 'Доволни пациенти' : 'Happy Patients', value: '5000+', icon: Users },
      { label: lang === 'bg' ? 'Награди' : 'Awards', value: '15', icon: Award }
    ]
  };

  const team = lang === 'bg' ? [
    {
      name: 'Диана Стефанова',
      role: 'CEO & Основател',
      bio: 'Визионер и лидер, отдаден на създаването на нов стандарт в денталната грижа.',
      image: '/VBMODELS_AI/Team_temple/Ceo_Diana_Stefanova.jpeg'
    },
    {
      name: 'Натали Кънева',
      role: 'Естетичен специалист',
      bio: 'Експерт в преобразяването на усмивки с прецизност и усет към детайла.',
      image: '/VBMODELS_AI/Team_temple/Natali_Qneva.jpeg'
    },
    {
      name: 'Жасмин Добрева',
      role: 'Дентален лекар',
      bio: 'Специалист с нежен подход, вярващ в доверието и спокойната атмосфера.',
      image: '/VBMODELS_AI/Team_temple/Jasmin_Dobreva.jpeg'
    }
  ] : [
    {
      name: 'Diana Stefanova',
      role: 'CEO & Founder',
      bio: 'Visionary and leader, dedicated to creating a new standard in dental care.',
      image: '/VBMODELS_AI/Team_temple/Ceo_Diana_Stefanova.jpeg'
    },
    {
      name: 'Natali Qneva',
      role: 'Aesthetic Specialist',
      bio: 'Expert in smile transformations with precision and attention to detail.',
      image: '/VBMODELS_AI/Team_temple/Natali_Qneva.jpeg'
    },
    {
      name: 'Jasmin Dobreva',
      role: 'Dentist',
      bio: 'Specialist with a gentle approach, believing in trust and a calm atmosphere.',
      image: '/VBMODELS_AI/Team_temple/Jasmin_Dobreva.jpeg'
    }
  ];

  return (
    <div className="bg-white">
      {/* Clinic History Section */}
      <section className="pt-12 lg:pt-1 pb-12 lg:pb-12 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-[#334155] mb-6 tracking-tight">
                  {history.title}
                </h2>
                <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
                <p className="text-lg text-slate-600 leading-relaxed">
                  {history.content}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                {history.stats.map((stat, index) => (
                  <div key={index} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow">
                    <stat.icon className="w-8 h-8 text-primary mb-4" />
                    <div className="text-3xl font-bold text-[#334155] mb-1">{stat.value}</div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square lg:aspect-[4/5] group"
            >
              {/* Background Frame (The "Boundaries") */}
              <div className="absolute inset-x-0 bottom-0 h-[70%] bg-slate-100 rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-200/50 via-white to-primary/5" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
              </div>

              {/* The Image (The Person) - Pops out the top */}
              <div className="relative w-full h-[100%] -top-[-0%] z-10 flex items-end justify-center pointer-events-none transition-transform duration-700 origin-bottom">
                <Image 
                  src="/About_Us/Image_1.png" 
                  alt="Clinic History" 
                  fill 
                  className="object-contain object-bottom transition-all duration-700 select-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
                  priority
                />
              </div>
              
              {/* The Badge (Exactly matching screenshot) */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-max max-w-[90%] md:max-w-[80%]">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="bg-white/90 backdrop-blur-md px-8 py-5 rounded-[2rem] shadow-[0_15px_40px_-5px_rgba(0,0,0,0.1)] border border-white/50 flex items-center gap-4 transition-transform duration-500 hover:scale-105"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3c5d79] flex items-center justify-center shadow-lg shadow-[#3c5d79]/20">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-900 font-bold tracking-tight text-sm sm:text-base whitespace-nowrap">
                    {lang === 'bg' ? 'Гарантирано качество от 2012' : 'Quality Guaranteed Since 2012'}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section - Matching the screenshot style */}
      <section className="pt-12 lg:pt-12 pb-12 lg:pb-16 bg-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#33536b] mb-6">
              {lang === 'bg' ? 'Запознайте се с нашите специалисти' : 'Meet Our Specialists'}
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              {lang === 'bg' 
                ? 'Нашият екип от висококвалифицирани дентални специалисти се е посветил на това да ви осигури най-високия стандарт на грижа.' 
                : 'Our team of highly qualified dental specialists is dedicated to providing you with the highest standard of care.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="group flex flex-col items-center"
              >
                {/* Modern Pop-out Portrait Container */}
                <div className="relative w-64 h-80 lg:w-72 lg:h-88 mb-10 flex items-end justify-center">
                  {/* Background Frame */}
                  <div className="absolute inset-x-0 bottom-0 h-[80%] bg-white rounded-[3rem] shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* The Specialist Image */}
                  <div className="relative w-full h-[110%] -top-[10%] z-10 transition-transform duration-500 group-hover:scale-105 origin-bottom">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      className="object-contain object-bottom drop-shadow-[0_15px_35px_rgba(0,0,0,0.12)] group-hover:drop-shadow-[0_25px_45px_rgba(0,0,0,0.2)] transition-all duration-500"
                    />
                  </div>

                  {/* Aesthetic Accent Circle */}
                  <div className="absolute top-[30%] -right-2 w-16 h-16 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                  <AIBadge position="bottom-right" className="bottom-2 right-2" />
                </div>

                <div className="space-y-4 text-center">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-[#33536b] tracking-tight group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                      {member.role}
                    </p>
                  </div>
                  <div className="w-12 h-1 bg-slate-200 mx-auto rounded-full group-hover:w-20 group-hover:bg-primary/50 transition-all duration-500" />
                  <p className="text-slate-500 leading-relaxed max-w-xs mx-auto text-sm font-medium">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
