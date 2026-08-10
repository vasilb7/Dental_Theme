'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, Mail, Lock, User, Phone, Eye, EyeOff } from 'lucide-react';
import { AIBadge } from '@/components/ui/AIBadge';

// --- Typewriter Component ---
interface TypewriterProps {
  text: string | string[];
  speed?: number;
  cursor?: string;
  loop?: boolean;
  deleteSpeed?: number;
  delay?: number;
  className?: string;
}

function Typewriter({
  text,
  speed = 100,
  cursor = "|",
  loop = false,
  deleteSpeed = 50,
  delay = 1500,
  className,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textArrayIndex, setTextArrayIndex] = useState(0);

  const textArray = Array.isArray(text) ? text : [text];
  const currentText = textArray[textArrayIndex] || "";

  useEffect(() => {
    if (!currentText) return;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentIndex < currentText.length) {
            setDisplayText((prev) => prev + currentText[currentIndex]);
            setCurrentIndex((prev) => prev + 1);
          } else if (loop) {
            setTimeout(() => setIsDeleting(true), delay);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText((prev) => prev.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex(0);
            setTextArrayIndex((prev) => (prev + 1) % textArray.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed,
    );

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    isDeleting,
    currentText,
    loop,
    speed,
    deleteSpeed,
    delay,
    displayText,
    text,
    textArrayIndex,
    textArray.length
  ]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">{cursor}</span>
    </span>
  );
}

export default function AuthPage() {
  const { lang } = useLanguage();
  const [isLogin, setIsLogin] = useState(true);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
  });

  const t = {
    bg: {
      loginTitle: 'Добре дошли отново',
      registerTitle: 'Създайте профил',
      loginSubtitle: 'Влезте в своя профил, за да управлявате вашите часове.',
      registerSubtitle: 'Регистрирайте се за по-лесно запазване на часове.',
      googleBtn: 'Вход с Google',
      emailLabel: 'Имейл адрес',
      passwordLabel: 'Парола',
      nameLabel: 'Име и Фамилия',
      phoneLabel: 'Телефонен номер',
      terms: {
        prefix: 'Приемам ',
        tos: 'Общите условия',
        and: ' и ',
        privacy: 'Политиката за поверителност'
      },
      backToHome: 'Към началната страница',
      forgotPassword: 'Забравена парола?',
      remember: 'Запомни ме за 30 дни',
      noAccount: 'Нямате профил?',
      haveAccount: 'Вече имате профил?',
      registerLink: 'Регистрирайте се',
      loginLink: 'Влезте тук',
      loginBtn: 'Вход',
      registerBtn: 'Регистрация',
      or: 'или',
    },
    en: {
      loginTitle: 'Welcome back',
      registerTitle: 'Create an account',
      loginSubtitle: 'Please enter your details to continue.',
      registerSubtitle: 'Join us for a better dental experience.',
      googleBtn: 'Sign in with Google',
      emailLabel: 'Email address',
      passwordLabel: 'Password',
      nameLabel: 'Full Name',
      phoneLabel: 'Phone number',
      terms: {
        prefix: 'I accept ',
        tos: 'Terms of Service',
        and: ' and ',
        privacy: 'Privacy Policy'
      },
      backToHome: 'Back to website',
      forgotPassword: 'Forgot password?',
      remember: 'Remember for 30 days',
      noAccount: "Don't have an account?",
      haveAccount: 'Already have an account?',
      registerLink: 'Sign up',
      loginLink: 'Sign in',
      loginBtn: 'Sign in',
      registerBtn: 'Create account',
      or: 'or',
    }
  }[lang];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setAcceptedTerms(false);
    setRememberMe(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const visualContent = isLogin 
    ? {
        image: "/VBMODELS_AI/Auth/Login.jpeg",
        quote: lang === 'bg' ? "Добре дошли отново! Пътешествието към перфектната усмивка продължава." : "Welcome back! The journey to a perfect smile continues.",
        author: "VB Dental Team"
      }
    : {
        image: "/VBMODELS_AI/Auth/Register.jpeg",
        quote: lang === 'bg' ? "Създайте акаунт и се възползвайте от всички възможности на нашата клиника." : "Create an account and take advantage of all our clinic's possibilities.",
        author: "VB Dental Team"
      };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row overflow-x-hidden font-outfit">
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        /* Custom Animated Checkbox Styles */
        .check {
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          -webkit-tap-highlight-color: transparent;
          transform: translate3d(0, 0, 0);
        }
        .check:before {
          content: "";
          position: absolute;
          top: -10px;
          left: -10px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(46, 204, 113, 0.05);
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .check svg {
          position: relative;
          z-index: 1;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke: #c8ccd4;
          stroke-width: 1.5;
          transform: translate3d(0, 0, 0);
          transition: all 0.2s ease;
        }
        .check svg path {
          stroke-dasharray: 60;
          stroke-dashoffset: 0;
          transition: all 0.3s linear;
          transition-delay: 0.15s; /* Delay reappearing of square when unchecking */
        }
        .check svg polyline {
          stroke-dasharray: 22;
          stroke-dashoffset: 66;
          transition: all 0.2s linear;
          transition-delay: 0s; /* Checkmark disappears first when unchecking */
        }
        .check:hover:before {
          opacity: 1;
        }
        .check:hover svg {
          stroke: #2ecc71;
        }
        .cbx-hidden:checked + .check svg {
          stroke: #2ecc71;
        }
        .cbx-hidden:checked + .check svg path {
          stroke-dashoffset: 60;
          transition-delay: 0s; /* Square disappears first when checking */
        }
        .cbx-hidden:checked + .check svg polyline {
          stroke-dashoffset: 44;
          transition-delay: 0.15s; /* Checkmark appears with delay when checking */
        }
      `}</style>
      
      <div className="w-full lg:w-[55%] flex flex-col relative z-10 h-screen overflow-y-auto no-scrollbar bg-white">
        <div className="absolute top-0 left-0 right-0 p-6 sm:p-10 lg:p-12 flex items-center justify-between lg:justify-start gap-4 shrink-0 bg-white/80 backdrop-blur-sm z-20">
          <Link 
            href={lang === 'bg' ? "/" : "/en"} 
            className="flex items-center gap-2 group transition-transform hover:scale-105 active:scale-95"
          >
            <Image 
              src="/logo_header.png" 
              alt="DentalClinic Logo" 
              width={140}
              height={36}
              className="h-8 sm:h-9 w-auto object-contain" 
              priority
            />
            <span className="font-bold text-lg sm:text-xl text-slate-800 tracking-tight text-nowrap">VB DENTAL</span>
          </Link>

          <div className="h-6 w-px bg-slate-200 hidden sm:block mx-1" />
          
          <Link 
            href={lang === 'bg' ? "/" : "/en"}
            className="font-bold text-slate-400 hover:text-primary transition-colors text-[9px] sm:text-xs uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full text-nowrap"
          >
            {t.backToHome}
          </Link>
        </div>

        <div className="max-w-[420px] w-full mx-auto flex flex-col justify-center min-h-screen p-6 sm:p-10 pt-32 sm:pt-40 pb-12">
          <motion.div
            key={isLogin ? 'login' : 'register'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">
              {isLogin ? t.loginTitle : t.registerTitle}
            </h1>
            <p className="text-slate-500 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
              {isLogin ? t.loginSubtitle : t.registerSubtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 lg:space-y-6">
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4 sm:space-y-5 lg:space-y-6 overflow-hidden"
                  >
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 tracking-tight ml-1">
                        {t.nameLabel}
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required={!isLogin}
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-slate-900 placeholder:text-slate-300 bg-slate-50/50"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 tracking-tight ml-1">
                        {t.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required={!isLogin}
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-slate-900 placeholder:text-slate-300 bg-slate-50/50"
                        placeholder="+359 888 888 888"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 tracking-tight ml-1">
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-slate-900 placeholder:text-slate-300 bg-slate-50/50"
                  placeholder="example@mail.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 tracking-tight ml-1">
                  {t.passwordLabel}
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 sm:py-3.5 pr-12 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-slate-900 placeholder:text-slate-300 bg-slate-50/50"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={isLogin ? "remember-cbx" : "terms-cbx"}
                    checked={isLogin ? rememberMe : acceptedTerms}
                    onChange={(e) => isLogin ? setRememberMe(e.target.checked) : setAcceptedTerms(e.target.checked)}
                    className="cbx-hidden hidden"
                  />
                  <label htmlFor={isLogin ? "remember-cbx" : "terms-cbx"} className="check min-w-[20px]">
                    <svg width="20px" height="20px" viewBox="0 0 18 18">
                      <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                      <polyline points="1 9 7 14 15 4"></polyline>
                    </svg>
                  </label>
                  <label htmlFor={isLogin ? "remember-cbx" : "terms-cbx"} className="text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors ml-3 cursor-pointer select-none">
                    {isLogin ? t.remember : t.terms.prefix + t.terms.tos}
                  </label>
                </div>
                
                {isLogin && (
                  <button type="button" className="text-sm font-bold text-primary hover:text-primary/70 transition-colors w-fit sm:w-auto">
                    {t.forgotPassword}
                  </button>
                )}
              </div>

              <button
                type="submit"
                disabled={!isLogin && !acceptedTerms}
                className={`w-full py-3.5 sm:py-4 px-6 rounded-xl font-bold transition-all active:scale-[0.98] ${
                  isLogin || acceptedTerms
                    ? 'bg-primary text-white hover:bg-slate-800 shadow-xl shadow-primary/20'
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-100'
                }`}
              >
                {isLogin ? t.loginBtn : t.registerBtn}
              </button>
            </form>

            <div className="mt-8 sm:mt-10 lg:mt-12 text-center space-y-6 sm:space-y-8">
              <p className="text-slate-500 font-medium text-sm sm:text-base">
                {isLogin ? t.noAccount : t.haveAccount}{' '}
                <button 
                  onClick={toggleAuthMode}
                  className="text-primary font-extrabold hover:underline active:opacity-70 transition-all ml-1"
                >
                  {isLogin ? t.registerLink : t.loginLink}
                </button>
              </p>

              <div className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-10 gap-y-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                <span className="text-slate-300">© 2026 VB Dental</span>
                <Link href={lang === 'bg' ? "/politika-za-poveritelnost" : "/en/privacy-policy"} className="hover:text-primary transition-colors">Privacy</Link>
                <Link href={lang === 'bg' ? "/kontakti" : "/en/contact"} className="hover:text-primary transition-colors">Contact</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side: Visual Content */}
      <div className="hidden lg:block lg:w-[45%] bg-slate-900 relative lg:h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={visualContent.image}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image 
              src={visualContent.image} 
              alt="Dental Clinic Environment" 
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" />
            <div className="absolute inset-0 bg-slate-900/40" />
            <AIBadge position="bottom-right" className="bottom-6 right-6" />
            
            <div className="absolute bottom-10 xl:bottom-16 left-10 xl:left-16 right-10 xl:right-16 max-w-[500px] z-10">
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3, duration: 0.6 }}
                 className="bg-white/10 backdrop-blur-xl p-6 xl:p-8 rounded-[2rem] border border-white/20 shadow-2xl group"
               >
                 <p className="text-white text-lg xl:text-xl font-medium tracking-tight leading-relaxed italic">
                   “<Typewriter
                        key={visualContent.quote}
                        text={visualContent.quote}
                        speed={50}
                        delay={500}
                      />”
                 </p>
                 <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-6">
                   <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-full border-2 border-white/30 p-0.5 overflow-hidden ring-4 ring-white/5 shrink-0">
                     <Image 
                       src="/VBMODELS_AI/Auth/Ceo.jpeg" 
                       width={56} 
                       height={56} 
                       alt={lang === 'bg' ? "Снимка на Диана Стефанова" : "Diana Stefanova Portrait"} 
                       className="object-cover w-full h-full rounded-full" 
                       priority
                     />
                   </div>
                   <div>
                      <p className="text-white font-extrabold xl:text-lg">
                        {lang === 'bg' ? 'Диана Стефанова' : 'Diana Stefanova'}
                      </p>
                      <cite className="text-white/60 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase not-italic">
                          — {visualContent.author}
                      </cite>
                   </div>
                   
                   <div className="ml-auto w-12 h-12 xl:w-14 xl:h-14 opacity-80 group-hover:opacity-100 transition-opacity shrink-0">
                     <Image 
                       src="/android-chrome-512x512.png" 
                       alt="VB Dental Logo" 
                       width={56} 
                       height={56}
                       className="object-contain w-full h-full"
                       priority
                     />
                   </div>
                 </div>
               </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
