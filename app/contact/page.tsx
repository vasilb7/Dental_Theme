'use client';

import React, { useState, useEffect } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react';
import { useFormDraft } from '@/hooks/useFormDraft';

export default function ContactPage() {
  const { lang } = useLanguage();
  const [draft, setDraft, clearDraft] = useFormDraft('contact-draft', { name: '', phone: '', email: '', subject: '', message: '' });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const contactInfo = {
    bg: {
      title: 'Контакти',
      subtitle: 'Свържете се с нас за запитвания или запазване на час. Ние сме тук, за да ви помогнем.',
      address: 'гр. София, ул. Примерна 123',
      phone: '+359 87 773 7772',
      email: 'info@dentalclinic.bg',
      hours: 'Понеделник - Петък: 09:00 - 18:00',
      weekend: 'Събота - Неделя: Почивен ден',
      form: {
        title: 'Изпратете ни съобщение',
        name: 'Вашето име',
        phone: 'Телефонен номер',
        email: 'Имейл адрес',
        subject: 'Относно',
        subjectOptions: [
          'Изберете тема...',
          'Запазване на час',
          'Общо запитване',
          'Спешен случай',
          'Информация за цени',
          'Друго'
        ],
        message: 'Съобщение',
        submit: 'Изпрати съобщение'
      }
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Get in touch with us for inquiries or to book an appointment. We are here to help you.',
      address: '123 Example St, Sofia, Bulgaria',
      phone: '+359 87 773 7772',
      email: 'info@dentalclinic.bg',
      hours: 'Monday - Friday: 09:00 - 18:00',
      weekend: 'Saturday - Sunday: Closed',
      form: {
        title: 'Send us a message',
        name: 'Your Name',
        phone: 'Phone Number',
        email: 'Email Address',
        subject: 'Subject',
        subjectOptions: [
          'Select a subject...',
          'Book an Appointment',
          'General Inquiry',
          'Emergency',
          'Pricing Information',
          'Other'
        ],
        message: 'Message',
        submit: 'Send Message'
      }
    }
  };

  const t = lang === 'bg' ? contactInfo.bg : contactInfo.en;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent!');
    clearDraft();
  };

  if (!isMounted) return null;

  return (
    <div className="pt-24 pb-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title={t.title}
          subtitle={t.subtitle}
          centered
        />

        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {lang === 'bg' ? 'Информация за контакт' : 'Contact Information'}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{lang === 'bg' ? 'Адрес' : 'Address'}</h4>
                    <p className="text-slate-600 mt-1">{t.address}</p>
                  </div>
                </div>

                <a 
                  href="tel:+359877737772" 
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{lang === 'bg' ? 'Телефон' : 'Phone'}</h4>
                    <p className="text-slate-600 mt-1">{t.phone}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{lang === 'bg' ? 'Имейл' : 'Email'}</h4>
                    <p className="text-slate-600 mt-1">{t.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{lang === 'bg' ? 'Работно време' : 'Working Hours'}</h4>
                    <p className="text-slate-600 mt-1">{t.hours}</p>
                    <p className="text-slate-500 text-sm mt-0.5">{t.weekend}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="bg-slate-200 rounded-3xl h-64 w-full overflow-hidden relative border border-slate-100 shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.338780182657!2d23.3218675!3d42.6977082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa856d81461971%3A0x6b9762111d431c94!2sSofia%2C%20Bulgaria!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">{t.form.title}</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">{t.form.name} <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={draft.name}
                    onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder={t.form.name}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">{t.form.phone} <span className="text-red-500">*</span></label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    value={draft.phone}
                    onChange={(e) => setDraft({ ...draft, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder={t.form.phone}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">{t.form.email} <span className="text-red-500">*</span></label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  value={draft.email}
                  onChange={(e) => setDraft({ ...draft, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder={t.form.email}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700">{t.form.subject}</label>
                <div className="relative">
                  <select 
                    id="subject" 
                    value={draft.subject}
                    onChange={(e) => setDraft({ ...draft, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none bg-white"
                  >
                    <option value="" disabled>{t.form.subjectOptions[0]}</option>
                    {t.form.subjectOptions.slice(1).map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">{t.form.message}</label>
                  <span className="text-xs text-slate-500">{draft.message.length}/300</span>
                </div>
                <textarea 
                  id="message" 
                  rows={5}
                  maxLength={300}
                  value={draft.message}
                  onChange={(e) => setDraft({ ...draft, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder={t.form.message}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-4 px-6 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
              >
                {t.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
