import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNews } from '../data/useNews';

export default function NoticiaDetalle() {
  const { id } = useParams<{ id: string }>();
  const newsItems = useNews();
  
  const newsItem = newsItems.find(item => item.id === id);

  if (!newsItem) {
    return <Navigate to="/noticias" />;
  }

  return (
    <div className="overflow-hidden bg-neutral-50 min-h-[100dvh] pb-32">
      <div className="pt-32 md:pt-40"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            to="/noticias"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-gold transition-colors font-bold mb-8"
          >
            <ArrowLeft size={20} /> Volver a Noticias
          </Link>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-sm border border-neutral-100 overflow-hidden relative"
          >
            {/* Header / Image Placeholder Area */}
            {/* Si la noticia tuviera imagen (.imageUrl), la renderizaríamos acá. Por defecto usa el cover de color e ícono */}
            <div className={`w-full h-64 md:h-80 ${newsItem.bgColor} relative flex items-center justify-center`}>
               <div className="absolute inset-0 bg-neutral-900/10 mix-blend-multiply pointer-events-none" />
               <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="drop-shadow-md z-10"
               >
                 {newsItem.icon}
               </motion.div>
            </div>

            {/* Content Body */}
            <div className="p-10 md:p-14 relative z-10">
              <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">
                {newsItem.category}
              </span>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-8 leading-tight">
                {newsItem.title}
              </h1>
              
              {/* Dynamic Content Space */}
              <div className="prose prose-lg text-neutral-600 max-w-none leading-relaxed prose-p:mb-6">
                <p className="text-xl text-neutral-500 italic mb-8 border-l-4 border-gold pl-6">
                  {newsItem.desc}
                </p>
                <p>
                  {newsItem.content}
                </p>
                {/* 
                  Aquí irían otros componentes o imágenes incrustadas usando markdown o dangerouslySetInnerHTML 
                  si provinieran de un CMS o JSON con "blocks". 
                */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
