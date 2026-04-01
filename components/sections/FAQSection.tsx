'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ChevronDown, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

type FAQItem = {
  question: string;
  answer: string | React.ReactNode;
};

type FAQCategory = {
  id: string;
  title: string;
  items: FAQItem[];
};

export function FAQSection() {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('general');
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories: FAQCategory[] = lang === 'bg' ? [
    {
      id: 'general',
      title: 'Общи въпроси',
      items: [
        {
          question: 'Трябва ли да си запиша час предварително?',
          answer: 'Да, препоръчително е да запишете час предварително, за да можем да ви осигурим нужното внимание и удобно време за посещение.'
        },
        {
          question: 'Приемате ли спешни случаи?',
          answer: 'Да, при възможност приемаме и спешни случаи. При силна болка, подуване или травма се свържете с нас възможно най-скоро.'
        },
        {
          question: 'Колко време продължава един преглед?',
          answer: 'Продължителността зависи от случая, но стандартният преглед обикновено е кратък и достатъчен за оценка и насоки за лечение.'
        },
        {
          question: 'Какво включва първичният преглед?',
          answer: 'Първичният преглед включва оглед на зъбите, венците и общото състояние на устната кухина, както и обсъждане на подходящ план за лечение.'
        },
        {
          question: 'Мога ли да получа план за лечение?',
          answer: 'Да, след преглед можем да изготвим индивидуален план за лечение, съобразен с вашето състояние и нужди.'
        },
        {
          question: 'Издавате ли касов бон или фактура?',
          answer: 'Да, при необходимост се издават необходимите документи за извършената услуга.'
        },
        {
          question: 'Работите ли с деца?',
          answer: 'Да, предлагаме грижа и профилактични прегледи за деца, като се стараем посещението да бъде спокойно и приятно.'
        },
        {
          question: 'Работите ли през уикенда?',
          answer: 'Работното време зависи от графика на клиниката. Най-добре е да се свържете с нас за актуална информация.'
        },
        {
          question: 'Мога ли да отменя или променя часа си?',
          answer: 'Да, молим само да ни уведомите предварително, за да можем да предложим часа на друг пациент.'
        },
        {
          question: 'Колко често трябва да посещавам зъболекар?',
          answer: 'Препоръчително е да правите профилактичен преглед поне веднъж на 6 месеца.'
        }
      ]
    },
    {
      id: 'comfort',
      title: 'Болка, упойка и комфорт',
      items: [
        {
          question: 'Боли ли по време на лечението?',
          answer: 'Работим с модерни методи и упойки, за да направим процедурите възможно най-комфортни и щадящи.'
        },
        {
          question: 'Поставяте ли упойка?',
          answer: 'Да, при необходимост се поставя упойка, за да се осигури спокойствие и комфорт по време на лечението.'
        },
        {
          question: 'Колко време действа упойката?',
          answer: 'Зависи от вида на упойката и процедурата, но обикновено ефектът продължава няколко часа.'
        },
        {
          question: 'Нормално ли е да има чувствителност след процедура?',
          answer: 'Лека чувствителност след някои манипулации е възможна и обикновено отшумява за кратко време.'
        },
        {
          question: 'Какво да правя, ако ме боли след лечение?',
          answer: 'Следвайте указанията на лекаря. Ако болката е силна или продължителна, свържете се с нас.'
        },
        {
          question: 'Мога ли да ям веднага след поставяне на упойка?',
          answer: 'Препоръчително е да изчакате, докато ефектът на упойката премине, за да избегнете нараняване.'
        }
      ]
    },
    {
      id: 'prevention',
      title: 'Профилактика и почистване',
      items: [
        {
          question: 'Колко често трябва да се прави почистване на зъбен камък?',
          answer: 'Обикновено се препоръчва на всеки 6 месеца, но честотата зависи от индивидуалното състояние.'
        },
        {
          question: 'Какво представлява почистването на зъбен камък?',
          answer: 'Това е професионално почистване, при което се премахват натрупаните зъбен камък и плака.'
        },
        {
          question: 'Какво е Airflow?',
          answer: 'Airflow е метод за почистване и полиране на зъбите чрез фина струя, която премахва повърхностни оцветявания и налепи.'
        },
        {
          question: 'Вредно ли е почистването на зъбен камък?',
          answer: 'Не, когато е извършено правилно, то е важна част от поддържането на добро орално здраве.'
        },
        {
          question: 'Защо ми кървят венците при миене?',
          answer: 'Кървенето може да е знак за възпаление на венците и е добре да се направи преглед.'
        },
        {
          question: 'Може ли профилактиката да предотврати по-сериозни проблеми?',
          answer: 'Да, редовната профилактика помага за ранно откриване и предотвратяване на кариеси, възпаления и други проблеми.'
        }
      ]
    },
    {
      id: 'cavities',
      title: 'Кариеси и пломби',
      items: [
        {
          question: 'Как разбирам дали имам кариес?',
          answer: 'Понякога кариесът няма видими симптоми в началото. Болка, чувствителност или тъмни участъци могат да бъдат признак, но прегледът е най-сигурният начин за установяване.'
        },
        {
          question: 'Колко време издържа една пломба?',
          answer: 'Зависи от материала, грижата за зъбите и натоварването, но качествено направената пломба може да издържи дълго.'
        },
        {
          question: 'Може ли стара пломба да се подмени?',
          answer: 'Да, при износване, пропукване или вторичен кариес старата пломба може да бъде подменена.'
        },
        {
          question: 'Какво означава пломба на 1, 2 или 3 повърхности?',
          answer: 'Това означава колко части от зъба са засегнати и възстановени по време на лечението.'
        },
        {
          question: 'Защо зъбът ми е чувствителен след пломба?',
          answer: 'Възможна е временна чувствителност, която обикновено намалява. Ако продължи, е добре да се направи контролен преглед.'
        },
        {
          question: 'Може ли кариесът да се лекува без болка?',
          answer: 'Да, в повечето случаи лечението може да бъде извършено комфортно с подходяща упойка.'
        }
      ]
    },
    {
      id: 'cosmetic',
      title: 'Естетична стоматология',
      items: [
        {
          question: 'Предлагате ли избелване на зъби?',
          answer: 'Да, в зависимост от услугите на клиниката може да се предложи професионално избелване след преглед и оценка.'
        },
        {
          question: 'Подходящо ли е избелването за всеки?',
          answer: 'Не винаги. Необходим е преглед, за да се установи дали процедурата е подходяща за конкретния случай.'
        },
        {
          question: 'Колко време се задържа ефектът от избелването?',
          answer: 'Продължителността зависи от навиците, храненето, пушенето и поддържането на добра хигиена.'
        },
        {
          question: 'Може ли избелването да причини чувствителност?',
          answer: 'Възможна е временна чувствителност, която обикновено отшумява.'
        },
        {
          question: 'Какво може да се направи при потъмнял зъб?',
          answer: 'Решението зависи от причината — възможни са почистване, избелване, възстановяване или други естетични процедури.'
        },
        {
          question: 'Могат ли да се коригират малки несъвършенства по предните зъби?',
          answer: 'Да, в много случаи това е възможно с подходящо естетично възстановяване.'
        }
      ]
    },
    {
      id: 'pediatric',
      title: 'Детска стоматология',
      items: [
        {
          question: 'На каква възраст трябва да бъде първият преглед на детето?',
          answer: 'Добре е първият преглед да бъде направен рано, за да се проследи правилното развитие и да се изгради спокойствие у детето.'
        },
        {
          question: 'Трябва ли да се лекуват млечните зъби?',
          answer: 'Да, млечните зъби са важни за правилното хранене, говор и развитието на постоянните зъби.'
        },
        {
          question: 'Какво е силанизиране?',
          answer: 'Силанизирането е профилактична процедура, при която се защитават дъвкателните повърхности на зъбите.'
        },
        {
          question: 'Какво е флуоризация?',
          answer: 'Флуоризацията подпомага укрепването на емайла и може да намали риска от кариеси.'
        },
        {
          question: 'Как да подготвя детето си за посещение?',
          answer: 'Говорете спокойно и позитивно, без да създавате напрежение или страх.'
        },
        {
          question: 'Какво да правя, ако детето се страхува от зъболекар?',
          answer: 'Важно е подходът да е спокоен и постепенен. Ние се стараем посещението да бъде приятно и щадящо.'
        }
      ]
    },
    {
      id: 'orthodontics',
      title: 'Ортодонтия',
      items: [
        {
          question: 'Предлагате ли консултация за криви зъби?',
          answer: 'Да, може да се направи преглед и да се обсъдят възможностите за корекция.'
        },
        {
          question: 'На каква възраст е подходяща ортодонтска консултация?',
          answer: 'И при деца, и при възрастни може да се направи консултация, според конкретния случай.'
        },
        {
          question: 'Само деца ли носят шини или брекети?',
          answer: 'Не, много възрастни също избират ортодонтско лечение.'
        },
        {
          question: 'Колко време продължава ортодонтското лечение?',
          answer: 'Продължителността е различна за всеки пациент и зависи от състоянието и избрания план.'
        }
      ]
    },
    {
      id: 'serious',
      title: 'Корени и сериозни лечения',
      items: [
        {
          question: 'Как да разбера дали имам нужда от лечение на коренови канали?',
          answer: 'Силна болка, чувствителност, подуване или проблеми при дъвчене могат да бъдат признак, но прегледът е решаващ.'
        },
        {
          question: 'Боли ли лечението на коренови канали?',
          answer: 'Съвременните методи и упойки правият процедурата значително по-комфортна.'
        },
        {
          question: 'Колко посещения са нужни за лечение на зъб?',
          answer: 'Зависи от състоянието на зъба и вида на лечението.'
        },
        {
          question: 'Може ли един силно увреден зъб да бъде спасен?',
          answer: 'В много случаи да, но това се определя след преглед и оценка.'
        }
      ]
    },
    {
      id: 'restoration',
      title: 'Импланти и коронки',
      items: [
        {
          question: 'Какво се прави, ако липсва зъб?',
          answer: 'Има различни варианти за възстановяване, които се обсъждат според конкретния случай.'
        },
        {
          question: 'Какво представлява коронката?',
          answer: 'Коронката е възстановяване, което покрива и защитава силно увреден зъб.'
        },
        {
          question: 'Кога се налага поставяне на коронка?',
          answer: 'Когато зъбът е отслабен, разрушен или след определени видове лечение.'
        },
        {
          question: 'Как се поддържат коронки и възстановявания?',
          answer: 'С добра ежедневна хигиена и редовни профилактични прегледи.'
        },
        {
          question: 'Имплантът естествен зъб ли е?',
          answer: 'Не, но е решение, което замества липсващ зъб и възстановява функцията и визията.'
        }
      ]
    },
    {
      id: 'aftercare',
      title: 'След лечение',
      items: [
        {
          question: 'Какво да избягвам след процедура?',
          answer: 'Това зависи от манипулацията. Лекарят ще ви даде конкретни указания след лечението.'
        },
        {
          question: 'Мога ли да пия кафе след почистване или избелване?',
          answer: 'След някои естетични процедури е препоръчително временно да се избягват оцветяващи храни и напитки.'
        },
        {
          question: 'Нормално ли е венците да са чувствителни след почистване?',
          answer: 'Да, възможно е да има краткотрайна чувствителност.'
        },
        {
          question: 'Кога трябва да се свържа с вас след лечение?',
          answer: 'Ако имате силна болка, подуване, продължителен дискомфорт или нещо ви притеснява.'
        }
      ]
    },
    {
      id: 'hygiene',
      title: 'Хигиена и домашна грижа',
      items: [
        {
          question: 'Колко пъти на ден трябва да мия зъбите си?',
          answer: 'Обикновено се препоръчва поне два пъти дневно.'
        },
        {
          question: 'Важно ли е използването на конец за зъби?',
          answer: 'Да, конецът помага да се почистват местата, до които четката не достига добре.'
        },
        {
          question: 'Каква четка за зъби да използвам?',
          answer: 'Изборът зависи от индивидуалните нужди, но меката четка често е добър вариант.'
        },
        {
          question: 'Електрическата четка по-добра ли е?',
          answer: 'Може да бъде много ефективна, ако се използва правилно.'
        },
        {
          question: 'Лошият дъх винаги ли е знак за проблем?',
          answer: 'Не винаги, но може да е свързан с орална хигиена, кариеси, венци или други причини.'
        }
      ]
    },
    {
      id: 'new-patients',
      title: 'За нови пациенти',
      items: [
        {
          question: 'Какво да нося на първото посещение?',
          answer: 'Ако разполагате с предишни снимки, документи или информация за предишни лечения, е полезно да ги донесете.'
        },
        {
          question: 'Мога ли да дойда само за консултация?',
          answer: 'Да, можете да запишете час само за консултация и преглед.'
        },
        {
          question: 'Как да избера подходящо лечение?',
          answer: 'След преглед ще получите насоки и ще обсъдим най-подходящите варианти за вашия случай.'
        },
        {
          question: 'Мога ли да задам всички въпроси, които ме притесняват?',
          answer: 'Разбира се. Важно е да се чувствате спокойни и добре информирани.'
        }
      ]
    }
  ] : [
    {
      id: 'general',
      title: 'General Questions',
      items: [
        {
          question: 'Do I need to book an appointment in advance?',
          answer: 'Yes, it is recommended to book an appointment in advance so that we can provide you with the necessary attention and a convenient time for your visit.'
        },
        {
          question: 'Do you accept emergency cases?',
          answer: 'Yes, we accept emergency cases whenever possible. In case of severe pain, swelling, or trauma, contact us as soon as possible.'
        },
        {
          question: 'How long does an examination last?',
          answer: 'The duration depends on the case, but a standard examination is usually short and sufficient for assessment and treatment guidance.'
        },
        {
          question: 'What does the primary examination include?',
          answer: 'The primary examination includes an inspection of the teeth, gums, and overall oral cavity condition, as well as a discussion of a suitable treatment plan.'
        },
        {
          question: 'Can I get a treatment plan?',
          answer: 'Yes, after an examination, we can prepare an individual treatment plan tailored to your condition and needs.'
        }
      ]
    },
    {
      id: 'comfort',
      title: 'Pain, Anesthesia, and Comfort',
      items: [
        {
          question: 'Does it hurt during treatment?',
          answer: 'We work with modern methods and anesthesia to make the procedures as comfortable and gentle as possible.'
        },
        {
          question: 'Do you use anesthesia?',
          answer: 'Yes, anesthesia is used when necessary to ensure peace and comfort during treatment.'
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (typeof item.answer === 'string' && item.answer.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(category => category.items.length > 0);

  const activeCategoryData = faqCategories.find(c => c.id === activeCategory) || faqCategories[0];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title={lang === 'bg' ? 'Често задавани въпроси' : 'Frequently Asked Questions'}
          subtitle={lang === 'bg' ? 'Всичко, което трябва да знаете за вашето дентално здраве и посещение при нас.' : 'Everything you need to know about your oral health and visit to our clinic.'}
          centered
        />
        
        <div className="mt-12 max-w-5xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-12 max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder={lang === 'bg' ? 'Потърсете въпрос...' : 'Search for a question...'}
              className="block w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {searchQuery ? (
            <div className="space-y-12">
              {filteredCategories.map((category) => (
                <div key={category.id}>
                  <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-accent rounded-full" />
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.items.map((faq, index) => {
                      const itemId = `${category.id}-${index}`;
                      return (
                        <FAQAccordionItem 
                          key={itemId}
                          id={itemId}
                          faq={faq}
                          isOpen={openIndex === itemId}
                          onToggle={() => setOpenIndex(openIndex === itemId ? null : itemId)}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
              {filteredCategories.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-slate-500 text-lg">
                    {lang === 'bg' ? 'Няма намерени резултати за вашето търсене.' : 'No results found for your search.'}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Category Sidebar */}
              <div className="lg:col-span-1 space-y-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setOpenIndex(null);
                    }}
                    className={cn(
                      "w-full text-left px-5 py-3 rounded-xl font-medium transition-all",
                      activeCategory === category.id 
                        ? "bg-primary text-white shadow-md" 
                        : "bg-white text-slate-600 hover:bg-slate-100"
                    )}
                  >
                    {category.title}
                  </button>
                ))}
              </div>

              {/* FAQ Items */}
              <div className="lg:col-span-3 space-y-4">
                <h3 className="text-2xl font-bold text-primary mb-6">{activeCategoryData.title}</h3>
                {activeCategoryData.items.map((faq, index) => {
                  const itemId = `${activeCategoryData.id}-${index}`;
                  return (
                    <FAQAccordionItem 
                      key={itemId}
                      id={itemId}
                      faq={faq}
                      isOpen={openIndex === itemId}
                      onToggle={() => setOpenIndex(openIndex === itemId ? null : itemId)}
                    />
                  );
                })}
              </div>
            </div>
          )}

          {/* Still Have Questions? */}
          <div className="mt-20 p-8 md:p-12 bg-primary rounded-[2rem] text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {lang === 'bg' ? 'Все още имате въпроси?' : 'Still have questions?'}
              </h3>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                {lang === 'bg' 
                  ? 'Ако не сте намерили отговора, който търсите, не се колебайте да се свържете с нас директно.'
                  : "If you haven't found the answer you're looking for, don't hesitate to contact us directly."}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="tel:+359877737772"
                  className="w-full sm:w-auto px-8 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-white transition-colors"
                >
                  {lang === 'bg' ? 'Обадете ни се' : 'Call Us Now'}
                </a>
                <a 
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
                >
                  {lang === 'bg' ? 'Свържете се с нас' : 'Contact Us'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQAccordionItem({ id, faq, isOpen, onToggle }: { id: string, faq: FAQItem, isOpen: boolean, onToggle: () => void }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-sm hover:shadow-md">
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-slate-800 text-lg leading-tight pr-4">{faq.question}</span>
        <div className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center transition-all",
          isOpen ? "bg-primary text-white" : "text-slate-400"
        )}>
          <ChevronDown 
            className={cn(
              "h-5 w-5 transition-transform duration-300",
              isOpen ? "rotate-180" : ""
            )} 
          />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-0">
              <div className="h-px bg-slate-100 mb-5" />
              <div className="text-slate-600 leading-relaxed text-lg">{faq.answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
