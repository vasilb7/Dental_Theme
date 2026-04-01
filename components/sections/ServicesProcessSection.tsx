'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ClipboardList, Stethoscope, Sparkles } from 'lucide-react';

export function ServicesProcessSection() {
  const { lang } = useLanguage();

  const steps = lang === 'bg' ? [
    {
      icon: ClipboardList,
      title: '1. Консултация и План',
      description: 'Започваме с обстоен преглед, дигитална диагностика и обсъждане на вашите нужди, за да създадем индивидуален план за лечение.'
    },
    {
      icon: Stethoscope,
      title: '2. Прецизно Лечение',
      description: 'Извършваме процедурите с максимално внимание към детайла, използвайки съвременна апаратура за безболезнено и ефективно лечение.'
    },
    {
      icon: Sparkles,
      title: '3. Перфектен Резултат',
      description: 'Насладете се на новата си, здрава и сияйна усмивка. Предоставяме ви насоки за поддръжка и дълготрайни резултати.'
    }
  ] : [
    {
      icon: ClipboardList,
      title: '1. Consultation & Plan',
      description: 'We start with a thorough examination, digital diagnostics, and a discussion of your needs to create a personalized treatment plan.'
    },
    {
      icon: Stethoscope,
      title: '2. Precision Treatment',
      description: 'We perform procedures with the utmost attention to detail, using modern equipment for painless and effective treatment.'
    },
    {
      icon: Sparkles,
      title: '3. Perfect Result',
      description: 'Enjoy your new, healthy, and radiant smile. We provide you with maintenance guidelines for long-lasting results.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title={lang === 'bg' ? 'Нашият Подход' : 'Our Approach'}
          subtitle={lang === 'bg' ? 'Как протича процесът на лечение при нас' : 'How our treatment process works'}
          centered
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-200 z-0" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-lg flex items-center justify-center mb-6 text-primary">
                <step.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
