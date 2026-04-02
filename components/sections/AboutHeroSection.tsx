'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Heart, Sparkles } from 'lucide-react';

export function AboutHeroSection() {
  const { lang } = useLanguage();

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-[#4a7aa1] to-[#f0f9ff]">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        {[
          { top: '15%', left: '10%', size: 40, delay: 0 },
          { top: '25%', left: '85%', size: 60, delay: 0.5 },
          { top: '65%', left: '15%', size: 50, delay: 1 },
          { top: '75%', left: '80%', size: 45, delay: 1.5 },
          { top: '45%', left: '50%', size: 55, delay: 2 },
          { top: '10%', left: '40%', size: 42, delay: 2.5 },
        ].map((item, i) => (
          <motion.div
            key={`hero-star-${i}`}
            className="absolute text-white/10"
            style={{ 
              top: item.top, 
              left: item.left 
            }}
            animate={{ 
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity,
              delay: item.delay
            }}
          >
            {i % 2 === 0 ? <Star size={item.size} /> : <Sparkles size={item.size} />}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ delay: 0.2, duration: 0.5 }}
               className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 text-sm font-bold uppercase tracking-widest mb-10"
            >
              <Heart className="w-4 h-4 fill-white" />
              {lang === 'bg' ? 'Клиника с душа' : 'A Clinic with a Soul'}
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-10 leading-[1.05] tracking-tight">
              {lang === 'bg' ? (
                <>Ние вярваме в <span className="text-accent underline decoration-white/20 underline-offset-8">твоята</span> усмивка</>
              ) : (
                <>We believe in <span className="text-accent underline decoration-white/20 underline-offset-8">your</span> smile</>
              )}
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium"
            >
              {lang === 'bg' 
                ? 'Добре дошли в мястото, където професионализмът среща приятелската атмосфера. Ние не просто лекуваме зъби, ние променяме животи.'
                : 'Welcome to the place where professionalism meets a friendly atmosphere. We don\'t just treat teeth, we change lives.'}
            </motion.p>
          </motion.div>
        </div>
      </div>
      
      {/* Modern Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg className="relative block w-full h-24 text-[#f0f9ff]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.83C0,95.83,153.19,101.4,270,10,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}
