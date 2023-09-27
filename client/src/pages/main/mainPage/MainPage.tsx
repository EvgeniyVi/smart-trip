import './style.scss'
import { Layout, Space } from 'antd'

import React from 'react'

import MainHeader from './components/MainHeader/MainHeader'
import MainBody from './components/MainBody/MainBody'

function MainPage() {
  return (
    <div className="wrapper_auth_page">
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout>
          <MainHeader />
          <MainBody />
        </Layout>
      </Space>
    </div>
  )
}

export default MainPage
