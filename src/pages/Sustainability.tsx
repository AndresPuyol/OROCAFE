import SectionTitle from '../components/SectionTitle';
import { motion } from 'motion/react';
import { Leaf, Droplets, Wind, Sun, ShieldCheck, Heart, TreePine, Globe, Sprout, Users, CheckCircle, Cloud } from 'lucide-react';
import imgcertificado from '../img/cestificado.jpeg';
import imgAbeja from '../img/abeja.jpeg';
import imgYara from '../img/Logo carrusel/YARA.png';
import imgRainforest from '../img/Logo carrusel/Rainforest Alliance.png';
import imgCafePractica from '../img/Logo carrusel/3-CAFE-Practices-White.jpg';
import imgWWF from '../img/Logo carrusel/LOGO_WWF.png';
import imgAbonoMUjer from '../img/Logo carrusel/AbonoMUJERES.jpeg';
import imgEUDR from '../img/Logo carrusel/foto_EUDR.jpg';
import { useLanguage } from '../contexts/LanguageContext';

export default function Sustainability() {
  const { t } = useLanguage();

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
      img: imgCafePractica,
      title: t('sus.ali2.title'),
      desc: t('sus.ali2.desc'),
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
      <section className="relative h-[50dvh] lg:min-h-[500px] flex items-center justify-center px-4">
        <div className="absolute inset-0 z-0">
          <img
            src={imgAbeja}
            alt="Fondo sostenibilidad"
            className="w-full h-full object-cover object-[center_55%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 subpage-hero-gradient" />
        </div>
        <div className="relative z-10 text-center text-white mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-4 flex flex-col items-center justify-center">
            <span className="block text-[#e6b810]">{t('sus.hero.title')}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto px-4">{t('sus.hero.desc')}</p>
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

          <div className="bg-neutral-900 rounded-[40px] md:rounded-[64px] overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 p-8 md:p-10 lg:p-16">
                <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-8 leading-tight">{t('sus.cert.title')}</SectionTitle>
                <p className="text-neutral-400 text-base md:text-lg mb-12 leading-relaxed">
                  {t('sus.cert.desc')}
                </p>
                <div className="space-y-6">
                  {[
                    { icon: <ShieldCheck className="text-gold" />, title: t('sus.cert1') },
                    { icon: <Droplets className="text-gold" />, title: t('sus.cert2') },
                    { icon: <Wind className="text-gold" />, title: t('sus.cert3') },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                        {item.icon}
                      </div>
                      <span className="text-white font-bold">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 p-10 lg:p-16 flex items-center justify-center">
                <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border border-neutral-800/50">
                  <img
                    src={imgcertificado}
                    alt="Certificado de Sostenibilidad"
                    className="w-full h-full object-cover object-center transform md:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
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
            <div className="relative overflow-hidden group bg-neutral-900 rounded-[32px] md:rounded-[64px] text-white shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 md:p-16 lg:p-20">
              <div className="absolute inset-0 bg-neutral-950/50 mix-blend-multiply z-0"></div>
              <img
                src={imgAbonoMUjer}
                alt="Mujeres caficultoras"
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/10">
                    <Users size={28} className="text-amber-400" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-6">{t('sus.prog.title')}</h3>
                  <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-8">
                    {t('sus.prog.desc')}
                  </p>
                </div>
                <ul className="space-y-4 mt-auto">
                  <li className="flex items-center gap-3"><CheckCircle className="text-amber-400" size={24} /> <span className="font-medium text-neutral-200">{t('sus.prog.li1')}</span></li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-amber-400" size={24} /> <span className="font-medium text-neutral-200">{t('sus.prog.li2')}</span></li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-amber-400" size={24} /> <span className="font-medium text-neutral-200">{t('sus.prog.li3')}</span></li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-amber-400" size={24} /> <span className="font-medium text-neutral-200">{t('sus.prog.li4')}</span></li>
                </ul>
              </div>
            </div>

            <div className="relative overflow-hidden group bg-stone-900 rounded-[32px] md:rounded-[64px] text-white shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 md:p-16 lg:p-20">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/10">
                    <Cloud size={28} className="text-amber-400" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-6">{t('sus.fert.title')}</h3>
                  <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-10">
                    {t('sus.fert.desc')}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 border-t border-white/10 pt-10">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-amber-400 mb-2">{t('sus.fert.soc')}</div>
                    <p className="text-sm text-neutral-300 leading-relaxed">{t('sus.fert.soc.desc')}</p>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-amber-400 mb-2">{t('sus.fert.env')}</div>
                    <p className="text-sm text-neutral-300 leading-relaxed">{t('sus.fert.env.desc')}</p>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-amber-400 mb-2">{t('sus.fert.eco')}</div>
                    <p className="text-sm text-neutral-300 leading-relaxed">{t('sus.fert.eco.desc')}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}