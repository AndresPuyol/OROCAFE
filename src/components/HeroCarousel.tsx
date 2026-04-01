import { useState, useEffect } from 'react';

import img1 from '../img/Fondocarrusel/fondocarrusel1.jpeg';
import img2 from '../img/Fondocarrusel/fondocarrusel2.jpeg';
import img3 from '../img/Fondocarrusel/fondocarrusel3.jpeg';
import img5 from '../img/Fondocarrusel/fondocarrusel5.jpeg';
import img6 from '../img/Fondocarrusel/carrusel10.jpeg';
import img7 from '../img/Fondocarrusel/carrusel9.jpeg';
import img8 from '../img/Fondocarrusel/carrusel7.jpeg';

const images = [img2, img1, img7, img5, img6, img3, img8];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Autoplay change image every 4 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-transparent overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[800ms] ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10 shine-effect' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover object-center brightness-50"
          />
        </div>
      ))}
      {/* Dark overlay to ensure text contrast */}
      <div className="absolute inset-0 hero-gradient z-20 pointer-events-none" />
    </div>
  );
}
