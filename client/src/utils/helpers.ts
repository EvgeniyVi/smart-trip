import { en, ru, ua } from '../constants'

export const getNavigatorLanguage = () => {
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
  if (navigatorLanguage.includes(ru)) {
    return ru
  }
  return ua
}
