'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export function FullGallerySection() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = lang === 'bg' ? [
    { id: 'all', name: 'Всички' },
    { id: 'implants', name: 'Импланти' },
    { id: 'veneers', name: 'Фасети' },
    { id: 'whitening', name: 'Избелване' },
    { id: 'ortho', name: 'Ортодонтия' }
  ] : [
    { id: 'all', name: 'All' },
    { id: 'implants', name: 'Implants' },
    { id: 'veneers', name: 'Veneers' },
    { id: 'whitening', name: 'Whitening' },
    { id: 'ortho', name: 'Orthodontics' }
  ];

  const galleryItems = lang === 'bg' ? [
    { id: 1, category: 'implants', title: 'Възстановяване с импланти', image: 'https://picsum.photos/seed/gallery-1/800/600' },
    { id: 2, category: 'veneers', title: 'Холивудска усмивка с фасети', image: 'https://picsum.photos/seed/gallery-2/800/600' },
    { id: 3, category: 'whitening', title: 'Професионално избелване', image: 'https://picsum.photos/seed/gallery-3/800/600' },
    { id: 4, category: 'ortho', title: 'Корекция с алайнери', image: 'https://picsum.photos/seed/gallery-4/800/600' },
    { id: 5, category: 'implants', title: 'Цялостно възстановяване', image: 'https://picsum.photos/seed/gallery-5/800/600' },
    { id: 6, category: 'veneers', title: 'Естетична корекция', image: 'https://picsum.photos/seed/gallery-6/800/600' },
    { id: 7, category: 'whitening', title: 'Бляскава усмивка', image: 'https://picsum.photos/seed/gallery-7/800/600' },
    { id: 8, category: 'ortho', title: 'Детска ортодонтия', image: 'https://picsum.photos/seed/gallery-8/800/600' },
    { id: 9, category: 'veneers', title: 'Дигитален дизайн на усмивката', image: 'https://picsum.photos/seed/gallery-9/800/600' }
  ] : [
    { id: 1, category: 'implants', title: 'Implant Restoration', image: 'https://picsum.photos/seed/gallery-1/800/600' },
    { id: 2, category: 'veneers', title: 'Hollywood Smile with Veneers', image: 'https://picsum.photos/seed/gallery-2/800/600' },
    { id: 3, category: 'whitening', title: 'Professional Whitening', image: 'https://picsum.photos/seed/gallery-3/800/600' },
    { id: 4, category: 'ortho', title: 'Correction with Aligners', image: 'https://picsum.photos/seed/gallery-4/800/600' },
    { id: 5, category: 'implants', title: 'Full Mouth Restoration', image: 'https://picsum.photos/seed/gallery-5/800/600' },
    { id: 6, category: 'veneers', title: 'Aesthetic Correction', image: 'https://picsum.photos/seed/gallery-6/800/600' },
    { id: 7, category: 'whitening', title: 'Brilliant Smile', image: 'https://picsum.photos/seed/gallery-7/800/600' },
    { id: 8, category: 'ortho', title: 'Pediatric Orthodontics', image: 'https://picsum.photos/seed/gallery-8/800/600' },
    { id: 9, category: 'veneers', title: 'Digital Smile Design', image: 'https://picsum.photos/seed/gallery-9/800/600' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-8 py-3 rounded-full font-bold transition-all border-2",
                activeCategory === category.id 
                  ? "bg-primary border-primary text-white shadow-lg" 
                  : "bg-white border-slate-100 text-slate-500 hover:border-primary hover:text-primary"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all"
              >
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-accent font-bold uppercase tracking-widest text-xs mb-2">
                    {categories.find(c => c.id === item.category)?.name}
                  </span>
                  <h3 className="text-xl font-bold text-white leading-tight">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
