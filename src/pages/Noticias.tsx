import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { useNews } from '../data/useNews';

export default function Noticias() {
  const { t } = useLanguage();
  const newsItems = useNews();

  return (
    <div className="overflow-hidden bg-neutral-50 min-h-[100dvh] pb-32">
      <div className="pt-32 md:pt-40"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-neutral-100 mb-16 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-bl-full z-0" />
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
                {t('news.browsing')}
              </h1>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Link to={`/noticias/${item.id}`} key={item.id} className="block group h-full">
                <div
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-neutral-100 transition-all hover:shadow-xl h-full flex flex-col relative"
                >
                  <div className={`w-full h-56 md:h-64 ${item.bgColor} flex items-center justify-center`}>
                    <div className="drop-shadow-sm">
                      {item.icon}
                    </div>
                  </div>
                  
                  <div className="p-10 flex-grow flex flex-col bg-white relative z-10">
                    <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">
                      {item.category}
                    </span>
                    
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4 leading-snug group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-neutral-500 leading-relaxed font-light text-base mt-auto">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
