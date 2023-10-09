import { Button } from 'antd'
import React from 'react'
import useCommon from '../../services/commonService'
import { en, ua } from '../../constants'
import ImageComponent from '../ImageComponent'
import Ukraine from '../../media/Ukraine.png'
import England from '../../media/England.png'
import './style.scss'

const LanguageMenu = () => {
  const { changeLanguage } = useCommon()

  const buttonProps = {
    width: 20,
    height: 20,
    preview: false,
  }

  const handleChange = (value: string) => {
    changeLanguage(value)
  }

  return (
    <div className="language_block">
      <span>
        <Button type="text" onClick={() => handleChange('ua')}>
          <ImageComponent src={Ukraine} {...buttonProps} />
        </Button>
      </span>

      <span>
        <Button type="text" onClick={() => handleChange('en')}>
          <ImageComponent src={England} {...buttonProps} />
        </Button>
      </span>
    </div>
  )
}

export default LanguageMenu
