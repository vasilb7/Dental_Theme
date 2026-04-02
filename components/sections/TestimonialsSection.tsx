'use client';

import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function TestimonialsSection() {
  const { lang } = useLanguage();

  const testimonials = lang === 'bg' ? [
    {
      name: 'Мария Симеонова',
      text: 'Изключително доволна съм от отношението и професионализма. Клиниката е на световно ниво, а резултатът от избелването надмина очакванията ми!',
      rating: 5,
      image: '/review_temple/woman_selfie.jpeg',
      source: 'Google Review'
    },
    {
      name: 'Николай Петров',
      text: 'Най-добрата клиника във Варна. Д-р Стефанова и нейният екип са невероятни професионалисти. Процедурата премина бързо и напълно безболезнено.',
      rating: 5,
      image: '/review_temple/Man_portrait_white_202603220741.jpeg',
      source: 'Google Review'
    },
    {
      name: 'Елена Димитрова',
      text: 'Благодаря на целия екип за прекрасната усмивка! Вече не се притеснявам да се усмихвам на снимки. Препоръчвам на всеки, който търси качество.',
      rating: 5,
      image: '/review_temple/Woman_looking_up_202603220801.jpeg',
      source: 'Google Review'
    }
  ] : [
    {
      name: 'Maria Simeonova',
      text: 'I am extremely satisfied with the attitude and professionalism. The clinic is world-class, and the whitening results exceeded my expectations!',
      rating: 5,
      image: '/review_temple/woman_selfie.jpeg',
      source: 'Google Review'
    },
    {
      name: 'Nikolay Petrov',
      text: 'The best clinic in Varna. Dr. Stefanova and her team are incredible professionals. The procedure was quick and completely painless.',
      rating: 5,
      image: '/review_temple/Man_portrait_white_202603220741.jpeg',
      source: 'Google Review'
    },
    {
      name: 'Elena Dimitrova',
      text: 'Thank you to the whole team for the beautiful smile! I am no longer afraid to smile in photos. I recommend it to everyone looking for quality.',
      rating: 5,
      image: '/review_temple/Woman_looking_up_202603220801.jpeg',
      source: 'Google Review'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title={lang === 'bg' ? 'Какво казват нашите пациенти' : 'What Our Patients Say'}
          subtitle={lang === 'bg' ? 'Доверието се гради върху реални резултати. Запознайте се с отзивите на нашите пациенти.' : 'Trust is built on real results. Read our patients\' reviews.'}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-2xl p-8 relative flex flex-col h-full">
              <Quote className="absolute top-6 right-6 h-10 w-10 text-accent/30" />
              <div className="flex text-yellow-400 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-6 relative z-10 flex-grow">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    fill
                    className="object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-bold text-primary leading-tight">{testimonial.name}</p>
                  <p className="text-[10px] font-bold text-blue-500 mt-1 uppercase tracking-tighter flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-blue-500" />
                    {testimonial.source}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
