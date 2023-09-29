import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import localeEn from './locales/en.json'
import localeUa from './locales/ua.json'

const resources = {
  en: {
    translation: { ...localeEn },
  },
  ua: {
    translation: { ...localeUa },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'ua',
  fallbackLng: 'ua',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
