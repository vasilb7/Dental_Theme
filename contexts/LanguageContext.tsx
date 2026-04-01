'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

type Language = 'bg' | 'en';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
}

const urlMapping: Record<string, string> = {
  '/about': '/za-nas',
  '/services': '/uslugi',
  '/team': '/ekip',
  '/prices': '/tseni',
  '/faq': '/chzv',
  '/contact': '/kontakti',
  '/gallery': '/galeriya',
  '/book-appointment': '/zapazi-chas',
  '/privacy-policy': '/politika-za-poveritelnost',
  '/terms': '/obshti-usloviya',
};

const bgToEnMapping = Object.fromEntries(
  Object.entries(urlMapping).map(([en, bg]) => [bg, en])
);

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [state, setState] = useState<{ lang: Language; mounted: boolean }>({
    lang: 'bg',
    mounted: false,
  });

  useEffect(() => {
    // Detect language from URL first, then localStorage
    const isBgRoute = Object.values(urlMapping).includes(pathname);
    const isEnRoute = Object.keys(urlMapping).includes(pathname);
    
    let initialLang: Language = 'bg';
    
    if (isBgRoute) {
      initialLang = 'bg';
    } else if (isEnRoute) {
      initialLang = 'en';
    } else {
      const savedLang = typeof window !== 'undefined' ? localStorage.getItem('preferredLang') as Language : 'bg';
      initialLang = (savedLang === 'bg' || savedLang === 'en') ? savedLang : 'bg';
    }
    
    const timer = setTimeout(() => {
      setState({ lang: initialLang, mounted: true });
      localStorage.setItem('preferredLang', initialLang);
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (state.mounted) {
      document.documentElement.lang = state.lang;
    }
  }, [state.lang, state.mounted]);

  const toggleLang = () => {
    const newLang = state.lang === 'bg' ? 'en' : 'bg';
    let newPathname = pathname;

    if (newLang === 'en' && bgToEnMapping[pathname]) {
      newPathname = bgToEnMapping[pathname];
    } else if (newLang === 'bg' && urlMapping[pathname]) {
      newPathname = urlMapping[pathname];
    }

    localStorage.setItem('preferredLang', newLang);
    setState((prev) => ({ ...prev, lang: newLang }));
    
    if (newPathname !== pathname) {
      router.push(newPathname);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang: state.mounted ? state.lang : 'bg', toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
