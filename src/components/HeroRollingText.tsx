import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const phrases = [
  'Del corazón del Huila\npara el mundo',
  'Más de 56 años\nde la mano de\nnuestros caficultores',
  'Pasión, tradición\ny sostenibilidad',
];

// Very subtle warm tint — barely visible so the photo shows through
const bgColors = [
  'rgba(8, 4, 0, 0.22)',
  'rgba(30, 15, 3, 0.20)',
  'rgba(50, 28, 5, 0.22)',
  'rgba(60, 38, 5, 0.20)',
  'rgba(15, 8, 0, 0.24)',
];

export default function HeroRollingText() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit'>('enter');

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 'enter') {
      timeout = setTimeout(() => setPhase('hold'), 800);
    } else if (phase === 'hold') {
      timeout = setTimeout(() => setPhase('exit'), 3200);
    } else {
      timeout = setTimeout(() => {
        setIndex(i => (i + 1) % phrases.length);
        setPhase('enter');
      }, 600);
    }

    return () => clearTimeout(timeout);
  }, [phase]);

  const currentBg = bgColors[index % bgColors.length];

  return (
    <div
      className="hero-rolling-overlay"
      style={{ background: currentBg }}
    >
      <div className="hero-rolling-inner">
        <p className={`hero-rolling-phrase hero-rolling-phrase--${phase}`}>
          {phrases[index]}
        </p>
        <Link
          to="/cooperativa"
          className="hero-cta-btn"
          style={{ pointerEvents: 'auto' }}
        >
          Conocer la Cooperativa
        </Link>
      </div>

      <style>{`
        .hero-rolling-overlay {
          position: absolute;
          inset: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 1.6s ease;
          pointer-events: none;
        }

        .hero-rolling-inner {
          width: 100%;
          max-width: 860px;
          padding: 0 3rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          gap: 2.5rem;
        }

        .hero-cta-btn {
          display: inline-block;
          padding: 0.85rem 2.4rem;
          border: 1.5px solid rgba(255,255,255,0.75);
          border-radius: 20px;
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
          animation: fadeInBtn 0.8s 1.2s ease both;
        }

        .hero-cta-btn:hover {
          background: #e6b810;
          border-color: #e6b810;
          color: #1a0e00;
          transform: translateY(-2px);
        }

        @keyframes fadeInBtn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-rolling-phrase {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.1rem, 5vw, 5rem);
          font-weight: 600;
          font-style: normal;
          color: #ffffff;
          line-height: 1.25;
          letter-spacing: 0.04em;
          text-align: center;
          white-space: pre-line;
          text-shadow:
            0 2px 18px rgba(0,0,0,0.45),
            0 1px 4px rgba(0,0,0,0.55);
          will-change: transform, opacity;
          margin: 0 auto;
          width: 100%;
        }

        /* ENTER: slide up from below + fade in */
        .hero-rolling-phrase--enter {
          animation: heroRollIn 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* HOLD: fully visible */
        .hero-rolling-phrase--hold {
          opacity: 1;
          transform: translateY(0);
        }

        /* EXIT: slide up + fade out */
        .hero-rolling-phrase--exit {
          animation: heroRollOut 0.6s cubic-bezier(0.55, 0, 1, 0.45) forwards;
        }

        @keyframes heroRollIn {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroRollOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-50px);
          }
        }

        /* Gold accent line centered */
        .hero-rolling-phrase--hold::after,
        .hero-rolling-phrase--enter::after {
          content: '';
          display: block;
          margin: 1.1rem auto 0;
          width: 60px;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, #e6b810, transparent);
          border-radius: 1px;
          animation: stripeIn 0.7s 0.5s ease forwards;
          opacity: 0;
          transform: scaleX(0);
          transform-origin: center;
        }

        @keyframes stripeIn {
          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @media (max-width: 640px) {
          .hero-rolling-inner {
            padding: 0 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
