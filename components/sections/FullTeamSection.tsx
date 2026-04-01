'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Linkedin, Mail, Phone } from 'lucide-react';

export function FullTeamSection() {
  const { lang } = useLanguage();

  const doctors = lang === 'bg' ? [
    {
      name: 'Елена Филипова',
      role: 'Дентален асистент',
      bio: 'Ключова част от нашия екип, Елена се грижи за безупречната подготовка и комфорта на пациентите по време на процедурите.',
      image: '/Team_temple/Elena_Filipova.png'
    },
    {
      name: 'Диана Стефанова',
      role: 'CEO & Основател',
      bio: 'Визионер и лидер, отдаден на създаването на нов стандарт в денталната грижа. Диана ръководи клиниката с фокус върху иновациите и безкомпромисното качество.',
      image: '/Team_temple/Ceo_Diana_Stefanova.jpeg',
      isCEO: true
    },
    {
      name: 'Натали Кънева',
      role: 'Естетичен специалист',
      bio: 'Експерт в преобразяването на усмивки. Натали съчетава прецизност и усет към детайла, за да постигне перфектен естетичен резултат за всеки пациент.',
      image: '/Team_temple/Natali_Qneva.jpeg'
    },
    {
      name: 'Жасмин Добрева',
      role: 'Дентален лекар',
      bio: 'Специалист с нежен подход и внимание към пациента. Жасмин вярва, че здравата усмивка започва с доверие и спокойна атмосфера.',
      image: '/Team_temple/Jasmin_Dobreva.jpeg'
    },
    {
      name: 'Д-р Александра Николова',
      role: 'Ортодонт',
      bio: 'Специалист по корекция на захапката с модерни алайнери. Александра е посветена на постигането на хармонични и функционални усмивки.',
      image: '/Team_temple/Dentist_portrait_grey_202604010018.jpeg'
    },
    {
      name: 'Д-р Виктория Стоянова',
      role: 'Хирург',
      bio: 'Експерт в оралната хирургия и имплантологията. Виктория гарантира безболезнени процедури и бързо възстановяване на своите пациенти.',
      image: '/Team_temple/Dentist_portrait_grey_202604010018_2.jpeg'
    },
    {
      name: 'Д-р Михаела Петрова',
      role: 'Детски стоматолог',
      bio: 'Превръща всяко посещение на малките пациенти в забавно приключение. Михаела има специален подход, който премахва страха от зъболекаря.',
      image: '/Team_temple/Dentist_portrait_grey_202604010018_3.jpeg'
    },
    {
      name: 'Д-р Ивана Димитрова',
      role: 'Ендодонт',
      bio: 'Специалист в прецизното кореново лечение под микроскоп. Ивана се стреми да спаси всеки естествен зъб с максимална грижа.',
      image: '/Team_temple/Dentist_portrait_grey_202604010018_4.jpeg'
    },
    {
      name: 'Марина Лазарова',
      role: 'Мениджър Пациенти',
      bio: 'Вашият водач в пътя към новата усмивка. Марина се грижи за перфектната организация и комфорта на всеки посетител в нашата клиника.',
      image: '/Team_temple/Keep_my_face_202604010019.png'
    }
  ] : [
    {
      name: 'Elena Filipova',
      role: 'Dental Assistant',
      bio: "A key part of our team, Elena ensures impeccable preparation and patient comfort during procedures.",
      image: '/Team_temple/Elena_Filipova.png'
    },
    {
      name: 'Diana Stefanova',
      role: 'CEO & Founder',
      bio: 'Visionary and leader, dedicated to creating a new standard in dental care. Diana leads the clinic with a focus on innovation and uncompromising quality.',
      image: '/Team_temple/Ceo_Diana_Stefanova.jpeg',
      isCEO: true
    },
    {
      name: 'Natali Qneva',
      role: 'Aesthetic Specialist',
      bio: 'Expert in smile transformations. Natali combines precision and attention to detail to achieve the perfect aesthetic result for every patient.',
      image: '/Team_temple/Natali_Qneva.jpeg'
    },
    {
      name: 'Jasmin Dobreva',
      role: 'Dentist',
      bio: 'Specialist with a gentle approach and patient focus. Jasmin believes that a healthy smile starts with trust and a calm atmosphere.',
      image: '/Team_temple/Jasmin_Dobreva.jpeg'
    },
    {
      name: 'Dr. Alexandra Nikolova',
      role: 'Orthodontist',
      bio: 'Specialist in bite correction with modern aligners. Alexandra is dedicated to achieving harmonious and functional smiles.',
      image: '/Team_temple/Dentist_portrait_grey_202604010018.jpeg'
    },
    {
      name: 'Dr. Victoria Stoyanova',
      role: 'Surgeon',
      bio: 'Expert in oral surgery and implantology. Victoria ensures painless procedures and fast recovery for her patients.',
      image: '/Team_temple/Dentist_portrait_grey_202604010018_2.jpeg'
    },
    {
      name: 'Dr. Mihaela Petrova',
      role: 'Pediatric Dentist',
      bio: "Turns every little patient's visit into a fun adventure. Mihaela has a special approach that eliminates the fear of the dentist.",
      image: '/Team_temple/Dentist_portrait_grey_202604010018_3.jpeg'
    },
    {
      name: 'Dr. Ivana Dimitrova',
      role: 'Endodontist',
      bio: 'Specialist in precise root canal treatment under a microscope. Ivana strives to save every natural tooth with maximum care.',
      image: '/Team_temple/Dentist_portrait_grey_202604010018_4.jpeg'
    },
    {
      name: 'Marina Lazarova',
      role: 'Patient Manager',
      bio: 'Your guide on the path to a new smile. Marina takes care of the perfect organization and comfort of every visitor to our clinic.',
      image: '/Team_temple/Keep_my_face_202604010019.png'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all group border border-slate-100"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem]">
                <Image 
                  src={doctor.image} 
                  alt={doctor.name} 
                  fill 
                  className="object-cover object-[center_12%] scale-[1.02] group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 z-20">
                  <div className="flex flex-col gap-3 transform-gpu">
                    <button className="w-9 h-9 rounded-full bg-white/70 backdrop-blur-sm text-primary shadow-sm flex items-center justify-center hover:bg-white hover:shadow-md transition-all duration-200 active:scale-90">
                      <Linkedin className="w-4.5 h-4.5" />
                    </button>
                    <button className="w-9 h-9 rounded-full bg-white/70 backdrop-blur-sm text-primary shadow-sm flex items-center justify-center hover:bg-white hover:shadow-md transition-all duration-200 active:scale-90">
                      <Mail className="w-4.5 h-4.5" />
                    </button>
                    <button className="w-9 h-9 rounded-full bg-white/70 backdrop-blur-sm text-primary shadow-sm flex items-center justify-center hover:bg-white hover:shadow-md transition-all duration-200 active:scale-90">
                      <Phone className="w-4.5 h-4.5" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-10 flex flex-col h-[340px]">
                <div className="mb-2">
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight">{doctor.name}</h3>
                  <p className="text-primary font-semibold uppercase tracking-wider text-xs mt-1">{doctor.role}</p>
                </div>
                
                <div className="mt-4 mb-8">
                  <p className="text-slate-600 leading-relaxed text-sm line-clamp-4">
                    {doctor.bio}
                  </p>
                </div>
                
                <div className="mt-auto">
                  <Link href="/book-appointment" className="inline-block w-full text-center py-4 bg-primary text-white font-bold rounded-xl hover:bg-accent hover:text-primary transition-all shadow-sm hover:shadow-md">
                    {lang === 'bg' ? 'Запази час' : 'Book Appointment'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
