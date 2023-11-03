import { en, ua } from '../constants'
import {
  englishLanguage,
  ukraineLanguage,
} from '../locales/localeAntdComponent'
import withModal from '../HOCs/withModal'
import { AuthForm } from '../pages/auth'

export const getNavigatorLanguage = () => {
  console.log(navigator)
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0]
  }
  return navigator.language || 'ua'
}

export const getLanguage = () => {
  console.log('get languabge')
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

export const UserModal = withModal(AuthForm, {
  okButtonText: 'Sign in',
  disabled: false,
  title: 'Sign in',
  className: '',
})

export const ListTravelModal = withModal(AuthForm, {
  okButtonText: 'Travellers',
  disabled: false,
  title: 'Travellers',
  className: '',
})
