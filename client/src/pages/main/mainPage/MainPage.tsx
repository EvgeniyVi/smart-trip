import './style.scss'
import { Space } from 'antd'

import React from 'react'

import MainHeader from './components/MainHeader/MainHeader'
import MainBody from './components/MainBody/MainBody'

const MainPage = () => (
  <div className="wrapper_auth_page">
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <div>
        <MainHeader />
        <MainBody />
      </div>
    </Space>
  </div>
)

export default MainPage
