import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import global_en from '../locales/en/global.json';
import global_es from '../locales/es/global.json';
import global_de from '../locales/de/global.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        global: global_en
      },
      es: {
        global: global_es
      },
      de: {
        global: global_de
      },
    },
    fallbackLng: "de",
    debug: true,

    react: {
      useSuspense: true,
    }
  });

export default i18n;