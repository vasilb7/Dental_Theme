'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, User } from 'lucide-react';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';

const BgFlag = ({ className = "w-6 h-4" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className={`rounded-sm overflow-hidden border border-slate-300 ${className}`}>
    <path fill="#fff" d="M0 0h3v2H0z"/>
    <path fill="#00966E" d="M0 .667h3v.667H0z"/>
    <path fill="#D62612" d="M0 1.333h3v.667H0z"/>
  </svg>
);

const EnFlag = ({ className = "w-6 h-4" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40" className={`rounded-sm overflow-hidden border border-slate-300 ${className}`}>
    <path fill="#012169" d="M0 0h60v40H0z"/>
    <path stroke="#fff" strokeWidth="6" d="M0 0l60 40M60 0L0 40"/>
    <path stroke="#C8102E" strokeWidth="4" d="M0 0l60 40M60 0L0 40"/>
    <path stroke="#fff" strokeWidth="10" d="M30 0v40M0 20h60"/>
    <path stroke="#C8102E" strokeWidth="6" d="M30 0v40M0 20h60"/>
  </svg>
);

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const pathname = usePathname();
  
  // Scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = lang === 'bg' 
    ? [
        { name: 'Начало', href: '/' },
        { name: 'За нас', href: '/za-nas' },
        { name: 'Услуги', href: '/uslugi' },
        { name: 'Екип', href: '/ekip' },
        { name: 'Цени', href: '/tseni' },
        { name: 'ЧЗВ', href: '/chzv' },
        { name: 'Контакти', href: '/kontakti' }
      ]
    : [
        { name: 'Home', href: '/en' },
        { name: 'About', href: '/en/about' },
        { name: 'Services', href: '/en/services' },
        { name: 'Team', href: '/en/team' },
        { name: 'Prices', href: '/en/prices' },
        { name: 'FAQ', href: '/en/faq' },
        { name: 'Contact', href: '/en/contact' }
      ];

  return (
    <>
      <motion.header 
        layout={false}
        className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href={lang === 'bg' ? "/" : "/en"} className="flex-shrink-0 flex items-center gap-3 group">
              <Image 
                src="/logo_header.png" 
                alt="DentalClinic Logo" 
                width={200}
                height={48}
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105" 
                priority
              />
              <span className="font-bold text-xl text-slate-800 tracking-tight hidden sm:block">VB DENTAL</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative text-sm font-medium transition-colors py-1 whitespace-nowrap ${
                      isActive ? 'text-primary' : 'text-slate-600 hover:text-primary'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden xl:flex items-center gap-4">
              <a href="tel:+359877737772" className="flex items-center gap-2 text-primary font-medium hover:opacity-80 transition-opacity whitespace-nowrap phone-ring-group">
                <Phone className="h-4 w-4 phone-ring-icon" />
                <span className="text-sm">+359 87 773 7772</span>
              </a>
              <Link href={lang === 'bg' ? "/zapazi-chas" : "/en/book-appointment"}>
                <PrimaryButton className="whitespace-nowrap">{lang === 'bg' ? 'Запази час' : 'Book Appointment'}</PrimaryButton>
              </Link>
              
              <div className="flex items-center gap-3 ml-2 border-l border-slate-200 pl-4">
                <Link 
                  href={lang === 'bg' ? "/auth" : "/en/auth"}
                  className="text-slate-600 hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-primary/5 focus:outline-none group"
                  aria-label={lang === 'bg' ? 'Профил' : 'Account'}
                  title={lang === 'bg' ? 'Профил' : 'Account'}
                >
                  <User className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </Link>
                
                <button 
                  onClick={toggleLang}
                  className="relative flex items-center justify-center w-7 h-5 transition-transform hover:scale-110 focus:outline-none" 
                  aria-label="Toggle Language" 
                  title={lang === 'bg' ? 'Switch to English' : 'Превключи на Български'}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={lang}
                      initial={{ rotateY: 90 }}
                      animate={{ rotateY: 0 }}
                      exit={{ rotateY: -90 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      {lang === 'bg' ? <BgFlag className="w-full h-full" /> : <EnFlag className="w-full h-full" />}
                    </motion.div>
                  </AnimatePresence>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden flex items-center gap-2 sm:gap-4">
              <Link 
                href={lang === 'bg' ? "/auth" : "/en/auth"}
                className="text-slate-600 hover:text-primary transition-colors focus:outline-none p-2"
                aria-label={lang === 'bg' ? 'Профил' : 'Account'}
              >
                <User className="h-6 w-6" />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-primary focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-white xl:hidden flex flex-col h-[100dvh] w-full overflow-hidden"
          >
            {/* Mobile Header */}
            <div className="flex h-20 items-center justify-between px-4 sm:px-8 border-b border-slate-100 shrink-0 bg-white">
              <Link href={lang === 'bg' ? "/" : "/en"} className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Image 
                  src="/logo_header.png" 
                  alt="DentalClinic Logo" 
                  width={150}
                  height={40}
                  className="h-10 w-auto object-contain" 
                />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-full hover:bg-slate-100 text-slate-600 transition-colors focus:outline-none active:scale-95"
                aria-label="Close menu"
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            {/* Mobile Content */}
            <div className="flex-grow overflow-y-auto px-6 sm:px-12 py-2">
              <nav className="flex flex-col gap-6">
                {navItems.map((item, idx) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, ease: "easeOut" }}
                    >
                      <Link
                        href={item.href}
                        className={`text-2xl font-bold transition-all duration-300 block active:translate-x-2 ${
                          isActive ? 'text-primary' : 'text-slate-800 hover:text-primary'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
                
                {/* Profile & Language integration */}
                <div className="h-px bg-slate-100 my-2" />
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <Link 
                    href={lang === 'bg' ? "/auth" : "/en/auth"}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-4 text-2xl font-bold text-slate-800 group active:translate-x-2 transition-transform"
                  >
                    <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <User className="h-5 w-5 group-hover:text-primary transition-colors" />
                    </div>
                    <span>{lang === 'bg' ? 'Моят Профил' : 'My Profile'}</span>
                  </Link>

                  <button 
                    onClick={toggleLang}
                    className="flex items-center gap-4 text-2xl font-bold text-slate-800 active:translate-x-2 transition-transform"
                  >
                    <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                       <div className="w-7 h-5 shadow-sm">
                         {lang === 'bg' ? <BgFlag className="w-full h-full" /> : <EnFlag className="w-full h-full" />}
                       </div>
                    </div>
                    <span>{lang === 'bg' ? 'Български' : 'English'}</span>
                  </button>
                </motion.div>
              </nav>
            </div>

            {/* Mobile Footer Area */}
            <div className="p-6 sm:px-12 pb-10 sm:pb-12 border-t border-slate-100 shrink-0 bg-white space-y-4">
              <a 
                href="tel:+359877737772" 
                className="flex items-center justify-center gap-3 py-4 w-full rounded-2xl bg-slate-50 border border-slate-100 text-primary font-bold shadow-sm active:scale-95 transition-all"
              >
                <Phone className="h-5 w-5" />
                <span className="text-xl">+359 87 773 7772</span>
              </a>

              <Link href={lang === 'bg' ? "/zapazi-chas" : "/en/book-appointment"} onClick={() => setIsMobileMenuOpen(false)} className="block">
                <PrimaryButton className="w-full py-5 text-xl rounded-2xl shadow-lg shadow-primary/20">
                  {lang === 'bg' ? 'Запази час' : 'Book Appointment'}
                </PrimaryButton>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
