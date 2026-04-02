'use client';

import { useState, useEffect } from 'react';
import { useFormDraft } from '@/hooks/useFormDraft';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

export default function BookAppointmentPage() {
  const { lang } = useLanguage();
  const [draft, setDraft, clearDraft] = useFormDraft('appointment-draft', { name: '', phone: '', service: '', date: '', time: '' });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(lang === 'bg' ? 'Заявката е изпратена успешно!' : 'Appointment requested successfully!');
    clearDraft();
  };

  if (!isMounted) return null;

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <SectionHeading 
          title={lang === 'bg' ? 'Запази час' : 'Book Appointment'}
          subtitle={lang === 'bg' ? 'Моля, попълнете формата по-долу и ние ще се свържем с вас възможно най-скоро, за да потвърдим часа ви.' : 'Please fill out the form below and we will contact you as soon as possible to confirm your appointment.'}
          centered
        />

        <div className="mt-12 bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">{lang === 'bg' ? 'Име' : 'Name'} <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  value={draft.name}
                  onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  required
                  placeholder={lang === 'bg' ? 'Вашето име' : 'Your name'}
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">{lang === 'bg' ? 'Телефон' : 'Phone'} <span className="text-red-500">*</span></label>
                <input 
                  type="tel" 
                  value={draft.phone}
                  onChange={(e) => setDraft({ ...draft, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  required
                  placeholder={lang === 'bg' ? 'Вашият телефон' : 'Your phone number'}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">{lang === 'bg' ? 'Услуга' : 'Service'}</label>
              <div className="relative">
                <select 
                  value={draft.service}
                  onChange={(e) => setDraft({ ...draft, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none bg-white"
                >
                  <option value="" disabled>{lang === 'bg' ? 'Изберете услуга...' : 'Select a service...'}</option>
                  <option value="consultation">{lang === 'bg' ? 'Обща консултация' : 'General Consultation'}</option>
                  <option value="whitening">{lang === 'bg' ? 'Избелване на зъби' : 'Teeth Whitening'}</option>
                  <option value="implants">{lang === 'bg' ? 'Зъбни импланти' : 'Dental Implants'}</option>
                  <option value="orthodontics">{lang === 'bg' ? 'Ортодонтия' : 'Orthodontics'}</option>
                  <option value="other">{lang === 'bg' ? 'Друго' : 'Other'}</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">{lang === 'bg' ? 'Предпочитана дата' : 'Preferred Date'}</label>
                <input 
                  type="date" 
                  value={draft.date}
                  onChange={(e) => setDraft({ ...draft, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">{lang === 'bg' ? 'Предпочитан час' : 'Preferred Time'}</label>
                <input 
                  type="time" 
                  value={draft.time}
                  onChange={(e) => setDraft({ ...draft, time: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
            </div>

            <PrimaryButton type="submit" className="w-full py-4 text-lg mt-4">
              {lang === 'bg' ? 'Изпрати заявка' : 'Submit Request'}
            </PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
}
