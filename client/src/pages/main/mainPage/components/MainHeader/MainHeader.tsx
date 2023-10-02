import { Header } from 'antd/es/layout/layout'

import { useTranslation } from 'react-i18next'
import { GlobalOutlined } from '../../../../../components/icon'
import SearchBar from '../../../../../components/searchBar/SearchBar'
import LanguageMenu from '../../../../../components/languageMenu/LanguageMenu'
import withModal from '../../../../../HOCs/withModal'
import Form from '../Form'

function MainHeader() {
  const { t } = useTranslation()
  const UserModal = withModal(Form, {
    okButtonText: t('Sign in'),
    disabled: false,
    title: t('Sign in'),
    className: '',
  })

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
          <UserModal header="hello" />
          <LanguageMenu />
        </div>
      </div>
    </Header>
  )
}

export default MainHeader
