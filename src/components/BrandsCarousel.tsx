import imgDavivienda from '../img/Logo carrusel/Davivienda.png';
import imgECOM from '../img/Logo carrusel/ECOM.png';
import imgLCD from '../img/Logo carrusel/LCD..png';
import imgWWF from '../img/Logo carrusel/LOGO_WWF.png';
import imgRainforest from '../img/Logo carrusel/Rainforest Alliance.png';
import imgSKN from '../img/Logo carrusel/SKN_Logo.png';
import imgYARA from '../img/Logo carrusel/YARA.png';
import imgBANCOLOMBIA from '../img/Logo carrusel/BANCOLOMBIA.png';
export default function BrandsCarousel() {
  return (
    <section className="py-4 bg-white border-t border-neutral-100 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-max animate-marquee">
        {/* Renderizamos DOS bloques perfectamente idénticos para que el salto (translate -50%) sea geométricamente invisible */}
        {[1, 2].map((set) => (
          <div key={set} className="flex gap-16 md:gap-32 items-center justify-center px-8 md:px-16 py-2">
            {[
              { name: 'BANCOLOMBIA', src: imgBANCOLOMBIA },
              { name: 'Rainforest Alliance', src: imgRainforest },
              { name: 'WWF', src: imgWWF },
              { name: 'YARA', src: imgYARA },
              { name: 'Davivienda', src: imgDavivienda },
            ].map((partner, i) => (
              <div key={i} className="flex items-center justify-center min-w-[140px] md:min-w-[180px]">
                <img 
                  src={partner.src} 
                  alt={partner.name}
                  className="h-16 md:h-20 w-auto max-w-[200px] object-contain opacity-40 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 cursor-pointer drop-shadow-sm"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
