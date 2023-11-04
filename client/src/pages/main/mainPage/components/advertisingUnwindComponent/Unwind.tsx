import { useTranslation } from 'react-i18next'
import { Users } from '../../../../../media'
import './style.scss'
import RateComponent from '../../../../../components/rate/RateComponent'
import SearchBar from '../searchBarComponent/SearchBar'

const Unwind = () => {
  const { t } = useTranslation()
  return (
    <div className="unwind-block">
      <div className="container unwind-block_display_flex">
        <div className="unwind-block__info-assessment">
          <div className="unwind-block__header">
            <span className="unwind-main-header">
              {t('Leave the office behind and')}
              <span className="spec-word-unwind">{t('unwind')}</span>
            </span>
            <div className="unwind-header-subtitle">
              <span className="unwind-header-subtitle__text">
                {t(
                  'Welcome to our cozy cabin nestled in the heart of the mountains!Our cabin is the perfect getaway for those seeking peace and relaxation in a natural setting.'
                )}
              </span>
            </div>
            <div className="unwind-block__rate">
              <img src={Users} alt="assessment" />
              <RateComponent />
            </div>
          </div>
        </div>
        <div className="unwind-block__search-bar">
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Unwind
