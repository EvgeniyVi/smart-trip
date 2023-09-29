import { Header } from 'antd/es/layout/layout'
import React from 'react'
import { GlobalOutlined, UserOutlined } from '../../../../../components/icon'
import SearchBar from '../../../../../components/searchBar/SearchBar'
import LanguageMenu from '../../../../../components/LanguageMenu'

const headerStyle: React.CSSProperties = {
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
}

function MainHeader() {
  return (
    <Header style={{ background: 'unset' }}>
      <div className="header">
        <div className="demo-logo">
          <GlobalOutlined className="logo" />
          <span className="logo">Travel</span>
        </div>
        <div>
          <SearchBar />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <UserOutlined className="right_menu user_icon" />
          <LanguageMenu />
        </div>
      </div>
    </Header>
  )
}

export default MainHeader
