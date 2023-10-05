import React, { useEffect } from 'react'
import i18n from '../i18n'
import { useAppSelector } from '../hooks/redux/reduxHooks'

interface languageProviderProps {
  children: React.ReactElement
}

function LanguageProvider(props: languageProviderProps) {
  const { children } = props
  const language = useAppSelector((state) => state.common.language)
  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  return children
}

export default LanguageProvider
