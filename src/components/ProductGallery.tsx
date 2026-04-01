import { useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full h-auto md:h-[500px]">
      {/* Thumbnails (Left side on Desktop, Bottom on Mobile) */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto w-full md:w-28 custom-scrollbar snap-x md:snap-y shrink-0 order-2 md:order-1 pb-2 md:pb-0 md:pr-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`relative rounded-xl overflow-hidden shadow-sm shrink-0 w-20 h-20 md:w-full md:h-24 bg-white border-2 transition-all duration-300 snap-center outline-none ${
              selectedIndex === idx ? 'border-gold ring-2 ring-gold/20' : 'border-neutral-200 hover:border-gold/50'
            }`}
          >
            <img src={img} alt={`${productName} vista ${idx + 1}`} className="w-full h-full object-cover" />
            {selectedIndex === idx && (
              <div className="absolute inset-0 bg-gold/10 flex items-center justify-center">
                <Check className="text-white drop-shadow-md opacity-0" size={20} />
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative w-full h-[400px] md:h-full bg-white rounded-[32px] overflow-hidden shadow-lg border border-neutral-100 flex items-center justify-center order-1 md:order-2 group">
        <div className="absolute -inset-4 bg-neutral-100/50 rounded-[40px] -z-10 group-hover:bg-gold/10 transition-colors duration-300" />
        
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedIndex}
            src={images[selectedIndex]}
            alt={`${productName} principal`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-contain object-center z-10 p-4 drop-shadow-2xl mix-blend-multiply"
          />
        </AnimatePresence>

        {/* Navigation Arrows for Main Image */}
        {images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
              }}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 hover:bg-white backdrop-blur shadow-xl flex items-center justify-center text-neutral-800 hover:text-gold transition-colors border border-neutral-200 scale-90 hover:scale-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
              }}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 hover:bg-white backdrop-blur shadow-xl flex items-center justify-center text-neutral-800 hover:text-gold transition-colors border border-neutral-200 scale-90 hover:scale-100"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
