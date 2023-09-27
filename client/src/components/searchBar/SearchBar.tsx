import './style.scss'
import { Button, Input } from 'antd'
import { SearchOutlined } from '../icon'

function SearchBar() {
  return (
    <div className="search_box">
      <Input
        className="search_input"
        type="text"
        name=""
        placeholder="Search"
      />
      <SearchOutlined className="search_button" />
    </div>
  )
}

export default SearchBar
