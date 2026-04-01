import SectionTitle from '../components/SectionTitle';
import CadenaDeValor3D from '../components/CadenaDeValor3D';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Microscope, 
  Truck, 
  Warehouse, 
  Flame, 
  Store, 
  ShoppingBag,
  CloudRain,
  Leaf,
  Settings,
  User
} from 'lucide-react';
import { Link } from 'react-router-dom';
import fondoCooperativa from '../img/Cooperativa.jpeg';
import imgCaficultorGuia from '../img/caficukltor guia.jpeg';
import imgCaficultro from '../img/caficultro.jpeg';
import imgAlmacenamiento from '../img/almacenamiento.webp';
import imgTostion from '../img/tostion.jpeg';
import imgSecado from '../img/Secado.jpeg';
import IimgCatacion from '../img/Catacion.jpeg';
import imgRainforest from '../img/Logo carrusel/Rainforest Alliance.png';
import iconoGranos from '../img/TU_ICONO_GRANOS.png';
import imgFondoCard1 from '../img/FondoCard1.jpeg';
import imgA from '../img/a.jpeg';
import imgB from '../img/b.jpeg';
import imgCafeterito from '../img/cafeterito.jpeg';
import fondoMata from '../img/TU_FONDO_MATA_ARRIBA.png';
import imgBancolombia from '../img/Logo carrusel/BANCOLOMBIA.png';
import imgDavivienda from '../img/Logo carrusel/Davivienda.png';
import imgAdministrativaLegal from '../img/administrativa legar.jpeg';
import imgAuxiliarAnalista from '../img/Auxiliar analista.jpeg';
import imgAnalistaCalidades from '../img/analista de calidades.jpeg';
import imgContadora from '../img/contadora.jpeg';
import imgNeftali from '../img/neftali.jpeg';
import { useLanguage } from '../contexts/LanguageContext';

export default function Cooperative() {
  const { t } = useLanguage();

  const servicios = [
    {
      title: t('coop.serv1.title'),
      desc: t('coop.serv1.desc'),
      image: imgAlmacenamiento,
      isCircle: false
    },
    {
      title: t('coop.serv2.title'),
      desc: t('coop.serv2.desc'),
      image: imgTostion,
      isCircle: false,
      offsetY: 10
    },
    {
      title: t('coop.serv3.title'),
      desc: t('coop.serv3.desc'),
      image: imgSecado,
      isCircle: false
    },
    {
      title: t('coop.serv4.title'),
      desc: t('coop.serv4.desc'),
      image: IimgCatacion,
      isCircle: false
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[85dvh] lg:min-h-[700px] flex items-center overflow-hidden py-24 md:py-0">
        <div className="absolute inset-0 z-0">
          <img 
            src={fondoCooperativa} 
            alt="Cooperativa" 
            className="w-full h-full object-cover object-[50%_85%] brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl px-2 md:px-8"
          >
            
            <span className="text-gold font-bold tracking-[0.4em] uppercase text-sm mb-6 block drop-shadow-md">
              {t('coop.hero.tag')}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-serif font-bold leading-[1.1] mb-8 drop-shadow-lg" dangerouslySetInnerHTML={{ __html: t('coop.hero.title') }} />
            <p className="text-white/90 text-base md:text-xl max-w-lg leading-relaxed font-light mb-10 drop-shadow-md">
              {t('coop.hero.desc')}
            </p>
          </motion.div>
        </div>

        {/* Stats Overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-0 right-0 bg-white p-12 md:w-1/3 shadow-2xl rounded-tl-3xl hidden md:block"
        >
          <div className="grid grid-cols-2 gap-12">
            
            <div>
              <div className="text-5xl font-serif text-neutral-900 font-bold">250+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mt-3 font-bold">{t('coop.hero.stat1.lbl')}</div>
            </div>
            <div>
              <div className="text-5xl font-serif text-gold font-bold">100%</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mt-3 font-bold">{t('coop.hero.stat2.lbl')}</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Value Chain Section (Nosotros) */}
      
      <section className="py-32 bg-white relative overflow-hidden">
        
        <div 
          className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10 md:opacity-20 mix-blend-multiply grayscale"
          style={{ 
            backgroundImage: `url(${imgCafeterito})`, 
            backgroundPosition: 'left top', 
            backgroundRepeat: 'no-repeat',
            backgroundSize: '50%'
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-full h-full pointer-events-none opacity-5 md:opacity-10"
          style={{ 
            backgroundImage: `url(${fondoMata})`, 
            backgroundPosition: 'right bottom', 
            backgroundRepeat: 'no-repeat',
            backgroundSize: '40%'
          }}
        />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block">{t('coop.about.tag')}</span>
            <SectionTitle className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-neutral-900">
              {t('coop.about.title')}
            </SectionTitle>
          </div>

          {/* Main text container */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-20 px-4"
          >
            <p className="text-neutral-600 text-base md:text-xl leading-relaxed">
              {t('coop.about.desc')}
            </p>
          </motion.div>

          {/* 3 Core Pillars */}
          <div className="flex flex-col gap-6 mb-32 max-w-4xl mx-auto">
            {[
              { 
                icon: <Settings size={32} className="text-yellow-600" />, 
                title: t('coop.pillar1.title'),
                text: t('coop.pillar1.desc'),
                circleBg: "bg-yellow-50",
                circleBorder: "border-yellow-200",
                lineBg: "bg-yellow-400"
              },
              { 
                image: imgRainforest, 
                title: t('coop.pillar2.title'),
                text: t('coop.pillar2.desc'),
                circleBg: "bg-green-50",
                circleBorder: "border-green-200",
                lineBg: "bg-green-400"
              },
              { 
                image: iconoGranos, 
                title: t('coop.pillar3.title'),
                text: t('coop.pillar3.desc'),
                circleBg: "bg-orange-50",
                circleBorder: "border-orange-200",
                lineBg: "bg-orange-400"
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-neutral-100 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 group"
              >
                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${pillar.circleBg} flex items-center justify-center shrink-0 border-2 ${pillar.circleBorder} group-hover:scale-110 transition-transform duration-300`}>
                  {pillar.icon ? pillar.icon : <img src={pillar.image} alt="Icono" className="w-12 h-12 md:w-14 md:h-14 object-contain" />}
                </div>
                <div className="text-center md:text-left flex-1 mt-1 md:mt-2">
                  <h4 className="text-xl md:text-2xl font-bold text-neutral-900">{pillar.title}</h4>
                  <div className={`w-12 h-1 ${pillar.lineBg} rounded-full mt-3 mb-4 mx-auto md:mx-0`}></div>
                  <p className="text-[15px] md:text-[17px] text-neutral-600 font-medium leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bancos Aliados */}
          <div className="mt-20 max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 tracking-wide uppercase">
                {t('coop.banks.title')}
              </h3>
              <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Bancolombia Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-neutral-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-5"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50/50 flex items-center justify-center shrink-0 border border-blue-100">
                  <img src={imgBancolombia} alt="Bancolombia" className="w-10 h-10 object-contain" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-neutral-900">Bancolombia</h4>
                  <div className="w-8 h-1 bg-blue-100 rounded-full mt-1 mb-1"></div>
                  <p className="text-xs text-neutral-400 font-medium">{t('coop.banks.lbl')}</p>
                </div>
              </motion.div>

              {/* Davivienda Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-neutral-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-5"
              >
                <div className="w-16 h-16 rounded-full bg-red-50/50 flex items-center justify-center shrink-0 border border-red-100">
                  <img src={imgDavivienda} alt="Davivienda" className="w-10 h-10 object-contain" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-neutral-900">Davivienda</h4>
                  <div className="w-8 h-1 bg-red-100 rounded-full mt-1 mb-1"></div>
                  <p className="text-xs text-neutral-400 font-medium">{t('coop.banks.lbl')}</p>
                </div>
              </motion.div>
              
            </div>
          </div>

        </div>
      </section>

      {/* Cadena de Valor 3D Interactiva */}
      <CadenaDeValor3D />

      {/* Team Section */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">{t('coop.team.tag')}</span>
            <SectionTitle className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-10 text-neutral-900" highlightCount={1}>
              {t('coop.team.title')}
            </SectionTitle>
          </div>

          <style>{`
            @keyframes marqueeTeam {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-team {
              animation: marqueeTeam 35s linear infinite;
            }
            .marquee-container-team:hover .animate-marquee-team {
              animation-play-state: paused;
            }
          `}</style>

          <div className="mb-10 overflow-hidden marquee-container-team w-full relative">
            <div className="flex w-max animate-marquee-team py-4">
              {[...Array(4)].flatMap(() => [
                { name: 'Neftalí Bermeo Estupiñán', role: t('coop.role.mgr'), img: imgNeftali },
                { name: 'Laura Daniela Peña Guzmán', role: t('coop.role.legal'), img: imgAdministrativaLegal },
                { name: 'Liset Maria España', role: t('coop.role.cont'), img: imgContadora },
                { name: 'Yurani Silva Morales', role: t('coop.role.analist'), img: imgAnalistaCalidades },
                { name: 'Laura Sofía Motta Sotto', role: t('coop.role.aux'), img: imgAuxiliarAnalista }
              ]).map((member, idx) => (
                <div key={idx} className="w-[240px] sm:w-[260px] lg:w-[280px] shrink-0 px-4">
                  <div className="flex flex-col group h-full">
                    <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-neutral-100 shadow-sm border border-neutral-100 flex items-center justify-center">
                      {member.img ? (
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      ) : (
                        <div className="bg-neutral-200/50 w-full h-full flex flex-col items-center justify-center text-neutral-400 group-hover:bg-neutral-200 transition-colors duration-300">
                          <User size={64} strokeWidth={1.2} className="opacity-50" />
                        </div>
                      )}
                    </div>
                    <div className="text-center">
                      <p className="text-[16px] leading-snug text-neutral-800 font-bold mb-1">
                        {member.name}
                      </p>
                      <p className="text-[14px] text-neutral-500 font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Servicios Timeline */}
      <section className="py-32 bg-neutral-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              {t('coop.serv.tag')}
            </span>
            <SectionTitle className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-neutral-900">{t('coop.serv.title')}</SectionTitle>
            <p className="text-neutral-600 mt-6 text-base md:text-lg">
              {t('coop.serv.desc')}
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-neutral-200 transform -translate-x-1/2 rounded-full">
              <div className="w-full h-full bg-gradient-to-b from-transparent via-gold to-transparent opacity-80 rounded-full"></div>
            </div>
            
            {servicios.map((servicio, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between mb-24 last:mb-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-gold rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10"></div>
                
                {/* Image */}
                <div className={`w-full md:w-[45%] mb-8 md:mb-0 flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`overflow-hidden shadow-2xl relative ${servicio.isCircle ? 'w-64 h-64 md:w-80 md:h-80 rounded-full mx-auto md:mx-0' : 'w-full h-80 rounded-[2rem]'}`}
                  >
                    <img src={servicio.image} alt={servicio.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" referrerPolicy="no-referrer" />
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="w-full md:w-[45%]">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`bg-white p-8 md:p-10 rounded-3xl border border-neutral-100 shadow-sm text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
                  >
                    <h3 className="text-3xl font-serif font-bold text-neutral-900 mb-4">{servicio.title}</h3>
                    <p className="text-neutral-600 text-lg leading-relaxed">{servicio.desc}</p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Main Card */}
            <Link to="/productos#linea-de-productos" className="lg:col-span-4 block cursor-pointer group">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-neutral-900 p-12 md:p-16 flex flex-col justify-end relative overflow-hidden min-h-[500px] rounded-3xl shadow-xl hover:shadow-2xl transition-all h-full"
              >
                <div className="absolute top-12 right-12 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Leaf className="w-24 h-24 text-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="relative z-10 w-full">
                  <div className="flex flex-col sm:flex-row justify-between items-start xl:items-center mb-6 gap-2">
                    <h3 className="text-white font-serif font-bold text-3xl sm:text-4xl leading-tight">{t('coop.spec.main.title')}</h3>
                    <ArrowRight className="text-gold opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all transform sm:-translate-x-4 group-hover:translate-x-0 shrink-0" size={36} />
                  </div>
                  <p className="text-white/70 text-base md:text-lg leading-relaxed">
                    {t('coop.spec.main.desc')}
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* Grid of smaller cards */}
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
              <Link to="/productos" className="block cursor-pointer">
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-neutral-50 border border-neutral-100 p-10 md:p-12 flex flex-col justify-between rounded-3xl group shadow-sm hover:shadow-xl transition-all h-full"
                >
                  <div>
                    <h4 className="text-3xl font-serif font-bold text-neutral-900">{t('coop.spec.exc.title')}</h4>
                    <p className="text-neutral-600 mt-4 text-lg">{t('coop.spec.exc.desc')}</p>
                  </div>
                  <div className="flex justify-end mt-12">
                    <ArrowRight className="w-10 h-10 text-gold group-hover:translate-x-3 transition-transform" />
                  </div>
                </motion.div>
              </Link>

              <Link to="/productos" className="block cursor-pointer">
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-gold p-10 md:p-12 flex flex-col justify-between rounded-3xl group text-white shadow-sm hover:shadow-xl transition-all h-full"
                >
                  <div>
                    <h4 className="text-3xl font-serif font-bold">{t('coop.spec.var.title')}</h4>
                    <p className="text-white/90 mt-4 text-lg">{t('coop.spec.var.desc')}</p>
                  </div>
                  <div className="flex justify-end mt-12">
                    <ArrowRight className="w-10 h-10 text-white group-hover:translate-x-3 transition-transform" />
                  </div>
                </motion.div>
              </Link>

              <Link to="/sostenibilidad" className="md:col-span-2 block cursor-pointer group">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-neutral-50 border border-neutral-100 p-10 md:p-12 flex flex-col md:flex-row items-center gap-12 rounded-3xl shadow-sm group-hover:shadow-xl transition-all h-full"
                >
                  <div className="md:w-3/5">
                    <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-4 block">{t('coop.spec.sus.tag')}</span>
                    <h4 className="text-3xl font-serif font-bold text-neutral-900 leading-tight flex items-center gap-4">
                      {t('coop.spec.sus.title')}
                      <ArrowRight className="text-gold opacity-0 group-hover:opacity-100 transition-all transform -translate-x-4 group-hover:translate-x-0" size={28} />
                    </h4>
                    <p className="text-neutral-600 mt-6 text-lg">{t('coop.spec.sus.desc')}</p>
                  </div>
                  <div className="md:w-2/5 flex justify-center group-hover:scale-105 transition-transform duration-300">
                    <CloudRain className="w-40 h-40 text-neutral-300 group-hover:text-gold transition-colors duration-300" strokeWidth={1} />
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 relative overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1961&auto=format&fit=crop" 
            alt="Coffee beans background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-16 leading-tight"
            dangerouslySetInnerHTML={{ __html: t('coop.cta.title') }}
          />
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://wa.me/573112336243"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-white px-12 py-5 font-bold uppercase text-sm tracking-widest hover:bg-gold-hover rounded-2xl transition-all shadow-xl hover:-translate-y-1 inline-flex justify-center items-center"
            >
              {t('coop.cta.btn1')}
            </a>
            <Link 
              to="/productos"
              className="border-2 border-white text-white px-12 py-5 font-bold uppercase text-sm tracking-widest hover:bg-white hover:text-neutral-900 rounded-2xl transition-all shadow-xl hover:-translate-y-1 inline-flex justify-center items-center"
            >
              {t('coop.cta.btn2')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
