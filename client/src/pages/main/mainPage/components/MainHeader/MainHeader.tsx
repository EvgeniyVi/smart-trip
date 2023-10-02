import { Header } from 'antd/es/layout/layout'
import React from 'react'
import { GlobalOutlined, UserOutlined } from '../../../../../components/icon'
import SearchBar from '../../../../../components/searchBar/SearchBar'
import LanguageMenu from '../../../../../components/languageMenu/LanguageMenu'
import withModal from '../../../../../HOCs/withModal'
import Form from '../Form'

function MainHeader() {
  const UserModal = withModal(Form, {
    okButtonText: 'Add',
    footer: 'null',
    disabled: false,
    title: 'Add record',
    icon: <UserOutlined />,
    className: '',
  })

  const props = {
    key: 1,
  }

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
        <div className="right_menu wrapper">
          <UserOutlined className="right_menu user_icon" />
          <UserModal header="hello" />

          <LanguageMenu />
        </div>
      </div>
    </Header>
  )
}

export default MainHeader
