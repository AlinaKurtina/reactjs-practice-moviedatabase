import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationsEN from '@/locales/en/translation.json';
import translationsRU from '@/locales/ru/translation.json';

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallback: 'en-US',
    resources: {
        en: {
            translation: translationsEN
        },
        ru: {
            translation: translationsRU
        }
    }
})

export default i18n;