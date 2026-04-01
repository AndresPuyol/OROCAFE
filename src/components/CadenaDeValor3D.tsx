import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { RefreshCw } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import imgFinca from '../img/ADN/FINCA.jpeg';
import imgCompra from '../img/ADN/caficultrocompra.jpeg';
import imgTransporte from '../img/ADN/transporte.jpeg';
import imgAlmacenaje from '../img/ADN/almacenamiento.jpeg';
import imgTostion from '../img/ADN/TOSTION.jpeg';
import imgComercializacion from '../img/comercio.jpeg';
import { useLanguage } from '../contexts/LanguageContext';

interface NodeCardProps {
  index: number;
  node: { id: number; title: string; img: string; };
  scrollYProgress: MotionValue<number>;
}

const NodeCard: React.FC<NodeCardProps> = ({ index, node, scrollYProgress }) => {
  // Puntos de anclaje para la animación.
  // Calculamos la distancia (diff) entre el scrollYProgress y el punto de anclaje de esta tarjeta
  const p_i = index * 0.2;
  const diff = useTransform(scrollYProgress, (v: any) => v - p_i);
  
  // Rango de entrada base relativo a diff (desde -0.6 hasta +0.6 de distancia)
  const input = [-0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6];

  // Interpolación de valores en base a 'diff' (esto evita los errores WAAPI de offsets > 1 o < 0)
  const rotateX = useTransform(diff, input, [60, 40, 20, 0, -20, -40, -60]);
  const rotateY = useTransform(diff, input, [0, -30, -15, 0, 15, 30, 0]);
  const translateX = useTransform(diff, input, [0, -100, -120, 0, 120, 100, 0]);
  const translateY = useTransform(diff, input, [600, 300, 150, 0, -150, -300, -600]);
  const translateZ = useTransform(diff, input, [-800, -400, -150, 0, -150, -400, -800]);
  const scale = useTransform(diff, input, [0.4, 0.6, 0.85, 1, 0.85, 0.6, 0.4]);
  const opacity = useTransform(diff, input, [0, 0.3, 0.6, 1, 0.6, 0.3, 0]);
  
  // Z-index estricto basado en cercanía para evitar clipping entrecortado
  const zIndexFloat = useTransform(diff, input, [0, 10, 20, 100, 20, 10, 0]);
  const zIndex = useTransform(zIndexFloat, (v) => Math.round(v as number));

  return (
    <motion.div
      className="absolute left-0 right-0 mx-auto w-72 md:w-80 aspect-[4/5] rounded-[2rem] border-[2px] border-amber-400/50 p-6 flex flex-col shadow-[0_8px_32px_rgba(0,0,0,0.1)] bg-[#fdfbf7]/60 backdrop-blur-md"
      style={{
        rotateX,
        rotateY,
        x: translateX,
        y: translateY,
        z: translateZ,
        scale,
        opacity,
        zIndex,
        transformOrigin: "center center",
      }}
    >
      {/* Image Content */}
      <div className="flex-1 w-full rounded-2xl mb-6 shadow-sm relative overflow-hidden bg-white/30 backdrop-blur-sm">
        <img src={node.img} alt={node.title} className="absolute inset-0 w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        <div className="absolute bottom-3 right-4 text-white font-black text-4xl opacity-80 drop-shadow-md">
          0{index + 1}
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center pb-2">
        <h3 className="text-2xl font-black text-stone-800 tracking-tight">
          {node.title}
        </h3>
        <div className="w-12 h-1.5 bg-amber-400 mx-auto mt-4 rounded-full" />
      </div>
    </motion.div>
  );
};

export default function CadenaDeValor3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  
  const NODES = [
    { id: 1, title: t('coop.cv.node1'), img: imgFinca },
    { id: 2, title: t('coop.cv.node2'), img: imgCompra },
    { id: 3, title: t('coop.cv.node3'), img: imgTransporte },
    { id: 4, title: t('coop.cv.node4'), img: imgAlmacenaje },
    { id: 5, title: t('coop.cv.node5'), img: imgTostion },
    { id: 6, title: t('coop.cv.node6'), img: imgComercializacion },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative w-full bg-[#fdfbf7] min-h-[400dvh]">
      {/* Sticky Container */}
      <div className="sticky top-0 min-h-[100dvh] w-full flex flex-col overflow-hidden">
        
        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto w-full px-6 md:px-12 items-center relative gap-8 z-10">
          
          {/* Left Column - Fixed Text */}
          <div className="max-w-xl z-20">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-none">
                 <SectionTitle className="text-4xl md:text-5xl font-serif font-bold text-neutral-900">{t('coop.cv.title')}</SectionTitle>
            </h1>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-medium">
              {t('coop.cv.desc')}
            </p>
          </div>

          {/* Right Column - 3D Carousel Area */}
          <div className="h-[60dvh] md:h-[80dvh] w-full relative flex items-center justify-center" style={{ perspective: '1500px' }}>
            
            {/* Scroll Widget */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 text-amber-500 z-50">
              <div className="w-px h-24 bg-gradient-to-b from-transparent to-amber-500/50" />
              <RefreshCw className="w-6 h-6 animate-[spin_6s_linear_infinite]" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase whitespace-nowrap [writing-mode:vertical-rl] rotate-180 py-4 opacity-80">
                Scroll-Driven Rotation active
              </span>
              <div className="w-px h-24 bg-gradient-to-t from-transparent to-amber-500/50" />
            </div>

            {/* Central Axis Decor */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
              <div className="w-2 h-[80%] bg-gradient-to-b from-transparent via-amber-200/40 to-transparent rounded-full blur-[2px]" />
            </div>

            {/* Nodes Container */}
            <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
              {NODES.map((node, i) => (
                <NodeCard 
                  key={node.id} 
                  index={i} 
                  node={node} 
                  scrollYProgress={scrollYProgress} 
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
