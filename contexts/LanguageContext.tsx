'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

type Language = 'bg' | 'en';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
}

const urlMapping: Record<string, string> = {
  '/en/about': '/za-nas',
  '/en/services': '/uslugi',
  '/en/team': '/ekip',
  '/en/prices': '/tseni',
  '/en/faq': '/chzv',
  '/en/contact': '/kontakti',
  '/en/gallery': '/galeriya',
  '/en/book-appointment': '/zapazi-chas',
  '/en/privacy-policy': '/politika-za-poveritelnost',
  '/en/terms': '/obshti-usloviya',
  '/en': '/',
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
    const isEnRoute = pathname.startsWith('/en/') || pathname === '/en';
    const isBgRoute = Object.values(urlMapping).includes(pathname) || (pathname === '/' && !isEnRoute);
    
    let initialLang: Language = 'bg';
    
    if (isEnRoute) {
      initialLang = 'en';
    } else if (isBgRoute) {
      initialLang = 'bg';
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

    if (newLang === 'en') {
      if (bgToEnMapping[pathname]) {
        newPathname = bgToEnMapping[pathname];
      } else if (pathname === '/') {
        newPathname = '/en';
      } else if (!pathname.startsWith('/en')) {
        // Fallback for unexpected routes - don't prefix if we don't know it, or maybe just go home
        newPathname = '/en';
      }
    } else if (newLang === 'bg') {
      if (urlMapping[pathname]) {
        newPathname = urlMapping[pathname];
      } else if (pathname.startsWith('/en/')) {
         // Just a fallback in case we didn't map it
         newPathname = '/';
      } else if (pathname === '/en') {
        newPathname = '/';
      }
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
