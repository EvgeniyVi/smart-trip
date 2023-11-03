import { useTranslation } from 'react-i18next'
import { SVGSelectCountry } from '../../../../../media/svg/WantToGo'
import AutoCompleteComponent from '../../../../../components/form/selectFormComponent/SelectFormComponent'
import DateTimePickerComponent from '../../../../../components/form/DateTimePicker/DateTimePickerComponent'
import { ListTravelModal } from '../../../../../utils/helpers'
import './style.scss'

const SearchBar = () => {
  const { t } = useTranslation()

  const placeholder = (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <SVGSelectCountry />
      <span style={{ paddingLeft: '16px' }}>{t('I want to go')}</span>
    </span>
  )

  return (
    <div className="search-bar">
      <div className="container">
        <div className="search-bar__wrapper">
          <div className="search-bar__item">
            <div className="search-bar__item-wrapper">
              <AutoCompleteComponent
                placeholder={placeholder}
                options={[]}
                className="item-autocomplete"
                name="travel-place"
              />
            </div>
            <div className="search-bar__item-wrapper">
              <DateTimePickerComponent
                name="check-in"
                placeholder="Check in"
                className="item-date-picker"
              />
            </div>
            <div className="search-bar__item-wrapper">
              <DateTimePickerComponent
                name="check-out"
                placeholder="Check out"
                className="item-date-picker"
              />
            </div>
            <div className="search-bar__item-wrapper">
              <ListTravelModal header="" />
            </div>
            <div className="search-bar__item-wrapper">
              <ListTravelModal header="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
