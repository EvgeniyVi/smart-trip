import { Button } from 'antd'
import React from 'react'
import useCommon from '../services/commonService'
import { en, ua } from '../constants'
import ImageComponent from './ImageComponent'
import Ukraine from '../media/Ukraine.png'
import England from '../media/England.png'

function LanguageMenu({ style = null, ...props }) {
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
