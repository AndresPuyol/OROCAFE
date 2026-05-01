import SectionTitle from '../components/SectionTitle';
import { motion } from 'motion/react';
import { Leaf, Droplets, Wind, Sun, ShieldCheck, Heart, TreePine, Globe, Sprout, Users, CheckCircle, Cloud } from 'lucide-react';
import { useState, useEffect } from 'react';
import imgcertificado from '../img/cestificado.jpeg';
import imgAbeja from '../img/abeja.jpeg';
import imgYara from '../img/Logo carrusel/YARA.png';
import imgRainforest from '../img/Logo carrusel/Rainforest Alliance.png';
import imgCafePractica from '../img/Logo carrusel/3-CAFE-Practices-White.jpg';
import imgWWF from '../img/Logo carrusel/LOGO_WWF.png';
import imgAbonoMUjer from '../img/Logo carrusel/AbonoMUJERES.jpeg';
import imgEUDR from '../img/Logo carrusel/foto_EUDR.jpg';
import imgCarrusel1 from '../img/carrusel1.jpeg';
import imgCarrusel2 from '../img/carrusel 2.jpeg';
import imgCarrusel3 from '../img/carrusel3.jpeg';
import imgCarrusel5 from '../img/carrusel5.jpeg';
import { useLanguage } from '../contexts/LanguageContext';

export default function Sustainability() {
  const { t } = useLanguage();
  const carruselImages = [imgCarrusel1, imgCarrusel2, imgCarrusel3, imgCarrusel5];
  const [currentImg, setCurrentImg] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg(prev => (prev + 1) % carruselImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [carruselImages.length]);

  const pillars = [
    {
      icon: <Leaf className="text-emerald-500" size={32} />,
      title: t('sus.pillar1.title'),
      desc: t('sus.pillar1.desc'),
    },
    {
      icon: <Heart className="text-rose-500" size={32} />,
      title: t('sus.pillar2.title'),
      desc: t('sus.pillar2.desc'),
    },
    {
      icon: <Sun className="text-amber-500" size={32} />,
      title: t('sus.pillar3.title'),
      desc: t('sus.pillar3.desc'),
    },
  ];

  const alianzas = [
    {
      img: imgRainforest,
      title: t('sus.ali1.title'),
      desc: t('sus.ali1.desc'),
      color: "text-emerald-800"
    },
    {
      img: imgWWF,
      title: t('sus.ali3.title'),
      desc: t('sus.ali3.desc'),
      color: "text-blue-800"
    },
    {
      img: imgYara,
      title: t('sus.ali4.title'),
      desc: t('sus.ali4.desc'),
      color: "text-stone-800"
    },
    {
      img: imgEUDR,
      title: t('sus.ali5.title'),
      desc: t('sus.ali5.desc'),
      color: "text-stone-800"
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50dvh] lg:min-h-[500px] flex items-end justify-start px-8 md:px-16 pb-14">
        <div className="absolute inset-0 z-0">
          <img
            src={imgAbeja}
            alt="Fondo sostenibilidad"
            className="w-full h-full object-cover object-[center_55%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 subpage-hero-gradient" />
        </div>
        <div className="relative z-10 text-left text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-4">
            <span className="block text-[#e6b810]">{t('sus.hero.title')}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80">{t('sus.hero.desc')}</p>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">{t('sus.val.tag')}</span>
            <SectionTitle className="text-4xl md:text-5xl font-serif font-bold mb-6" highlightCount={2}>{t('sus.val.title')}</SectionTitle>
            <p className="text-neutral-600 text-lg">{t('sus.val.desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-amber-50 p-12 rounded-[40px] border border-neutral-100 text-center hover:bg-white hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  {p.icon}
                </div>
                <SectionTitle className="text-2xl font-bold mb-4" highlightCount={2}>{p.title}</SectionTitle>
                <p className="text-neutral-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="rounded-[32px] md:rounded-[48px] overflow-hidden shadow-xl bg-neutral-900 flex flex-col md:flex-row min-h-[340px]">
            {/* Imagen — sin distorsión gracias a object-cover en contenedor fijo */}
            <div className="md:w-1/2 h-64 md:h-auto shrink-0 overflow-hidden">
              <img
                src={imgcertificado}
                alt="Certificado de Sostenibilidad"
                className="w-full h-full object-cover object-center scale-150 transform-gpu"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Texto */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center gap-6">
              <SectionTitle className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">{t('sus.cert.title')}</SectionTitle>
              <p className="text-neutral-400 sm:text-2xl md:text-2xl leading-relaxed">
                {t('sus.cert.desc')}
              </p>
              <div className="space-y-4">
              
           
                    <span className="text-white font-semibold sm:text-2xl md:text-2xl text-lg">{t('sus.cert1')}</span>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Alianza por un Café Sostenible (Sin Carrusel) */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4 overflow-hidden max-w-[100vw]">
          <div className="text-center max-w-4xl mx-auto mb-16 px-4">
            <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">{t('sus.proj.tag')}</span>
            <SectionTitle className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-10 text-neutral-900" highlightCount={1}>
              {t('sus.proj.title')}
            </SectionTitle>
          </div>

          <style>{`
            @keyframes marquee {  
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 35s linear infinite;
            }
            .marquee-container:hover .animate-marquee {
              animation-play-state: paused;
            }
          `}</style>

          <div className="mb-24 overflow-hidden marquee-container w-full relative">
            <div className="flex w-max animate-marquee py-4">
              {[...alianzas, ...alianzas, ...alianzas, ...alianzas].map((item, index) => (
                <div key={index} className="w-[280px] sm:w-[320px] lg:w-[350px] shrink-0 px-4">
                  <div className="bg-white p-6 md:p-8 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center h-full min-h-[380px]">
                    <div className="h-32 w-full flex items-center justify-center mb-6">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="max-h-24 max-w-[140px] object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className={`text-xl font-bold mb-3 ${item.color}`}>{item.title}</h4>
                    <p className="text-neutral-600 text-sm leading-relaxed flex-grow">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-2 md:px-0">

            {/* Carrusel de imágenes — Filtro vintage estilo Caravela */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[520px]">
              {carruselImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentImg ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Orocafé ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                    style={{ filter: 'brightness(0.75) sepia(45%) saturate(0.6) contrast(1.2) grayscale(30%)' }}
                  />
                </div>
              ))}
              {/* Warm overlay for Caravela vintage feel */}
              <div className="absolute inset-0 bg-[#482e20]/20 z-15 pointer-events-none" />
              {/* Indicadores */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {carruselImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImg(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentImg ? 'bg-white w-6' : 'bg-white/50 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Texto del programa — fondo negro */}
            <div className="bg-neutral-900 rounded-2xl p-8 md:p-12 flex flex-col justify-center gap-6 shadow-xl h-[520px]">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                <Users size={28} className="text-amber-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">{t('sus.prog.title')}</h3>
              <p className="text-neutral-300 text-base leading-relaxed">
                {t('sus.prog.desc')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><CheckCircle className="text-amber-400 shrink-0" size={20} /> <span className="font-medium text-neutral-200">{t('sus.prog.li2')}</span></li>
                <li className="flex items-center gap-3"><CheckCircle className="text-amber-400 shrink-0" size={20} /> <span className="font-medium text-neutral-200">{t('sus.prog.li3')}</span></li>
                <li className="flex items-center gap-3"><CheckCircle className="text-amber-400 shrink-0" size={20} /> <span className="font-medium text-neutral-200">{t('sus.prog.li4')}</span></li>
              </ul>
            </div>

          </div>



        </div>
      </section>
    </div>
  );
}