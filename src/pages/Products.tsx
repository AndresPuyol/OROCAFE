import SectionTitle from '../components/SectionTitle';
import { motion } from 'motion/react';
import { Coffee, ShieldCheck, ArrowRight, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

import imgBorbonRosado from '../img/BorbonRosado.jpeg';
import imgCaturra from '../img/Caturra.jpeg';
import imgGeisha from '../img/Geisha.jpeg';
import imgF6 from '../img/f6.jpeg';
import imgVariedadColombia from '../img/Variedad Colombia.jpeg';
import imgCastillo from '../img/granos-de-cafe-variedad-castillo.webp';
import imgCenicafe1 from '../img/Cenicafe 1.jpg';
import imgPacamara from '../img/Pacamara-1.webp';
import imgFondoProducto from '../img/FondoDeproducto.jpg';
import imgCafeExelso from '../img/CAfeexelso.jpeg';
import imgCafePergamino from '../img/CafePergamino.jpeg';
import imgCafeTostado from '../img/CafeTostado.jpeg';
import ImgCafemolido from '../img/Cafemolido.jpeg';
import ImgProducto from '../img/CAFETATAYe.jpg';
import imgunidadProducto from '../img/producto1M.png';
import img2 from '../img/producto2.jpg';

import ProductGallery from '../components/ProductGallery';

export default function Products() {
  const { t } = useLanguage();
  const coffeeVarieties = [
    { name: t('products.var1.name'), image: imgCaturra, desc: t('products.var1.desc') },
    { name: t('products.var2.name'), image: imgF6, desc: t('products.var2.desc') },
    { name: t('products.var3.name'), image: imgVariedadColombia, desc: t('products.var3.desc') },
    { name: t('products.var4.name'), image: imgCastillo, desc: t('products.var4.desc') },
    { name: t('products.var5.name'), image: imgBorbonRosado, desc: t('products.var5.desc') },
    { name: t('products.var6.name'), image: imgCenicafe1, desc: t('products.var6.desc') },
    { name: t('products.var7.name'), image: imgPacamara, desc: t('products.var7.desc') },
    { name: t('products.var8.name'), image: imgGeisha, desc: t('products.var8.desc') },
  ];

  const categoriasProductos = [
    {
      title: t('products.cat1.title'),
      desc: t('products.cat1.desc'),
      image: imgCafeExelso,
      isCircle: false
    },
    {
      title: t('products.cat2.title'),
      desc: t('products.cat2.desc'),
      image: imgCafePergamino,
      isCircle: false
    },
    {
      title: t('products.cat3.title'),
      desc: t('products.cat3.desc'),
      image: imgCafeTostado,
      isCircle: false
    },
    {
      title: t('products.cat4.title'),
      desc: t('products.cat4.desc'),
      image: ImgCafemolido,
      isCircle: false
    }
  ];

  const tatayProducts = [
    {
      name: t('products.tatay.card.name'),
      image: ImgProducto,
      images: [imgunidadProducto, ImgProducto, img2],
      desc: t('products.tatay.card.desc'),
      details: [t('products.tatay.card.detail1'), t('products.tatay.card.detail2'), t('products.tatay.card.detail3')],
      technicalSheet: {
        finca: t('products.tsv.farm'),
        departamento: t('products.tsv.dept'),
        municipio: t('products.tsv.mun'),
        altitud: t('products.tsv.alt'),
        variedad: t('products.tsv.var'),
        perfil: t('products.tsv.prof'),
        productores: t('products.tsv.prod')
      },
      packaging: {
        types: [t('products.pkg.type1'), t('products.pkg.type2')],
        weights: [t('products.pkg.weight1')]
      }
    }
  ];

  return (
    <div className="pt-20">
      <section className="relative h-[60dvh] flex items-end justify-start px-8 md:px-16 pb-14">
        <div className="absolute inset-0 z-0">
          <img
            src={imgFondoProducto}
            alt="Fondo productos"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 subpage-hero-gradient" />
        </div>
        <div className="relative z-10 text-left text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-4">{t('products.hero.title')}</h1>
          <p className="text-lg md:text-xl text-white/80">{t('products.hero.desc')}</p>
        </div>
      </section>

      {/* Varieties Carousel Section */}
      <section className="py-24 bg-neutral-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">{t('products.var.tag')}</span>
            <SectionTitle className="text-4xl md:text-5xl font-serif font-bold mb-6">{t('products.var.title')}</SectionTitle>
            <p className="text-neutral-600 text-lg">{t('products.var.desc')}</p>
          </div>

          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 50s linear infinite;
            }
            .marquee-container:hover .animate-marquee {
              animation-play-state: paused;
            }
          `}</style>

          <div className="relative w-full max-w-[100vw] overflow-hidden marquee-container mb-12">
            <div className="flex w-max animate-marquee py-6">
              {[...coffeeVarieties, ...coffeeVarieties, ...coffeeVarieties, ...coffeeVarieties].map((v, i) => (
                <div key={i} className="w-[300px] sm:w-[320px] lg:w-[350px] shrink-0 px-4">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-neutral-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full">
                    <div className="h-48 overflow-hidden bg-neutral-100 relative">
                      {v.image ? (
                        <img src={v.image} alt={v.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-neutral-300">
                          <Coffee size={48} />
                        </div>
                      )}
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-bold mb-3">{v.name}</h3>
                      <div className="w-12 h-1 bg-gold/30 rounded-full mb-4.5" />
                      <p className="text-neutral-500 text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Timeline */}
      <section id="linea-de-productos" className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              {t('products.cat.tag')}
            </span>
            <SectionTitle className="text-4xl md:text-5xl font-serif font-bold text-neutral-900">{t('products.cat.title')}</SectionTitle>
            <p className="text-neutral-600 mt-6 text-lg">
              {t('products.cat.desc')}
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-neutral-200 transform -translate-x-1/2 rounded-full">
              <div className="w-full h-full bg-gradient-to-b from-transparent via-gold to-transparent opacity-80 rounded-full"></div>
            </div>
            
            {categoriasProductos.map((categoria, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between mb-24 last:mb-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-gold rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10"></div>
                
                {/* Image */}
                <div className={`w-full md:w-[45%] mb-8 md:mb-0 flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`overflow-hidden shadow-2xl relative ${categoria.isCircle ? 'w-64 h-64 md:w-80 md:h-80 rounded-full mx-auto md:mx-0' : 'w-full h-80 rounded-[2rem]'}`}
                  >
                    <img src={categoria.image} alt={categoria.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" referrerPolicy="no-referrer" />
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="w-full md:w-[45%]">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`bg-neutral-50 p-8 md:p-10 rounded-3xl border border-neutral-100 shadow-sm text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
                  >
                    <h3 className="text-3xl font-serif font-bold text-neutral-900 mb-4">{categoria.title}</h3>
                    <p className="text-neutral-600 text-lg leading-relaxed">{categoria.desc}</p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TATAY Coffee Placeholders Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">{t('products.tatay.tag')}</span>
            <SectionTitle className="text-4xl md:text-5xl font-serif font-bold mb-6">{t('products.tatay.title')}</SectionTitle>
            <p className="text-neutral-600 text-lg">{t('products.tatay.desc')}</p>
          </div>

          <div className="grid grid-cols-1 gap-24">
            {tatayProducts.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 opacity-60`}
              >
                <div className="lg:w-1/2 w-full">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-neutral-100/50 rounded-[40px] -z-10 group-hover:bg-gold/10 transition-colors duration-300" />
                    {"images" in p && Array.isArray(p.images) && p.images.length > 0 ? (
                      <ProductGallery images={p.images} productName={p.name} />
                    ) : p.image ? (
                      <div className="rounded-[32px] overflow-hidden w-full h-[500px] shadow-lg border border-neutral-100 bg-white flex items-center justify-center">
                        <img src={p.image} alt={p.name} className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-105" />
                      </div>
                    ) : (
                      <div className="rounded-[32px] bg-neutral-50 shadow-inner border-2 border-dashed border-neutral-300 w-full h-[500px] flex flex-col items-center justify-center text-neutral-400 group-hover:border-gold/30 transition-colors">
                        <Coffee size={64} className="mb-4 text-neutral-300 group-hover:text-gold/50 transition-colors" />
                        <span className="font-serif text-2xl font-bold">{t('products.tatay.placeholder.img')}</span>
                        <span className="text-sm">TATAY Coffee</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-neutral-200 rounded-lg flex items-center justify-center text-neutral-500">
                      <Coffee size={20} />
                    </div>
                    <span className="text-neutral-500 font-bold uppercase tracking-widest text-sm">{t('products.tatay.line')}</span>
                  </div>
                  <SectionTitle className="text-4xl md:text-5xl font-serif font-bold mb-8 text-neutral-800">{p.name}</SectionTitle>
                  <p className="text-neutral-600 text-lg mb-8 leading-relaxed">{p.desc}</p>
                  
                  {p.technicalSheet ? (
                    <div className="mb-10 w-full flex flex-col gap-6">
                      <div className="w-full border border-gold/60 rounded flex flex-col font-sans uppercase tracking-[0.05em] shadow-sm select-all">
                        {/* Fila 1 */}
                        <div className="flex w-full border-b border-gold/60">
                          <div className="w-[60%] border-r border-gold/60 p-4 md:p-5 flex flex-col justify-center bg-white/50">
                            <span className="text-2xl md:text-3xl font-black text-neutral-700 leading-none mb-1">{p.technicalSheet.finca}</span>
                            <span className="text-[10px] md:text-[11px] font-bold text-neutral-400 tracking-widest mt-1">{t('products.ts.farm')}</span>
                          </div>
                          <div className="w-[40%] p-4 md:p-5 flex flex-col justify-center items-center text-center bg-white/50">
                            <span className="text-2xl md:text-3xl font-black text-neutral-700 leading-none mb-1">{p.technicalSheet.departamento}</span>
                            <span className="text-[10px] md:text-[11px] font-bold text-neutral-400 tracking-widest mt-1">{t('products.ts.dept')}</span>
                          </div>
                        </div>
                        {/* Fila 2 */}
                        <div className="flex w-full border-b border-gold/60">
                          <div className="w-[35%] border-r border-gold/60 p-4 md:p-5 flex flex-col justify-center bg-white/50">
                            <span className="text-lg md:text-xl font-black text-neutral-700 leading-none mb-1">{p.technicalSheet.municipio}</span>
                            <span className="text-[10px] md:text-[11px] font-bold text-neutral-400 tracking-widest mt-1">{t('products.ts.mun')}</span>
                          </div>
                          <div className="w-[20%] border-r border-gold/60 p-4 md:p-5 flex flex-col justify-center items-center text-center bg-white/50">
                            <span className="text-lg md:text-xl font-black text-neutral-700 leading-none mb-1">{p.technicalSheet.altitud}</span>
                            <span className="text-[10px] md:text-[11px] font-bold text-neutral-400 tracking-widest mt-1">{t('products.ts.alt')}</span>
                          </div>
                          <div className="w-[45%] p-4 md:p-5 flex flex-col justify-center items-center text-center bg-white/50">
                            <span className="text-lg md:text-xl font-black text-neutral-700 leading-none mb-1">{p.technicalSheet.variedad}</span>
                            <span className="text-[10px] md:text-[11px] font-bold text-neutral-400 tracking-widest mt-1">{t('products.ts.var')}</span>
                          </div>
                        </div>
                        {/* Fila 3 */}
                        <div className="w-full border-b border-gold/60 p-4 md:p-5 flex flex-col justify-center items-center text-center bg-gold/5">
                          <span className="text-lg md:text-xl font-black text-neutral-800 leading-none mb-1">{p.technicalSheet.perfil}</span>
                          <span className="text-[10px] md:text-[11px] font-bold text-neutral-400 tracking-widest mt-1">{t('products.ts.prof')}</span>
                        </div>
                        {/* Fila 4 */}
                        <div className="w-full p-4 md:p-5 flex flex-col justify-center items-center text-center bg-white/50">
                          <span className="text-lg md:text-xl font-black text-neutral-700 leading-none mb-1">{p.technicalSheet.productores}</span>
                          <span className="text-[10px] md:text-[11px] font-bold text-neutral-400 tracking-widest mt-1">{t('products.ts.prod')}</span>
                        </div>
                      </div>

                      {/* Banner de Empaque */}
                      {"packaging" in p && p.packaging && (
                        <div className="w-full flex flex-col gap-2 font-sans font-black">
                          {/* Textos encima del banner */}
                          <div className="flex justify-between px-2 text-neutral-900 text-sm md:text-base tracking-wide">
                            <span>{t('products.pkg.roastedType')}</span>
                        
                          </div>
                          {/* Banner amarillo mostaza */}
                          <div className="w-full bg-[#dca81c] rounded-md px-4 py-3 md:px-6 md:py-4 flex justify-between items-center text-neutral-900">
                            <div className="flex items-center gap-4 md:gap-8">
                              {p.packaging.types.map((type: string, idx: number) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <div className="w-3 h-3 md:w-4 md:h-4 bg-rose-700 rounded-full" />
                                  <span className="text-sm md:text-lg uppercase">{type}</span>
                                </div>
                              ))}
                            </div>
                           
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                      {p.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
                          <ShieldCheck className="text-neutral-400" size={18} />
                          <span className="font-medium text-neutral-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={`https://wa.me/573112336243?text=Hola,%20me%20gustaría%20ser%20notificado%20cuando%20lancen%20los%20productos%20TATAY%20Coffee`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-neutral-800 hover:bg-neutral-900 text-white px-10 py-4 rounded-2xl font-bold transition-all hover:shadow-xl hover:-translate-y-1 inline-flex w-fit items-center gap-2"
                    >
                      {t('products.tatay.btn1')} <ArrowRight size={20} />
                    </a>
                    <a 
                      href="https://www.instagram.com/coffeetatay?igsh=MWpsZGYwZGo5Mm00aA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-500 via-rose-500 to-amber-500 hover:opacity-90 text-white px-10 py-4 rounded-2xl font-bold transition-all hover:shadow-xl hover:-translate-y-1 inline-flex w-fit items-center gap-2"
                    >
                      {t('products.tatay.btn2')} <Instagram size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
