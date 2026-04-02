'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export function AboutTeamShowcase() {
  const { lang } = useLanguage();

  const team = [
    {
      id: '01',
      name: lang === 'bg' ? 'Д-р Диана Стефанова' : 'Dr. Diana Stefanova',
      role: lang === 'bg' ? 'Главен Лекар & Основател' : 'Chief Dentist & Founder',
      desc: lang === 'bg' 
        ? 'Визионер и лидер, отдаден на създаването на нов стандарт в денталната грижа. Специалист с над 15 години опит в имплантологията и сложните възстановявания.' 
        : 'Visionary and leader, dedicated to creating a new standard in dental care. Specialist with over 15 years of experience in implantology and complex reconstructions.',
      image: '/About_Us/Image_1.png',
      color: 'bg-[#e2e8f0]',
      imgScale: 1.1, // Adjust size
      imgX: 0,      // Move Left/Right
      imgY: -10      // Move Up/Down
    },
    {
      id: '02',
      name: lang === 'bg' ? 'Д-р Михаела Петрова' : 'Dr. Mihaela Petrova',
      role: lang === 'bg' ? 'Детски Стоматолог' : 'Pediatric Dentist',
      desc: lang === 'bg'
        ? 'Превръща всяко посещение на малките ни пациенти в забавно приключение, като премахва страха чрез специален подход и внимание.'
        : 'Turns every visit of our little patients into a fun adventure, eliminating fear through a special approach and care.',
      image: '/About_Us/Image_2.png',
      color: 'bg-[#f1f5f9]',
      imgScale: 1.1, // Adjust size
      imgX: 0,       // Move Left/Right
      imgY: -10        // Move Up/Down
    }
  ];

  return (
    <section className="py-24 lg:py-40 bg-white overflow-hidden pt-36 lg:pt-48">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header content like in image */}
        <div className="text-center mb-24 lg:mb-32">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-6"
          >
            {lang === 'bg' ? 'ЗА НАС' : 'ABOUT US'}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-9xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.9] lg:leading-[0.85]"
          >
            {lang === 'bg' ? (
              <>Екипът на вашите<br />мечтани усмивки.</>
            ) : (
              <>The dream team of<br />your perfect smile.</>
            )}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto"
          >
            {lang === 'bg' 
              ? 'Вашето здраве е нашата страст. Ние преобразяваме животи чрез безупречна стоматология.' 
              : 'Your health is our passion. We transform lives through impeccable dentistry.'}
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              {/* Image Container with base shape */}
              <div className="relative aspect-[4/5] mb-12 flex items-end justify-center">
                {/* Background base shape - shorter than container to allow pop-out */}
                <div className={`absolute bottom-0 w-full h-[85%] ${member.color} rounded-[2.5rem]`} />
                
                <div className="relative w-full h-full z-10">
                   <motion.div
                     className="relative w-full h-full"
                     animate={{ 
                        scale: member.imgScale || 1, 
                        x: member.imgX || 0, 
                        y: member.imgY || 0 
                     }}
                     transition={{ duration: 0.5 }}
                   >
                     <Image 
                       src={member.image}
                       alt={member.name}
                       fill
                       className="object-contain object-bottom drop-shadow-2xl"
                     />
                   </motion.div>
                   
                   {/* Name Badge */}
                   <motion.div 
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.6 + idx * 0.2 }}
                     className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full flex items-center gap-3 shadow-xl border border-slate-100 z-20 transition-transform duration-500"
                   >
                     <div className="w-2 h-2 rounded-full bg-slate-900 animate-pulse" />
                     <span className="text-sm font-black text-slate-900 uppercase tracking-widest">{member.name}</span>
                   </motion.div>
                </div>
              </div>

              {/* Info Area */}
              <div className="space-y-6 px-4">
                {/* Number Bar like in image */}
                <div className="relative">
                   <div className="h-[48px] bg-[#f2f6ea] flex items-center px-6 rounded-lg w-full overflow-hidden">
                      <span className="text-lg font-black text-slate-900 tracking-tight">{member.id}</span>
                   </div>
                </div>
                
                <div className="space-y-4">
                   <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                     {member.role}
                   </h3>
                   <p className="text-lg lg:text-xl text-slate-500 leading-relaxed font-medium">
                     {member.desc}
                   </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
