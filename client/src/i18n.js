import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import localeEn from './locales/en.json'
import localeUa from './locales/ua.json'
import localeRu from './locales/ru.json'

const resources = {
  en: {
    translation: { ...localeEn },
  },
  ua: {
    translation: { ...localeUa },
  },
  ru: {
    translation: { ...localeRu },
  },
}

i18n.use(initReactI18next).init({
  resources,
  preload: ['ua'],
  fallbackLng: 'ua',
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ['path', 'localStorage'],
  },
})

export default i18n
