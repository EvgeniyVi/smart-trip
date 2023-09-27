import { Header } from 'antd/es/layout/layout'
import React from 'react'
import { GlobalOutlined, UserOutlined } from '../../../../../components/icon'
import SearchBar from '../../../../../components/searchBar/SearchBar'

const headerStyle: React.CSSProperties = {
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
}

function MainHeader() {
  return (
    <Header style={headerStyle}>
      <div className="header">
        <div className="demo-logo">
          <GlobalOutlined className="logo" />
          <span className="logo">Travel</span>
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          <UserOutlined className="right_menu user_icon" />
        </div>
      </div>
    </Header>
  )
}

export default MainHeader
