'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    // If user has permanently dismissed the sticky, don't show anything
    const isDismissed = sessionStorage.getItem('discountPopupDismissed');
    if (isDismissed) return;

    // Check if the user has already seen the popup in this session or ever
    const hasSeenPopup = sessionStorage.getItem('hasSeenDiscountPopup');
    if (!hasSeenPopup) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      // If they've seen the big popup before (e.g., closed it), show sticky instantly on new navigations
      setTimeout(() => setShowSticky(true), 0);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setShowSticky(true);
    sessionStorage.setItem('hasSeenDiscountPopup', 'true');
  };

  const handleFinalClose = (e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering the sticky open event
    setShowSticky(false);
    sessionStorage.setItem('discountPopupDismissed', 'true');
  };

  const handleOpenPopup = () => {
    setShowSticky(false);
    setIsOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpen(false);
    setShowSticky(false);
    sessionStorage.setItem('hasSeenDiscountPopup', 'true');
    sessionStorage.setItem('discountPopupDismissed', 'true'); // Once they get discount, don't nag with sticky
  };

  if (!isOpen && !showSticky) return null;

  return (
    <>
      {/* Sticky Tab */}
      {showSticky && (
        <div 
          onClick={handleOpenPopup}
          className="fixed bottom-8 sm:bottom-12 left-0 z-50 bg-[#0A1128] text-white py-3 pl-5 pr-6 sm:pl-6 sm:pr-8 rounded-r-2xl shadow-2xl cursor-pointer hover:bg-[#121c3b] transition-all transform flex items-center border border-l-0 border-white/10 group animate-in slide-in-from-left duration-500"
        >
          <span className="font-semibold tracking-wider text-xs sm:text-sm md:text-base whitespace-nowrap">
            {lang === 'bg' ? 'ПОДАРЪК ЗА ТЕБ' : 'A GIFT FOR YOU'}
          </span>
          <button
            onClick={handleFinalClose}
            className="absolute -top-2 -right-2 bg-black text-white rounded-full p-1 border-2 border-white hover:scale-110 transition-transform shadow-md z-10"
            aria-label="Permanently close popup"
          >
            <X className="w-3 h-3 stroke-[3]" />
          </button>
        </div>
      )}

      {/* Main Popup Content */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div 
            className="relative w-full max-w-[900px] h-auto lg:h-[550px] bg-[#0A1128] rounded-3xl shadow-2xl flex overflow-hidden lg:flex-row flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 z-50 rounded-full p-2 text-slate-800 bg-[#f1f5f9] hover:bg-white transition-colors shadow-md"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Desktop Layout */}
            <div className="hidden lg:flex w-full h-full relative">
              {/* Left Content Pane */}
              <div className="w-[50%] flex flex-col justify-center pl-10 pr-6 relative z-20">
                <div className="max-w-[320px]">
                  <h2 className="text-xl md:text-2xl font-medium text-white/90 mb-2">
                    {lang === 'bg' ? 'Присъединете се към света на' : 'Join the world of'}
                  </h2>
                  <h3 className="text-3xl md:text-5xl font-light tracking-[0.15em] text-white mb-8">
                    VB DENTAL
                  </h3>
                  
                  <p className="text-slate-300 text-sm md:text-base mb-8 leading-relaxed font-medium">
                    {lang === 'bg' 
                      ? <>Като жест за „добре дошъл“, ще получите <span className="text-white font-bold">10% отстъпка</span> от първото си посещение.</>
                      : <>As a welcome gesture, you will receive a <span className="text-white font-bold">10% discount</span> on your first visit.</>}
                  </p>

                  <form 
                    onSubmit={handleSubmit} 
                    className="flex flex-col gap-4 w-full"
                  >
                    <input 
                      type="email" 
                      required
                      placeholder={lang === 'bg' ? 'Въведете имейла си' : 'Enter your email'} 
                      className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
                    />
                    <button 
                      type="submit"
                      className="w-full px-6 py-4 rounded-full bg-[#f1f5f9] hover:bg-white text-slate-800 font-bold transition-colors shadow-lg"
                    >
                      {lang === 'bg' ? 'Вземи 10% отстъпка' : 'Get 10% off'}
                    </button>
                  </form>
                </div>
              </div>

              {/* Right Image Pane with perfect white circle background */}
              <div className="absolute top-0 bottom-0 right-0 w-[50%] pointer-events-none z-10">
                {/* Tooth shape background */}
                <svg 
                  viewBox="0 0 448 512" 
                  className="absolute top-1/2 -translate-y-1/2 right-[10px] w-[600px] h-[520px] fill-white drop-shadow-2xl"
                >
                  <path d="M443.98 96.25c-11.01-45.22-47.11-82.06-92.01-93.72-32.19-8.36-63 5.1-89.14 24.33-3.25 2.39-6.96 3.73-10.5 5.48l28.32 18.21c7.42 4.77 9.58 14.67 4.8 22.11-4.46 6.95-14.27 9.86-22.11 4.8L162.83 12.84c-20.7-10.85-43.38-16.4-66.81-10.31-44.9 11.67-81 48.5-92.01 93.72-10.13 41.62-.42 80.81 21.5 110.43 23.36 31.57 32.68 68.66 36.29 107.35 4.4 47.16 10.33 94.16 20.94 140.32l7.8 33.95c3.19 13.87 15.49 23.7 29.67 23.7 13.97 0 26.15-9.55 29.54-23.16l34.47-138.42c4.56-18.32 20.96-31.16 39.76-31.16s35.2 12.85 39.76 31.16l34.47 138.42c3.39 13.61 15.57 23.16 29.54 23.16 14.18 0 26.48-9.83 29.67-23.7l7.8-33.95c10.61-46.15 16.53-93.16 20.94-140.32 3.61-38.7 12.93-75.78 36.29-107.35 21.95-29.61 31.66-68.8 21.53-110.43z"/>
                </svg>
                
                {/* The actual image */}
                {/* 
                  ИНСТРУКЦИИ ЗА МЕСТЕНЕ НА СНИМКАТА:
                  - Наляво / Надясно: променете `translate-x-[-1rem]` (напр. `translate-x-4` = надясно, `-translate-x-8` = наляво)
                  - Нагоре / Надолу: променете `translate-y-4` (положително = надолу)
                  - Размер: променете `scale-[1.1]` (по-голямо число = по-голяма снимка)
                */}
                <div className="absolute inset-0 z-20 pointer-events-none flex items-end justify-end">
                  <div className="relative w-[160%] h-[115%] translate-x-[17rem] translate-y-4 scale-[2.4] origin-bottom-right">
                    <Image 
                      src="/popup.png" 
                      alt="Welcome to our clinic" 
                      fill 
                      className="object-contain object-right-bottom drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="flex lg:hidden flex-col w-full h-full relative py-12 px-6">
              <div className="flex-1 flex flex-col justify-center relative z-20">
                <h2 className="text-lg font-medium text-white/90 mb-2 text-center">
                  {lang === 'bg' ? 'Присъединете се към света на' : 'Join the world of'}
                </h2>
                <h3 className="text-2xl font-light tracking-[0.15em] text-white mb-6 text-center">
                  VB DENTAL
                </h3>
                
                <p className="text-slate-300 text-sm mb-8 leading-relaxed text-center">
                  {lang === 'bg' 
                    ? <>Като жест за „добре дошъл“, ще получите <span className="text-white font-bold">10% отстъпка</span> от първото си посещение.</>
                    : <>As a welcome gesture, you will receive a <span className="text-white font-bold">10% discount</span> on your first visit.</>}
                </p>

                <form 
                  onSubmit={handleSubmit} 
                  className="flex flex-col gap-4 w-full max-w-sm mx-auto"
                >
                  <input 
                    type="email" 
                    required
                    placeholder={lang === 'bg' ? 'Въведете имейла си' : 'Enter your email'} 
                    className="w-full px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/50 transition-all text-sm"
                  />
                  <button 
                    type="submit"
                    className="w-full px-5 py-3 rounded-full bg-[#f1f5f9] hover:bg-white text-slate-800 font-bold transition-colors shadow-lg text-sm"
                  >
                    {lang === 'bg' ? 'Вземи 10% отстъпка' : 'Get 10% off'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Backdrop overlay listener */}
          <div className="absolute inset-0 z-[-1]" onClick={handleClose} />
        </div>
      )}
    </>
  );
}
