import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Coffee, Home } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { useLanguage } from '../contexts/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <div className="min-h-[80dvh] pt-32 pb-20 flex items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[#fdfbf7] z-0" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto flex flex-col items-center"
        >
          <div className="relative mb-8">
            <h1 className="text-[8rem] md:text-[12rem] font-serif font-black text-neutral-100 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <Coffee className="w-24 h-24 md:w-32 md:h-32 text-gold animate-[bounce_3s_infinite]" strokeWidth={1.5} />
            </div>
          </div>

          <SectionTitle className="text-3xl md:text-5xl font-serif font-bold text-neutral-900 mb-6" highlightCount={1}>
            {t('404.title')}
          </SectionTitle>
          
          <p className="text-neutral-600 text-lg md:text-xl mb-12 max-w-lg mx-auto">
            {t('404.desc')}
          </p>

          <Link
            to="/"
            className="bg-neutral-900 hover:bg-gold text-white px-8 py-4 rounded-2xl font-bold transition-all hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-3"
          >
            <Home size={20} />
            {t('404.btn')}
          </Link>
        </motion.div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-gold/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -z-10" />
    </div>
  );
}
