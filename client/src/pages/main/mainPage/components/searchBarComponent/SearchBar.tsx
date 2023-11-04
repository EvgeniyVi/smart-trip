import { useTranslation } from 'react-i18next'
import { SVGSelectCountry } from '../../../../../media/svg/WantToGo'
import AutoCompleteComponent from '../../../../../components/form/selectFormComponent/SelectFormComponent'
import DateTimePickerComponent from '../../../../../components/form/DateTimePicker/DateTimePickerComponent'

import './style.scss'
import { ListTravelModal } from '../../../../../constants/modal/modalConstants'
import { ButtonDefault } from '../../../../../components/button/inxed'

const SearchBar = () => {
  const { t } = useTranslation()

  const placeholder = (
    <span className="auto-complete-placeholder-wrapper">
      <SVGSelectCountry />
      <span className="auto-complete-placeholder-wrapper__text">
        {t('I want to go')}
      </span>
    </span>
  )

  return (
    <div className="search-bar">
      <div className="container">
        <div className="search-bar__wrapper">
          <div className="search-bar__item">
            <div className="search-bar__item-wrapper item-wrapper-container_background_gray">
              <AutoCompleteComponent
                placeholder={placeholder}
                options={[]}
                className="item-autocomplete item-autocomplete_width "
                name="travel-place"
              />
            </div>
            <div className="search-bar__item-wrapper item-wrapper-container_background_gray">
              <DateTimePickerComponent
                name="check-in"
                placeholder="Check in"
                className="item-date-picker date-picker-placeholder"
              />
            </div>
            <div className="search-bar__item-wrapper item-wrapper-container_background_gray">
              <DateTimePickerComponent
                name="check-out"
                placeholder="Check out"
                className="item-date-picker date-picker-placeholder"
              />
            </div>
            <div className="search-bar__item-wrapper item-wrapper-container_background_gray">
              <ListTravelModal header="" />
            </div>
            <div className="search-bar__item-wrapper item-wrapper-container_background_purple">
              <ButtonDefault
                text={
                  <span className="button-find-travel-text">
                    {t('Find avilable cabins')}
                  </span>
                }
                className="button-find-travel"
                disabled={false}
                icon={null}
                onClick={() => console.log('hello')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
