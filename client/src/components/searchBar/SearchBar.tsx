import './style.scss'
import { Input } from 'antd'
import { useTranslation } from 'react-i18next'
import { SearchOutlined } from '../icon'

function SearchBar() {
  const { t } = useTranslation()
  return (
    <div className="search_box">
      <Input
        className="search_input"
        type="text"
        name=""
        placeholder={t('Search')}
      />
      <SearchOutlined className="search_button" />
    </div>
  )
}

export default SearchBar
