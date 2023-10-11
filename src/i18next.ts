import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: require('./locales/en.json'),
            },
            fr: {
                translation: require('./locales/fr.json'),
            },
        },
        lng: 'en', // default language
        fallbackLng: 'en', // fallback language
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
