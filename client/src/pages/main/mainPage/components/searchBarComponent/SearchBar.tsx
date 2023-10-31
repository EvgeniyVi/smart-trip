import './style.scss'
import { AutoComplete } from 'antd'

const SearchBar = () => (
  <div className="search-bar">
    <div className="container">
      <div className="search-bar__wrapper">
        <div className="search-bar__item">
          <AutoComplete />
        </div>
      </div>
    </div>
  </div>
)

export default SearchBar
