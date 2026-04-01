'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowRight, Shield, Activity, Baby, Syringe, CheckCircle2, X } from 'lucide-react';
import { ToothIcon } from '@/components/ui/ToothIcon';
import { OrthodonticIcon } from '@/components/ui/OrthodonticIcon';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

type Service = {
  title: string;
  description: string;
  icon: any;
  details: {
    subtitle: string;
    whatItIs: string;
    whyChooseThis: string[];
    result: string;
    images?: {
      before: string;
      after: string;
    };
  };
};

type Category = {
  id: string;
  title: string;
  description: string;
  services: Service[];
};

export function ServicesGrid() {
  const { lang } = useLanguage();
  const [activeService, setActiveService] = useState<Service | null>(null);

  useEffect(() => {
    if (activeService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeService]);

  const categories: Category[] = lang === 'bg' ? [
    {
      id: 'preventative',
      title: 'Профилактика и Детска стоматология',
      description: 'Основата на доброто орално здраве за цялото семейство.',
      services: [
        {
          title: 'Профилактика',
          description: 'Редовни прегледи, почистване и диагностика за поддържане на оптимално орално здраве.',
          icon: Activity,
          details: {
            subtitle: 'Грижа и превенция',
            whatItIs: 'Професионално почистване на зъбен камък с ултразвук и полиране с Airflow (комбинация от вода, въздух и фина сода), съчетано с обстоен преглед.',
            whyChooseThis: [
              'Предотвратява кървенето на венците и появата на пародонтит.',
              'Премахва плаката и петната, които не могат да се изчистят с четка у дома.'
            ],
            result: 'Гладка повърхност на зъбите, свеж дъх и здрави венци без възпаления.',
            images: {
              before: '/Cosmetic_Dentistry_Veneers_temple/Cosmetic_Dentistry_Veneers_before.png',
              after: '/Cosmetic_Dentistry_Veneers_temple/Cosmetic_Dentistry_Veneers_after.png'
            }
          }
        },
        {
          title: 'Детска стоматология',
          description: 'Нежна и приятелска дентална грижа, създадена специално за най-малките ни пациенти.',
          icon: Baby,
          details: {
            subtitle: 'Грижа за най-малките',
            whatItIs: 'Специализирано лечение на временни и млади постоянни зъби, фокусирано върху комфорта и липсата на стрес за детето.',
            whyChooseThis: [
              'Изгражда навици за устна хигиена от ранна възраст.',
              'Силанизирането (защитно запечатване) предпазва новите постоянни зъби от кариес.'
            ],
            result: 'Здрави детски зъби и дете, което посещава зъболекарския кабинет с доверие и без страх.',
            images: {
              before: 'https://picsum.photos/seed/before-pediatric/400/300',
              after: 'https://picsum.photos/seed/after-pediatric/400/300'
            }
          }
        }
      ]
    },
    {
      id: 'cosmetic',
      title: 'Естетична дентална медицина и Ортодонтия',
      description: 'Създаване на красиви, хармонични и правилно подредени усмивки.',
      services: [
        {
          title: 'Избелване на зъби',
          description: 'Професионални процедури за избелване за по-ярка и сияйна усмивка само с едно посещение.',
          icon: ToothIcon,
          details: {
            subtitle: 'Естетична промяна',
            whatItIs: 'Химичен процес, при който активен кислород прониква в емайла и разгражда пигментите, натрупани от храна, напитки и тютюнопушене.',
            whyChooseThis: [
              'Най-бързият начин за цялостно освежаване на визията.',
              'Професионалният контрол гарантира липса на увреждания по емайла.'
            ],
            result: 'Зъбите стават с 3 до 8 нюанса по-бели само в рамките на едно посещение (около 60-90 минути).',
            images: {
              before: '/Teeth_Whitening_temple/Teeth_Whitening_before.png',
              after: '/Teeth_Whitening_temple/Teeth_Whitening_after.png'
            }
          }
        },
        {
          title: 'Естетична дентална медицина',
          description: 'Фасети, бондинг и пълна промяна на усмивката, съобразени с вашите естетически цели.',
          icon: Syringe,
          details: {
            subtitle: 'Дизайн на усмивката',
            whatItIs: 'Комбинация от процедури като фасети (фини порцеланови люспи) или бондинг (директно моделиране с фотополимер), които коригират дефекти.',
            whyChooseThis: [
              'Коригира разстояния (диастеми), леки изкривявания, отчупвания или трайни оцветявания.',
              'Позволява пълен контрол върху формата и цвета на новата ви усмивка.'
            ],
            result: 'Хармонична и „холивудска“ усмивка, изцяло съобразена с чертите на лицето ви.',
            images: {
              before: '/Cosmetic_Dentistry_Veneers_temple/Cosmetic_Dentistry_Veneers_before.png',
              after: '/Cosmetic_Dentistry_Veneers_temple/Cosmetic_Dentistry_Veneers_after.png'
            }
          }
        },
        {
          title: 'Ортодонтия',
          description: 'Прозрачни алайнери и традиционни брекети за изправяне на зъбите и коригиране на захапката.',
          icon: OrthodonticIcon,
          details: {
            subtitle: 'Изправяне на зъби и захапка',
            whatItIs: 'Лечение чрез брекети или прозрачни шини (алайнери), които упражняват постоянен лек натиск върху зъбите, за да ги преместят в правилната позиция.',
            whyChooseThis: [
              'Коригира неправилна захапка, която причинява износване на зъбите и болки в челюстта.',
              'Улеснява почистването на зъбите, намалявайки риска от кариеси.'
            ],
            result: 'Правилна подредба на зъбите, симетрична усмивка и подобрена функция на дъвкателния апарат.',
            images: {
              before: '/Orthodontics_temple/before.png',
              after: '/Orthodontics_temple/After_TREATMENT.png'
            }
          }
        }
      ]
    },
    {
      id: 'restorative',
      title: 'Възстановителна стоматология',
      description: 'Възстановяване на функцията и естетиката при липсващи или увредени зъби.',
      services: [
        {
          title: 'Зъбни импланти',
          description: 'Постоянни, естествено изглеждащи заместители на липсващи зъби, които възстановяват вашата усмивка и увереност.',
          icon: Shield,
          details: {
            subtitle: 'Възстановяване на липсващи зъби',
            whatItIs: 'Имплантът е малък титанов винт, който замества корена на липсващ зъб. Той се интегрира (сраства) с челюстната кост, за да служи като стабилна основа за коронка.',
            whyChooseThis: [
              'Предотвратява стопяването на честната кост след загуба на зъб.',
              'Не се налага изпиляване на съседните здрави зъби.',
              'Възстановява пълната дъвкателна функция.'
            ],
            result: 'Усещане и вид на напълно естествен зъб, който при правилна поддръжка може да издържи десетилетия.',
            images: {
              before: '/dental_implants_temple/Dental_Implants_before.png',
              after: '/dental_implants_temple/Dental_Implants_after.png'
            }
          }
        }
      ]
    }
  ] : [
    {
      id: 'preventative',
      title: 'Preventative & Pediatric Dentistry',
      description: 'The foundation of good oral health for the whole family.',
      services: [
        {
          title: 'Preventative Care',
          description: 'Regular checkups, cleanings, and diagnostics to maintain optimal oral health.',
          icon: Activity,
          details: {
            subtitle: 'Care and prevention',
            whatItIs: 'Professional tartar cleaning with ultrasound and polishing with Airflow (a combination of water, air, and fine baking soda), combined with a thorough examination.',
            whyChooseThis: [
              'Prevents bleeding gums and the onset of periodontitis.',
              'Removes plaque and stains that cannot be cleaned with a brush at home.'
            ],
            result: 'A smooth tooth surface, fresh breath, and healthy gums without inflammation.',
            images: {
              before: '/Cosmetic_Dentistry_Veneers_temple/Cosmetic_Dentistry_Veneers_before.png',
              after: '/Cosmetic_Dentistry_Veneers_temple/Cosmetic_Dentistry_Veneers_after.png'
            }
          }
        },
        {
          title: 'Pediatric Dentistry',
          description: 'Gentle and friendly dental care designed specifically for our youngest patients.',
          icon: Baby,
          details: {
            subtitle: 'Care for the little ones',
            whatItIs: 'Specialized treatment of primary and young permanent teeth, focused on comfort and a stress-free experience for the child.',
            whyChooseThis: [
              'Builds oral hygiene habits from an early age.',
              'Sealants (protective sealing) protect new permanent teeth from cavities.'
            ],
            result: 'Healthy children\'s teeth and a child who visits the dental office with confidence and without fear.',
            images: {
              before: 'https://picsum.photos/seed/before-pediatric/400/300',
              after: 'https://picsum.photos/seed/after-pediatric/400/300'
            }
          }
        }
      ]
    },
    {
      id: 'cosmetic',
      title: 'Cosmetic Dentistry & Orthodontics',
      description: 'Creating beautiful, harmonious, and properly aligned smiles.',
      services: [
        {
          title: 'Teeth Whitening',
          description: 'Professional whitening treatments for a brighter, more radiant smile in just one visit.',
          icon: ToothIcon,
          details: {
            subtitle: 'Aesthetic transformation',
            whatItIs: 'A chemical process where active oxygen penetrates the enamel and breaks down pigments accumulated from food, drinks, and smoking.',
            whyChooseThis: [
              'The fastest way to completely refresh your look.',
              'Professional control ensures no damage to the enamel.'
            ],
            result: 'Teeth become 3 to 8 shades whiter in just one visit (about 60-90 minutes).',
            images: {
              before: '/Teeth_Whitening_temple/Teeth_Whitening_before.png',
              after: '/Teeth_Whitening_temple/Teeth_Whitening_after.png'
            }
          }
        },
        {
          title: 'Cosmetic Dentistry',
          description: 'Veneers, bonding, and full smile makeovers tailored to your aesthetic goals.',
          icon: Syringe,
          details: {
            subtitle: 'Smile design',
            whatItIs: 'A combination of procedures such as veneers (thin porcelain shells) or bonding (direct modeling with photopolymer) that correct defects.',
            whyChooseThis: [
              'Corrects gaps (diastemas), slight misalignments, chipping, or permanent discoloration.',
              'Allows full control over the shape and color of your new smile.'
            ],
            result: 'A harmonious and "Hollywood" smile, fully tailored to your facial features.',
            images: {
              before: '/Cosmetic_Dentistry_Veneers_temple/Cosmetic_Dentistry_Veneers_before.png',
              after: '/Cosmetic_Dentistry_Veneers_temple/Cosmetic_Dentistry_Veneers_after.png'
            }
          }
        },
        {
          title: 'Orthodontics',
          description: 'Clear aligners and traditional braces to straighten teeth and correct your bite.',
          icon: OrthodonticIcon,
          details: {
            subtitle: 'Straightening teeth and bite',
            whatItIs: 'Treatment using braces or clear aligners that apply constant gentle pressure on the teeth to move them into the correct position.',
            whyChooseThis: [
              'Corrects an improper bite that causes tooth wear and jaw pain.',
              'Makes teeth easier to clean, reducing the risk of cavities.'
            ],
            result: 'Proper tooth alignment, a symmetrical smile, and improved chewing function.',
            images: {
              before: '/Orthodontics_temple/before.png',
              after: '/Orthodontics_temple/After_TREATMENT.png'
            }
          }
        }
      ]
    },
    {
      id: 'restorative',
      title: 'Restorative Dentistry',
      description: 'Restoring function and aesthetics for missing or damaged teeth.',
      services: [
        {
          title: 'Dental Implants',
          description: 'Permanent, natural-looking replacements for missing teeth that restore your smile and confidence.',
          icon: Shield,
          details: {
            subtitle: 'Restoring missing teeth',
            whatItIs: 'An implant is a small titanium screw that replaces the root of a missing tooth. It integrates (fuses) with the jawbone to serve as a stable foundation for a crown.',
            whyChooseThis: [
              'Prevents jawbone loss after tooth loss.',
              'No need to grind down adjacent healthy teeth.',
              'Restores full chewing function.'
            ],
            result: 'The feel and look of a completely natural tooth, which with proper maintenance can last for decades.',
            images: {
              before: '/dental_implants_temple/Dental_Implants_before.png',
              after: '/dental_implants_temple/Dental_Implants_after.png'
            }
          }
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50/50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title={lang === 'bg' ? 'Комплексни дентални услуги' : 'Comprehensive Dental Services'}
          subtitle={lang === 'bg' ? 'Предлагаме пълна гама от дентални лечения, използвайки най-новите технологии, за да осигурим най-добрите възможни резултати за вашата усмивка.' : 'We offer a full range of dental treatments using the latest technology to ensure the best possible results for your smile.'}
          centered
        />
        
        <div className="space-y-20 mb-16">
          {categories.map((category) => (
            <div key={category.id} className="scroll-mt-24">
              <div className="mb-10 text-center md:text-left border-b border-slate-200 pb-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">{category.title}</h2>
                <p className="text-slate-600 max-w-3xl mx-auto md:mx-0">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, index) => (
                  <button 
                    key={`${category.id}-${index}`} 
                    onClick={() => setActiveService(service)}
                    className="flex flex-col bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 text-left group h-full"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <service.icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{service.title}</h3>
                    </div>
                    
                    <p className="text-slate-600 text-sm md:text-base mb-6 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center font-medium text-primary text-sm group-hover:text-secondary transition-colors w-full justify-between">
                      {lang === 'bg' ? 'Научете повече' : 'Learn more'} 
                      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link 
            href="/prices"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-primary font-bold hover:bg-slate-50 transition-all shadow-sm border border-slate-200 hover:shadow-md"
          >
            {lang === 'bg' ? 'Вижте пълния ценоразпис' : 'View full price list'}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Modal Overlay / Popup */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 flex flex-col mx-auto"
            >
              <div className="sticky top-0 right-0 z-20 flex justify-end p-4 pointer-events-none">
                 <button 
                  onClick={() => setActiveService(null)} 
                  className="w-10 h-10 bg-white shadow-sm border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors pointer-events-auto"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="px-6 pb-6 md:px-10 md:pb-10 lg:px-12 lg:pb-12 pt-0 mt-[-20px]">
                <div className="flex items-center gap-5 mb-8 border-b border-slate-100 pb-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <activeService.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900">{activeService.title}</h3>
                    <p className="text-primary font-bold uppercase tracking-wider text-xs md:text-sm mt-1">{activeService.details.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                        {lang === 'bg' ? 'Какво представлява' : 'What it is'}
                      </h4>
                      <p className="text-slate-700 leading-relaxed text-base">
                        {activeService.details.whatItIs}
                      </p>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">
                        {lang === 'bg' ? 'Резултат' : 'Result'}
                      </h4>
                      <p className="text-slate-900 font-semibold leading-relaxed">
                        {activeService.details.result}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                        {lang === 'bg' ? 'Предимства' : 'Benefits'}
                      </h4>
                      <ul className="space-y-4">
                        {activeService.details.whyChooseThis.map((reason, idx) => (
                          <li key={idx} className="flex items-start gap-3 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700 text-sm leading-relaxed">{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {activeService.details.images && (
                    <div className="space-y-6">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center hidden lg:block">
                        {lang === 'bg' ? 'Преди и След' : 'Before & After'}
                      </h4>
                      <div className="flex flex-col gap-4">
                         <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200">
                           <Image 
                             src={activeService.details.images.before} 
                             alt={`${activeService.title} Before`} 
                             fill 
                             className="object-cover"
                             referrerPolicy="no-referrer"
                           />
                           <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider">
                             {lang === 'bg' ? 'Преди' : 'Before'}
                           </div>
                         </div>
                         <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-md border-b-2 border-accent/60">
                           <Image 
                             src={activeService.details.images.after} 
                             alt={`${activeService.title} After`} 
                             fill 
                             className="object-cover"
                             referrerPolicy="no-referrer"
                           />
                           <div className="absolute top-3 right-3 bg-accent text-white text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-md">
                             {lang === 'bg' ? 'След' : 'After'}
                           </div>
                         </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
