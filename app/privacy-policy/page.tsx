'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PrivacyPage() {
  const { lang } = useLanguage();
  
  const t = {
    bg: {
      title: 'Политика за поверителност',
      content: 'Тук ще намерите нашата политика за поверителност и как обработваме вашите данни.',
    },
    en: {
      title: 'Privacy Policy',
      content: 'Here you will find our privacy policy and how we handle your data.',
    }
  }[lang];

  return (
    <div className="pt-24 pb-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100">
          <h1 className="text-4xl font-bold text-primary mb-8">{t.title}</h1>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed">{t.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
