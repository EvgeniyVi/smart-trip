import { useTranslation } from 'react-i18next'

import { useSelector } from 'react-redux'
import { Select } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import useCommon from '../services/commonService'
import { en, ru, ua } from '../constants'

const { Option } = Select

function LanguageMenu({ style = null, ...props }) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  // const language = useSelector((state) => state.common.language)
  const { changeLanguage } = useCommon()

  // @ts-ignore
  const handleChange = (event) => {
    changeLanguage(event)
  }

  return (
    <Select
      // value={language}
      value="language"
      {...props}
      onChange={(e) => handleChange(e)}
      onClick={(e) => e.stopPropagation()}
    >
      <Option value={ua}>{t('Ukrainian')}</Option>
      <Option value={ru}>{t('Russian')}</Option>
      <Option value={en}>{t('English')}</Option>
    </Select>
  )
}

export default LanguageMenu
