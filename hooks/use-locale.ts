'use client';

import { useState, useEffect } from 'react';
import { type Locale, defaultLocale } from '@/lib/i18n';

export function useLocale() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    // Cargar idioma guardado del localStorage
    const savedLocale = localStorage.getItem('mall-locale') as Locale;
    if (savedLocale && ['es', 'en', 'pt'].includes(savedLocale)) {
      setLocale(savedLocale);
    } else {
      // Detectar idioma del navegador
      const browserLang = navigator.language.split('-')[0] as Locale;
      if (['es', 'en', 'pt'].includes(browserLang)) {
        setLocale(browserLang);
      }
    }
  }, []);

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('mall-locale', newLocale);
  };

  return { locale, changeLocale };
}