import SectionTitle from '../components/SectionTitle';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import imgHeroContact from '../img/Cenicafe 1.jpg';
import imgOficina1 from '../img/OFICINA1.jpeg';
import imgOficina2 from '../img/OfICINa2.jpeg';
import imgOficina3 from '../img/oficina3.jpeg';
import imgOficina4 from '../img/oficina4.jpeg';
import imgOficina5 from '../img/oficina 5.jpeg';
import imgOficina6 from '../img/oficina 6.jpeg';

export default function Contact() {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [currentBg, setCurrentBg] = useState(0);
  const offices = [imgOficina1, imgOficina2, imgOficina3, imgOficina4, imgOficina5, imgOficina6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % offices.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [offices.length]);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('loading');

    // IMPORTANTE: Reemplazar por credenciales reales de EmailJS
    emailjs
      .sendForm(
        'service_658u9mc',
        'template_j2t76c8',
        formRef.current,
        {
          publicKey: 'Z_vdZpJA7XvtFwwS2',
        }
      )
      .then(
        () => {
          setStatus('success');
          formRef.current?.reset();
          setTimeout(() => setStatus('idle'), 5000);
        },
        (error) => {
          console.error('FAILED...', error.text);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
        }
      );
  };

  const contactInfo = [
    { icon: <MapPin className="text-gold" size={24} />, title: t('cont.lbl.address'), desc: t('cont.val.address') },
    { icon: <Phone className="text-gold" size={24} />, title: t('cont.lbl.phone'), desc: t('cont.val.phone') },
    { icon: <Mail className="text-gold" size={24} />, title: t('cont.lbl.email'), desc: t('cont.val.email') },
    { icon: <Clock className="text-gold" size={24} />, title: t('cont.lbl.hours'), desc: t('cont.val.hours') },
  ];

  return (
    <div className="pt-20">
      <section className="relative h-[25dvh] md:h-[40dvh] flex items-center justify-center px-4">
        <div className="absolute inset-0 z-0">
          <img
            src={imgHeroContact}
            alt="Fondo contacto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 subpage-hero-gradient" />
        </div>
        <div className="relative z-10 text-center text-white mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-4">{t('cont.hero.title')}</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto px-4">{t('cont.hero.desc')}</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="bg-neutral-50 p-12 rounded-[40px] border border-neutral-100">
                <SectionTitle className="text-3xl font-serif font-bold mb-8 leading-tight">{t('cont.info.title')}</SectionTitle>
                <p className="text-neutral-500 mb-12">{t('cont.info.desc')}</p>
                
                <div className="space-y-8">
                  {contactInfo.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">{item.title}</p>
                        <p className="font-bold text-neutral-900">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media Buttons */}
                <div className="flex gap-5 mt-10 pt-8 border-t border-neutral-200">
                  <a
                    href="https://www.instagram.com/orocafe.ca?igsh=aDl6YmdwYjFxMzVw&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 group"
                    aria-label="Instagram Cooperativa"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 via-rose-500 to-amber-500 flex items-center justify-center text-white group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                      <Instagram size={22} />
                    </div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Cooperativa</span>
                  </a>
                  <a
                    href="https://www.instagram.com/coffeetatay?igsh=MWpsZGYwZGo5Mm00aA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 group"
                    aria-label="Instagram Tatay Coffee"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 via-rose-500 to-amber-500 flex items-center justify-center text-white group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                      <Instagram size={22} />
                    </div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Tatay Coffee</span>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1CgdvrrUYc/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 group"
                    aria-label="Facebook Cooperativa"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#1877F2] flex items-center justify-center text-white group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                      <Facebook size={22} />
                    </div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Cooperativa</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="bg-white p-12 lg:p-16 rounded-[40px] shadow-2xl border border-neutral-50">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center text-gold">
                    <MessageSquare size={20} />
                  </div>
                  <SectionTitle className="text-3xl font-serif font-bold leading-tight">{t('cont.form.title')}</SectionTitle>
                </div>
                
                <form ref={formRef} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest">{t('cont.form.name.lbl')}</label>
                    <input
                      required
                      type="text"
                      name="user_name"
                      placeholder={t('cont.form.name.ph')}
                      className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest">{t('cont.form.email.lbl')}</label>
                    <input
                      required
                      type="email"
                      name="user_email"
                      placeholder={t('cont.form.email.ph')}
                      className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest">{t('cont.form.msg.lbl')}</label>
                    <textarea
                      required
                      name="message"
                      rows={6}
                      placeholder={t('cont.form.msg.ph')}
                      className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all resize-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className={`w-full text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:-translate-y-0 cursor-pointer disabled:cursor-wait ${
                        status === 'success' ? 'bg-emerald-500 hover:bg-emerald-600' :
                        status === 'error' ? 'bg-red-500 hover:bg-red-600' :
                        'bg-gold hover:bg-gold-hover'
                      }`}
                    >
                      {status === 'loading' && 'Enviando...'}
                      {status === 'success' && '¡Mensaje Enviado!'}
                      {status === 'error' && 'Error al enviar (revisar claves de EmailJS)'}
                      {status === 'idle' && (
                        <>{t('cont.form.btn')} <Send size={20} /></>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Title */}
      <div className="bg-white py-14 text-center">
        <span className="text-gold font-bold uppercase tracking-[0.3em] text-sm mb-3 block">{t('cont.offices.title')}</span>
        <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
      </div>

      {/* Offices Slideshow */}
      <section className="h-[90dvh] w-full relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-transparent">
          {offices.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[800ms] ease-in-out ${
                index === currentBg ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={img}
                alt={`Office ${index + 1}`}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  index === 2 ? 'object-[50%_85%]' : index >= 3 ? 'object-[50%_75%]' : 'object-[50%_40%]'
                }`}
                style={{ filter: 'brightness(0.7) sepia(50%) saturate(0.6) contrast(1.2) grayscale(35%)' }}
              />
            </div>
          ))}
          {/* Warm brown overlay for Caravela-style vintage feel */}
          <div className="absolute inset-0 bg-[#3E2723]/25 z-20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/25 z-20 pointer-events-none" />
        </div>
      
      </section>
    </div>
  );
}
