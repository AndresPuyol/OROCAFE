import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../img/LOgosinfondo.png';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.products'), path: '/productos' },
    { name: t('nav.cooperative'), path: '/cooperativa' },
    { name: t('nav.sustainability'), path: '/sostenibilidad' },
    { name: t('nav.contact'), path: '/contacto' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4">
        <nav className={`flex items-center justify-between px-4 md:px-6 py-2 md:py-3 rounded-2xl transition-all duration-300 ${scrolled ? 'glass-header' : 'bg-white shadow-xl'}`}>
          <Link 
            to="/" 
            className="flex items-center gap-2 sm:gap-3 group shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src={logo} 
              alt="Orocafé Logo" 
              className="h-10 sm:h-12 md:h-15 w-auto object-contain group-hover:scale-110 transition-transform" 
            />
            <h1 className="text-base sm:text-lg md:text-xl font-serif font-extrabold tracking-tight text-neutral-900 leading-tight">
              OROCAFE<span className="font-sans font-normal text-gold">&</span>CA
            </h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  location.pathname === link.path ? 'text-gold' : 'text-neutral-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="bg-gold hover:bg-gold-hover text-white px-6 py-2.5 rounded-2xl text-sm font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              {t('nav.join')}
            </Link>
            
            <div className="flex items-center gap-2 border-l border-neutral-200 pl-4">
              <button 
                onClick={() => { setLanguage('es'); console.log('Switched to ES'); }} 
                className={`text-sm font-bold transition-colors ${language === 'es' ? 'text-gold' : 'text-neutral-400 hover:text-neutral-600'}`}
              >
                ES
              </button>
              <span className="text-neutral-300 text-xs">|</span>
              <button 
                onClick={() => { setLanguage('en'); console.log('Switched to EN'); }} 
                className={`text-sm font-bold transition-colors ${language === 'en' ? 'text-gold' : 'text-neutral-400 hover:text-neutral-600'}`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Elements */}
          <div className="md:hidden flex items-center gap-1 sm:gap-3 shrink-0">
            <div className="flex items-center gap-1 sm:gap-2">
              <button 
                onClick={() => { setLanguage('es'); console.log('Switched to ES'); }} 
                className={`text-xs sm:text-sm font-bold transition-colors px-1 ${language === 'es' ? 'text-gold' : 'text-neutral-400'}`}
              >
                ES
              </button>
              <span className="text-neutral-300 text-xs">|</span>
              <button 
                onClick={() => { setLanguage('en'); console.log('Switched to EN'); }} 
                className={`text-xs sm:text-sm font-bold transition-colors px-1 ${language === 'en' ? 'text-gold' : 'text-neutral-400'}`}
              >
                EN
              </button>
            </div>
            
            <button
              className="p-1 sm:p-2 text-neutral-600 hover:text-gold transition-colors border-l border-neutral-100 pl-2 sm:pl-3 ml-1 sm:ml-0"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl md:hidden border-t border-neutral-100"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium py-2 border-b border-neutral-50 ${
                    location.pathname === link.path ? 'text-gold' : 'text-neutral-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contacto"
                className="bg-gold text-white text-center py-3 rounded-2xl font-bold mt-2"
              >
                {t('nav.join')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
