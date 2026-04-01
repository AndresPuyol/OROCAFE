import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import logo from '../img/logo.png';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-neutral-900 text-neutral-400 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand and About */}
          <div className="lg:col-span-2">
            <Link 
              to="/" 
              className="flex items-center gap-3 mb-6 group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img 
                src={logo} 
                alt="Orocafé Logo" 
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform" 
              />
              <h2 className="text-2xl font-serif font-extrabold tracking-tight text-white">
                OROCAFE<span className="font-sans font-normal text-gold">&</span>CA
              </h2>
            </Link>
            <p className="text-neutral-500 max-w-md leading-relaxed mb-8">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1CgdvrrUYc/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-gold hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/orocafe.ca?igsh=aDl6YmdwYjFxMzVw&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-gold hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/573112336243"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-gold hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="18" height="18">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">{t('footer.links')}</h3>
            <ul className="space-y-4">
              {[
                { name: t('nav.products'), path: '/productos' },
                { name: t('nav.cooperative'), path: '/cooperativa' },
                { name: t('nav.sustainability'), path: '/sostenibilidad' },
                { name: t('nav.contact'), path: '/contacto' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-gold transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">{t('footer.contact')}</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold shrink-0 mt-1" size={18} />
                <span>{t('cont.val.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold shrink-0" size={18} />
                <span>{t('cont.val.phone')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold shrink-0" size={18} />
                <span>{t('cont.val.email')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 text-center text-sm text-neutral-600">
          <p>&copy; {currentYear} OROCAFÉ&CA. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
