import { useLanguage } from '../contexts/LanguageContext';
import { AppWindow, Type, Layers } from 'lucide-react';

export function useNews() {
  const { t } = useLanguage();

  return [
    {
      id: '1',
      category: t('news.cat1'),
      title: t('news.title1'),
      desc: t('news.desc1'),
      content: 'Contenido completo extendido de la noticia 1 adaptado de ' + t('news.desc1') + ' Esta sección está preparada para ampliarse dinámicamente según el tamaño del texto.',
      bgColor: 'bg-red-500',
      icon: <AppWindow className="text-white w-24 h-24 stroke-[1]" />,
    },
    {
      id: '2',
      category: t('news.cat2'),
      title: t('news.title2'),
      desc: t('news.desc2'),
      content: 'Contenido completo extendido de la noticia 2 adaptado de ' + t('news.desc2') + ' Esta sección está preparada para ampliarse dinámicamente según el tamaño del texto.',
      bgColor: 'bg-sky-400',
      icon: <Type className="text-white w-24 h-24 stroke-[1]" />,
    },
    {
      id: '3',
      category: t('news.cat3'),
      title: t('news.title3'),
      desc: t('news.desc3'),
      content: 'Contenido completo extendido de la noticia 3 adaptado de ' + t('news.desc3') + ' Esta sección está preparada para ampliarse dinámicamente según el tamaño del texto.',
      bgColor: 'bg-slate-200',
      icon: <Layers className="text-slate-600 w-24 h-24 stroke-[1]" />,
    }
  ];
}
