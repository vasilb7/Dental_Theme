'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScanFace, Zap, Microscope } from 'lucide-react';
import Image from 'next/image';

export function TechnologySection() {
  const { lang } = useLanguage();

  const technologies = lang === 'bg' ? [
    {
      title: '3D CBCT Скенер',
      description: 'Предоставя триизмерни изображения с висока резолюция на челюстите и зъбите за прецизна диагностика и планиране на импланти.',
      icon: ScanFace,
      image: '/Advanced_Technology/3D1.jpg'
    },
    {
      title: 'Лазерна стоматология',
      description: 'Минимално инвазивно лечение на венци и кариеси с лазер. Осигурява по-бързо заздравяване и по-малко дискомфорт.',
      icon: Zap,
      image: '/Advanced_Technology/1_Lechenie_na_parodontit_s_lazer.jpg'
    },
    {
      title: 'Дентален микроскоп',
      description: 'Увеличава работното поле до 20 пъти, което е незаменимо при сложни коренови лечения и микрохирургия.',
      icon: Microscope,
      image: '/Advanced_Technology/microscopeimage.jpg'
    }
  ] : [
    {
      title: '3D CBCT Scanner',
      description: 'Provides high-resolution 3D images of the jaws and teeth for precise diagnostics and implant planning.',
      icon: ScanFace,
      image: '/Advanced_Technology/3D1.jpg'
    },
    {
      title: 'Laser Dentistry',
      description: 'Minimally invasive treatment of gums and cavities with a laser. Ensures faster healing and less discomfort.',
      icon: Zap,
      image: '/Advanced_Technology/1_Lechenie_na_parodontit_s_lazer.jpg'
    },
    {
      title: 'Dental Microscope',
      description: 'Magnifies the working field up to 20 times, which is indispensable for complex root canal treatments and microsurgery.',
      icon: Microscope,
      image: '/Advanced_Technology/microscopeimage.jpg'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title={lang === 'bg' ? 'Модерни Технологии' : 'Advanced Technology'}
          subtitle={lang === 'bg' ? 'Инвестираме в най-новите иновации за вашия комфорт и безопасност' : 'We invest in the latest innovations for your comfort and safety'}
          centered
          theme="dark"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="group rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 transition-all hover:bg-slate-700/50">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={tech.image}
                  alt={tech.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm p-2 rounded-xl text-white">
                  <tech.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
