import { useTranslation } from 'react-i18next'
import { Button, Select } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import React from 'react'
import useCommon from '../services/commonService'
import { en, ua } from '../constants'
import { useTypedSelector } from '../redux/useTypeSelector'
import ImageComponent from './ImageComponent'
import Ukraine from '../media/Ukraine.png'
import England from '../media/England.png'

const { Option } = Select

interface handleChange {
  value: string
}
function LanguageMenu({ style = null, ...props }) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const language = useTypedSelector((state) => state.common.language)
  const { changeLanguage } = useCommon()

  const handleChange = (value: string) => {
    changeLanguage(value)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100px',
      }}
    >
      <span>
        <Button type="text" onClick={() => handleChange('ua')}>
          <ImageComponent
            src={Ukraine}
            width={20}
            height={20}
            preview={false}
          />
        </Button>
      </span>

      <span>
        <Button type="text" onClick={() => handleChange('en')}>
          {' '}
          <ImageComponent
            src={England}
            width={20}
            height={20}
            preview={false}
          />
        </Button>
      </span>
    </div>
  )
}

export default LanguageMenu
