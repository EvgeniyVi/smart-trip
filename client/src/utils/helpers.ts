import { en, ua } from '../constants'
import {
  englishLanguage,
  ukraineLanguage,
} from '../locales/localeAntdComponent'

export const getNavigatorLanguage = () => {
  console.log(navigator)
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0]
  }
  return navigator.language || 'ua'
}

export const getLanguage = () => {
  const navigatorLanguage = getNavigatorLanguage()
  if (navigatorLanguage.includes(en)) {
    return en
  }
  return ua
}

export const localizationAntdComponent = (language: string) => {
  switch (language) {
    case 'ua':
      return ukraineLanguage

    case 'en':
      return englishLanguage

    default:
      return null
  }
}
