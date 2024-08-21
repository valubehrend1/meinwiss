import { startTransition } from 'react';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import global_en from '../locales/en/global.json';
import global_es from '../locales/es/global.json';
import global_de from '../locales/de/global.json';

console.log('Initializing i18next...'); // Verificar que el archivo se está ejecutando

startTransition(() => {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          global: global_en
        },
        es: {
          global: global_es
        },
        de: {
          global_de
        },
      },
      fallbackLng: "en",
      debug: true,

      react: {
        useSuspense: true, // o false dependiendo de tu caso
      }
    });

  i18n.on('initialized', (options) => {
    console.log('i18n initialized with options:', options);
  });

  i18n.on('languageChanged', (lng) => {
    console.log('Language changed to:', lng);
  });

  i18n.on('loaded', (loaded) => {
    console.log('Loaded languages:', loaded);
  });
});

export default i18n;
