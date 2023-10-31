import './style.scss'
import { Select } from 'antd'

const SearchBar = () => (
  <div className="search-bar">
    <div className="container">
      <div className="search-bar__wrapper">
        <div className="search-bar__item">
          <Select
            style={{ width: '196px' }}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
          />
        </div>
      </div>
    </div>
  </div>
)

export default SearchBar
