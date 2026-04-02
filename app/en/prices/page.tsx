'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronRight, ChevronDown, Euro, Banknote, Info } from 'lucide-react';
import { priceData } from '@/lib/price-data';

export default function PricesPage() {
  const { lang } = useLanguage();
  const currentData = lang === 'bg' ? priceData.bg : priceData.en;
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItem = (itemName: string) => {
    setExpandedItem(expandedItem === itemName ? null : itemName);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <SectionHeading 
            title={lang === 'bg' ? 'Ценоразпис' : 'Price List'}
            subtitle={lang === 'bg' ? 'Прозрачни цени за всички наши дентални услуги. Ние вярваме в честната и открита комуникация с нашите пациенти.' : 'Transparent pricing for all our dental services. We believe in honest and open communication with our patients.'}
            centered
          />
        </div>

        <div className="mt-16 max-w-4xl mx-auto space-y-12">
          {currentData.map((section) => (
            <div
              key={section.category}
              className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden"
            >
              <div className="bg-primary px-8 py-4">
                <h2 className="text-xl font-bold text-white tracking-wide">
                  {section.category}
                </h2>
              </div>
              <div className="divide-y divide-slate-100">
                {section.items.map((item) => {
                  const isExpanded = expandedItem === item.name;
                  return (
                    <div 
                      key={item.name}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <button 
                        onClick={() => toggleItem(item.name)}
                        className="w-full text-left px-8 py-6 flex flex-col gap-4 focus:outline-none"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                          <div className="flex items-start gap-3">
                            {isExpanded ? (
                              <ChevronDown className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                            ) : (
                              <ChevronRight className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                            )}
                            <span className="text-slate-900 font-bold text-lg leading-tight">{item.name}</span>
                          </div>
                          <div className="flex items-center gap-6 shrink-0 ml-8 sm:ml-0">
                            <div className="flex items-center gap-1.5 text-primary font-bold">
                              <Euro className="h-4 w-4 text-accent" />
                              <span>{item.priceEur.replace(' €', '')}</span>
                              <span className="text-xs font-medium text-slate-400 ml-0.5">EUR</span>
                            </div>
                            <div className="h-4 w-px bg-slate-200 hidden sm:block" />
                            <div className="flex items-center gap-1.5 text-slate-900 font-bold">
                              <Banknote className="h-4 w-4 text-accent" />
                              <span>{item.priceBgn.split(' ')[0]}</span>
                              <span className="text-xs font-medium text-slate-400 ml-0.5">{lang === 'bg' ? 'ЛВ' : 'BGN'}</span>
                            </div>
                          </div>
                        </div>
                      </button>
                      
                      {isExpanded && item.description && (
                        <div className="px-8 pb-6 pt-0">
                          <div className="flex items-start gap-3 pl-8 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                            <Info className="h-4 w-4 text-accent shrink-0 mt-1" />
                            <p className="text-slate-600 text-sm leading-relaxed italic">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center p-8 bg-white rounded-3xl border border-dashed border-slate-300 max-w-2xl mx-auto">
          <p className="text-slate-500 text-sm leading-relaxed">
            {lang === 'bg' 
              ? '* Посочените цени са ориентировъчни. Окончателната цена се определя след обстоен преглед и изготвяне на индивидуален план за лечение.'
              : '* The listed prices are indicative. The final price is determined after a thorough examination and the preparation of an individual treatment plan.'}
          </p>
        </div>
      </div>
    </div>
  );
}
