import './style.scss'
import { Divider } from 'antd'
import { ButtonDefault } from '../../../../../components/button/inxed'

function MainBody() {
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
            Its time to travel
          </span>
          <span className="information_travel_block_content">
            Plan your next Tropical Holidays
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

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div className="body_navigate_block" style={{ marginBottom: 'auto' }}>
            <div className="children_navigate_block">
              <span>Travel</span>
              <span>
                <Divider />
              </span>
              <ButtonDefault
                disabled={false}
                className=""
                onClick={() => console.log('see')}
                icon={null}
                text="See"
              />
            </div>
          </div>
          <div className="body_navigate_block">
            <div className="children_navigate_block">
              <span>Recomened</span>
              <span>Recomened</span>
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
