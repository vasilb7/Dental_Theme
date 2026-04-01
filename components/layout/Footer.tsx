'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { lang } = useLanguage();
  
  const links = lang === 'bg' 
    ? [
        { name: 'Нашите услуги', href: '/uslugi' },
        { name: 'Запознайте се с екипа', href: '/ekip' },
        { name: 'Цени и осигуровки', href: '/tseni' },
        { name: 'Запази час', href: '/zapazi-chas' }
      ]
    : [
        { name: 'Our Services', href: '/services' },
        { name: 'Meet the Team', href: '/team' },
        { name: 'Pricing & Insurance', href: '/prices' },
        { name: 'Book Appointment', href: '/book-appointment' }
      ];

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image 
                src="/logo_footer.png" 
                alt="DentalClinic Logo" 
                width={200} 
                height={96}  
                style={{ filter: "brightness(0) saturate(100%) invert(86%) sepia(8%) saturate(1652%) hue-rotate(170deg) brightness(85%) contrast(93%)" }}
                className="h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-secondary text-sm leading-relaxed">
              {lang === 'bg' 
                ? 'Предоставяме първокласна дентална грижа с фокус върху комфорта, модерните технологии и персонализираните планове за лечение за цялото семейство.'
                : 'Providing premium dental care with a focus on comfort, modern technology, and personalized treatment plans for the whole family.'}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{lang === 'bg' ? 'Свържете се с нас' : 'Contact Us'}</h3>
            <ul className="space-y-4 text-sm text-secondary">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-accent" />
                <span>{lang === 'bg' ? <>ул. Усмивка 123, офис 400<br />София, 1000</> : <>123 Smile Avenue, Suite 400<br />Sofia, 1000</>}</span>
              </li>
              <li className="flex items-center">
                <a href="tel:+359877737772" className="flex items-center gap-3 group">
                  <Phone className="h-5 w-5 shrink-0 text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-secondary group-hover:text-white transition-colors">+359 87 773 7772</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-accent" />
                <span>hello@dentalclinic.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{lang === 'bg' ? 'Работно време' : 'Working Hours'}</h3>
            <ul className="space-y-4 text-sm text-secondary">
              <li className="flex items-start gap-4">
                <Clock className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                <div className="flex flex-col w-full max-w-[220px] space-y-2">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="font-medium text-white/90">{lang === 'bg' ? 'Пон - Пет' : 'Mon - Fri'}</span>
                    <span className="text-white">{lang === 'bg' ? '8:00 - 18:00' : '8am - 6pm'}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="font-medium text-white/90">{lang === 'bg' ? 'Събота' : 'Saturday'}</span>
                    <span className="text-white">{lang === 'bg' ? '9:00 - 14:00' : '9am - 2pm'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white/90">{lang === 'bg' ? 'Неделя' : 'Sunday'}</span>
                    <span className="text-accent font-medium">{lang === 'bg' ? 'Затворено' : 'Closed'}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{lang === 'bg' ? 'Бързи връзки' : 'Quick Links'}</h3>
            <ul className="space-y-3 text-sm text-secondary">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary/30 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-secondary">
          <p>&copy; {new Date().getFullYear()} VB DENTAL. {lang === 'bg' ? 'Всички права запазени.Сайта е изработен от VB CREATIVE' : 'All rights reserved. Site made by VB CREATIVE'}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href={lang === 'bg' ? "/politika-za-poveritelnost" : "/privacy-policy"} className="hover:text-white transition-colors">{lang === 'bg' ? 'Политика за поверителност' : 'Privacy Policy'}</Link>
            <Link href={lang === 'bg' ? "/obshti-usloviya" : "/terms"} className="hover:text-white transition-colors">{lang === 'bg' ? 'Условия за ползване' : 'Terms of Service'}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
