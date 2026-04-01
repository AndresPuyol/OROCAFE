import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Coffee, ShieldCheck, Leaf, Map as MapIcon, MapPin, Users, Bean } from 'lucide-react';
import Map, { Marker, NavigationControl, Source, Layer } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import HeroCarousel from '../components/HeroCarousel';
import fondoPrincipal from '../img/fondo-principal.jpg';
import iconoGranos from '../img/TU_ICONO_GRANOS.png';
import imgCafeterito from '../img/cafeterito.jpeg';
import fondoMata from '../img/TU_FONDO_MATA_ARRIBA.png';
import fondoGranosAbajo from '../img/TU_FONDO_GRANOS_ABAJO.png';
import huilaGeoJson from '../data/huila.json';
import imgBorbonRosado from '../img/BorbonRosado.jpeg';
import imgCaturra from '../img/Caturra.jpeg';
import imgGeisha from '../img/Geisha.jpeg';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const features = [
    {
      icon: <Users className="text-gold" size={28} />,
      title: t('home.feat1.title'),
      desc: t('home.feat1.desc'),
      link: '/cooperativa'
    },
    {
      icon: <ShieldCheck className="text-gold" size={28} />,
      title: t('home.feat2.title'),
      desc: t('home.feat2.desc'),
      link: '/productos'
    },
    {
      icon: <Leaf className="text-gold" size={28} />,
      title: t('home.feat3.title'),
      desc: t('home.feat3.desc'),
      link: '/sostenibilidad'
    },
  ];

  const varieties = [
    {
      name: t('home.var1.name'),
      image: imgBorbonRosado,
      desc: t('home.var1.desc'),
    },
    {
      name: t('home.var2.name'),
      image: imgCaturra,
      desc: t('home.var2.desc'),
    },
    {
      name: t('home.var3.name'),
      image: imgGeisha,
      desc: t('home.var3.desc'),
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center px-4 pt-32 pb-32 md:pt-40">
        <HeroCarousel />

        <div className="container mx-auto relative z-10 text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-gold font-bold tracking-[0.3em] uppercase text-sm mb-6"
          >
            
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-extrabold leading-[1.1] mb-8"
          >
            {t('home.hero.title1')}<br />
            <span className="text-gold italic">{t('home.hero.title2')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {t('home.hero.desc')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/productos"
              className="bg-gold hover:bg-gold-hover text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              {t('home.hero.btn1')} <Coffee size={20} />
            </Link>
            <Link
              to="/cooperativa"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-2xl font-bold text-lg transition-all hover:-translate-y-1 flex items-center justify-center text-center"
            >
              {t('home.hero.btn2')}
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 py-6 bg-neutral-900/80 backdrop-blur-sm text-white text-center font-serif italic text-xl border-t border-white/10">
          {t('home.hero.footer')}
        </div>
      </section>

      {/* History Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-60 md:opacity-75 mix-blend-multiply"
          style={{ 
            backgroundImage: `url(${imgCafeterito})`, 
            backgroundPosition: 'left top', 
            backgroundRepeat: 'no-repeat',
            backgroundSize: '50%'
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-full h-full pointer-events-none opacity-10 md:opacity-15"
          style={{ 
            backgroundImage: `url(${fondoMata})`, 
            backgroundPosition: 'right bottom', 
            backgroundRepeat: 'no-repeat',
            backgroundSize: '40%'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex justify-center items-center gap-4 mb-6">
              <img src={iconoGranos} alt="Ícono de granos de café" className="h-10 md:h-12 w-auto object-contain translate-y-2" />
              <SectionTitle className="text-4xl md:text-5xl font-serif font-bold">{t('home.history.title')}</SectionTitle>
            </div>
            <p className="text-neutral-600 text-lg">{t('home.history.subtitle')}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-neutral-100 transition-all hover:shadow-xl group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-bl-full group-hover:bg-gold/10 transition-colors duration-300 z-0" />
              <div className="relative z-10 text-center md:text-left space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-3">{t('home.history.section1.title')}</h3>
                  <p className="text-neutral-600 text-lg leading-relaxed">{t('home.history.section1.p')}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-3">{t('home.history.section2.title')}</h3>
                  <p className="text-neutral-600 text-lg leading-relaxed">{t('home.history.section2.p')}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-3">{t('home.history.section3.title')}</h3>
                  <p className="text-neutral-600 text-lg leading-relaxed">{t('home.history.section3.p')}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-3">{t('home.history.section4.title')}</h3>
                  <p className="text-neutral-600 text-lg leading-relaxed">{t('home.history.section4.p')}</p>
                </div>
                
                <div className="pt-6 border-t border-neutral-100">
                  <p className="text-gold font-bold text-xl italic leading-relaxed text-center">
                    "{t('home.history.footer')}"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-32 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex justify-center items-center gap-4 mb-6">
              <img src={iconoGranos} alt="Ícono de granos de café" className="h-10 md:h-12 w-auto object-contain translate-y-2" />
              <SectionTitle className="text-4xl md:text-5xl font-serif font-bold">{t('home.commitment.title')}</SectionTitle>
            </div>
            <p className="text-neutral-600 text-lg">{t('home.commitment.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <Link to={f.link} key={i}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative p-10 rounded-3xl shadow-xl transition-all hover:shadow-2xl hover:shadow-gold/10 overflow-hidden group bg-[#3E2723] h-full"
                >
                  {/* Yellow Coffee Beans scattered randomly in background */}
                  <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 group-hover:rotate-12 transition-all duration-300">
                    <Bean className="text-gold" size={40} strokeWidth={1.5} />
                  </div>
                  <div className="absolute -bottom-4 right-1/4 opacity-10 group-hover:opacity-30 group-hover:-rotate-12 transition-all duration-300 -rotate-45">
                    <Bean className="text-gold" size={64} strokeWidth={1} />
                  </div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-black/20 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:bg-gold/10 transition-colors duration-300">
                      {f.icon}
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white drop-shadow-sm">{f.title}</h3>
                      <ArrowRight className="text-gold opacity-0 group-hover:opacity-100 transition-all transform -translate-x-4 group-hover:translate-x-0" size={24} />
                    </div>
                    <p className="text-white/80 leading-relaxed font-light">{f.desc}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/10 rounded-full -z-10" />
                <div className="w-full h-[400px] md:h-[500px] bg-[#FCF8F2] rounded-3xl shadow-2xl overflow-hidden border-4 border-white relative z-0">
                  <Map
                    initialViewState={{
                      longitude: -75.9372,
                      latitude: 3.9792,
                      zoom: 4.8
                    }}
                    style={{ width: '100%', height: '100%' }}
                    mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
                    attributionControl={false}
                    scrollZoom={false}
                  >
                    <NavigationControl position="top-right" />
                    
                    {/* Resaltado del Departamento del Huila */}
                    <Source type="geojson" data={huilaGeoJson as any}>
                      <Layer
                        id="huila-fill"
                        type="fill"
                        paint={{
                          'fill-color': '#e6b810',
                          'fill-opacity': 0.35,
                        }}
                      />
                      <Layer
                        id="huila-line"
                        type="line"
                        paint={{
                          'line-color': '#cca30d',
                          'line-width': 2,
                        }}
                      />
                    </Source>

                    <Marker longitude={-75.9372} latitude={1.9792} anchor="bottom">
                      <div className="relative flex flex-col items-center justify-center group cursor-pointer">
                        <div className="absolute top-1 w-4 h-4 bg-gold rounded-full animate-ping opacity-75" />
                        <MapPin className="text-gold fill-white drop-shadow-md" size={48} />
                        <div className="mt-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap text-sm font-bold text-neutral-800">
                          Timaná, Huila
                        </div>
                      </div>
                    </Marker>
                  </Map>
                </div>
                <div className="absolute -bottom-8 -right-8 bg-gold text-white p-6 rounded-full shadow-2xl border-8 border-white hidden md:flex flex-col items-center justify-center text-center w-28 h-28 pointer-events-none z-10">
                  <span className="text-3xl font-serif font-bold leading-none">250+</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest mt-1">{t('home.loc.families')}</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">{t('home.loc.tag')}</span>
              <div className="flex items-center gap-4 mb-8">
                <img src={iconoGranos} alt="Ícono de granos de café" className="h-10 md:h-12 w-auto object-contain translate-y-2" />
                <SectionTitle className="text-4xl md:text-5xl font-serif font-bold leading-tight">{t('home.loc.title')}</SectionTitle>
              </div>
              <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
                {t('home.loc.desc')}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center text-gold">
                    <MapIcon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider">{t('home.loc.alt.label')}</p>
                    <p className="font-bold">{t('home.loc.alt.val')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center text-gold">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider">{t('home.loc.soil.label')}</p>
                    <p className="font-bold">{t('home.loc.soil.val')}</p>
                  </div>
                </div>
              </div>
              <Link
                to="/cooperativa"
                className="inline-flex items-center gap-2 text-gold font-bold hover:gap-4 transition-all"
              >
                {t('home.loc.link')} <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Varieties Section */}
      <section className="py-32 bg-neutral-50 relative overflow-hidden">
        {/* Bloque de Imagen - Foto de Fondo */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <img 
            src={fondoPrincipal} 
            alt="Foto de fondo cafetal" 
            className="w-full h-full object-cover opacity-20 grayscale transition-opacity"
          />
          {/* Filtro gris superpuesto para mejor contraste */}
          <div className="absolute inset-0 bg-neutral-900/10 mix-blend-multiply pointer-events-none" />
        </div>
        {/* Gradient Fades for a seamless look */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-neutral-50 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-neutral-50 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex justify-center items-center gap-4 mb-6">
              <img src={iconoGranos} alt="Ícono de granos de café" className="h-10 md:h-12 w-auto object-contain translate-y-2" />
              <SectionTitle className="text-4xl md:text-5xl font-serif font-bold" highlightCount={2}>{t('home.var.title')}</SectionTitle>
            </div>
            <p className="text-neutral-600 text-lg">{t('home.var.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {varieties.map((v, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-neutral-100 group">
                <div className="h-64 overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold mb-4">{v.name}</h3>
                  <p className="text-neutral-500 leading-relaxed mb-6">{v.desc}</p>
                  <Link to="/productos" className="text-gold font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    {t('home.var.link')} <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full flex flex-col">
        {/* Top Half: Yellow containing text */}
        <div className="bg-[#e6b810] pt-24 pb-4 px-4">
          <div className="container mx-auto text-center flex flex-col items-center justify-center">
            <SectionTitle 
              className="text-4xl md:text-5xl font-serif font-black text-neutral-900 mb-6 drop-shadow-sm" 
              highlightCount={0}
            >
              {t('home.cta.title')}
            </SectionTitle>
            <p className="text-neutral-900 text-xl max-w-2xl mx-auto font-bold drop-shadow-sm">
              {t('home.cta.desc')}
            </p>
          </div>
        </div>

        {/* Wavy transition: Yellow melting into Gray */}
        <div className="w-full bg-neutral-200 relative -mt-1 z-0">
          <svg viewBox="0 0 1440 320" className="w-full h-16 md:h-24 xl:h-32 block" preserveAspectRatio="none">
            <path fill="#e6b810" d="M0,160L60,170.7C120,181,240,203,360,181.3C480,160,600,96,720,90.7C840,85,960,139,1080,160C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
        </div>

        {/* Bottom Half: Gray containing the Button, overlaying slightly up into the wave wrapper */}
        <div className="bg-neutral-200 pb-6 pt-0 px-4 flex justify-center relative z-10 text-center -mt-6 md:-mt-12">
          <Link
            to="/contacto"
            className="bg-[#e6b810] text-white hover:bg-neutral-900 hover:text-white px-10 py-5 rounded-full font-extrabold text-xl transition-all shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1 inline-block"
          >
            {t('home.cta.btn')}
          </Link>
        </div>
      </section>

    </div>
  );
}
