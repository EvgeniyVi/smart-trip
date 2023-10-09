import './style.scss'
import { useTranslation } from 'react-i18next'
import { ButtonDefault } from '../../../../../components/button/inxed'

const MainBody = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className="wrapper_body">
        <div className="main_slider_block">
          <div className="children_slider_block">
            <span>This is slider</span>
          </div>
        </div>
        <div className="information_travel_block">
          <span className="information_travel_block_header">
            {t('Its time to travel')}
          </span>
          <span className="information_travel_block_content">
            {t('Plan your next Tropical Holidays')}
          </span>
        </div>
      </div>
      <div className="body_navigate">
        <div className="body_navigate_left_block_wrapper">
          <div className="body_navigate_left_block">
            <div className="body_navigate_left_block_card_top">
              <div className="children_left_block_top" />
            </div>
            <div className="body_navigate_left_block_card_bottom">
              <div className="children_left_block_bottom" />
            </div>
          </div>
        </div>

        <div className="body_navigate_block_wrapper">
          <div className="body_navigate_block_top">
            <div className="children_navigate_block">
              <span>{t('Travel')}</span>
              <ButtonDefault
                disabled={false}
                className=""
                onClick={() => console.log('see')}
                icon={null}
                text="See"
              />
            </div>
          </div>
          <div className="body_navigate_block_bottom">
            <div className="children_navigate_block">
              <span>{t('Recomended')}</span>
              <ButtonDefault
                disabled={false}
                className=""
                onClick={() => console.log('see')}
                icon={null}
                text="See"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBody
