'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, Heart, Shield, CheckCircle2, Award, Users, Star } from 'lucide-react';

export function AboutClinicSection() {
  const { lang } = useLanguage();

  return (
    <section id="about-clinic" className="w-full bg-gradient-to-b from-[#f0f9ff] to-white overflow-hidden relative py-24 lg:py-40">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER AREA */}
        <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-8">
              <Star className="w-3.5 h-3.5 fill-primary" />
              {lang === 'bg' ? 'Научете за нас' : 'Learn About Us'}
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              {lang === 'bg' 
                ? 'История за амбиция, грижа и много усмивки' 
                : 'A Story of Ambition, Care, and Many Smiles'}
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium opacity-80">
              {lang === 'bg'
                ? 'От момента, в който отворихме врати, нашата цел беше ясна: да внесем нов стандарт в денталното здраве.'
                : 'From the moment we opened our doors, our goal was clear: to bring a new standard to dental health.'}
            </p>
          </motion.div>
        </div>

        {/* SECTION 1: THE VISION (IMAGE 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center mb-40 lg:mb-56">
          <div className="relative order-2 lg:order-1">
             <div className="absolute inset-0 flex items-center justify-center -translate-y-10">
               {[1.4, 2.0, 2.6].map((scale, i) => (
                  <motion.div
                    key={`v1-ring-${i}`}
                    className="absolute rounded-full border border-primary/20 bg-primary/5"
                    style={{ width: '300px', height: '300px' }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: scale, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.3, ease: "easeOut" }}
                  />
               ))}
             </div>
             <motion.div
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.5 }}
               className="relative z-10 flex justify-center"
             >
               <div className="relative w-full max-w-[450px] aspect-[4/5]">
                  <Image 
                    src="/About_Us/Image_1.png"
                    alt="Our Founding Vision"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
               </div>
             </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white/50 backdrop-blur-md p-10 lg:p-14 rounded-[3rem] border border-white/80 shadow-xl shadow-slate-200/50 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  {lang === 'bg' ? 'Началото на едно пътешествие' : 'The Start of a Journey'}
                </h3>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  {lang === 'bg'
                    ? 'Всичко започна с една проста, но силна идея: денталното лечение не трябва да бъде източник на стрес. Искахме да създадем среда, която напомня по-скоро на уютен дом или на свежо крайбрежно кътче, отколкото на студена клиника.'
                    : 'It all started with a simple but strong idea: dental treatment should not be a source of stress. We wanted to create an environment that feels more like a cozy home or a fresh coastal spot than a cold clinic.'}
                </p>
                
                <ul className="space-y-4">
                  {[
                    { bg: 'Персонализирана грижа за всеки', en: 'Personalized care for everyone' },
                    { bg: 'Атмосфера на доверие и спокойствие', en: 'Vibe of trust and calmness' },
                    { bg: 'Екип от доказани професионалисти', en: 'Team of proven professionals' }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-slate-700 font-bold">
                       <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                         <CheckCircle2 className="w-4 h-4" />
                       </span>
                       {lang === 'bg' ? item.bg : item.en}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SECTION 2: THE MODERN EDGE (IMAGE 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  {lang === 'bg' ? 'Дигитална прецизност и иновации' : 'Digital Precision & Innovations'}
                </h3>
              </div>
              
              <div className="prose prose-lg text-slate-600 space-y-6 max-w-xl">
                 <p>
                  {lang === 'bg'
                    ? 'Днес сме горди да бъдем лидери в дигиталната стоматология. Инвестираме в технологии, които правят лечението по-бързо, по-точно и напълно безболезнено.'
                    : 'Today, we are proud to be leaders in digital dentistry. We invest in technologies that make treatment faster, more accurate, and completely painless.'}
                 </p>
                 <p className="italic font-medium text-slate-500 border-l-4 border-accent/30 pl-6">
                  {lang === 'bg'
                    ? '„Технологията е инструментът, но грижата е нашето призвание. Комбинираме най-доброто от двата свята за вашата перфектна усмивка.“'
                    : '"Technology is the tool, but care is our calling. We combine the best of both worlds for your perfect smile."'}
                 </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8 lg:gap-12">
                <div>
                   <div className="text-4xl font-black text-primary mb-2">15+</div>
                   <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{lang === 'bg' ? 'Години опит' : 'Years Experience'}</div>
                </div>
                <div>
                   <div className="text-4xl font-black text-accent mb-2">15k</div>
                   <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{lang === 'bg' ? 'Усмивки' : 'Smiles Created'}</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 flex items-center justify-center">
               {[1.6, 2.4, 3.2].map((scale, i) => (
                  <motion.div
                    key={`v2-ring-${i}`}
                    className="absolute rounded-full border border-accent/20 bg-accent/5"
                    style={{ width: '250px', height: '250px' }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: scale, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.6 + i * 0.3, ease: "easeOut" }}
                  />
               ))}
             </div>
             <motion.div
               initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
               whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.4, type: 'spring' }}
               className="relative z-10 flex justify-center"
             >
               <div className="relative w-full max-w-[480px] aspect-square">
                  <Image 
                    src="/About_Us/Image_2.png"
                    alt="Innovation in Dentistry"
                    fill
                    className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                  />
               </div>
             </motion.div>

             {/* Floating Info Badge */}
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 1.5 }}
               className="absolute -right-4 top-1/4 z-20 bg-white shadow-2xl rounded-2xl p-6 border border-slate-100 flex items-center gap-4 group hover:-translate-y-1 transition-transform"
             >
               <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                 <Users className="w-6 h-6" />
               </div>
               <div>
                  <div className="font-black text-slate-900 leading-none">100%</div>
                  <div className="text-xs font-bold text-slate-500 uppercase mt-1">{lang === 'bg' ? 'Лична грижа' : 'Safe & Personal'}</div>
               </div>
             </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
