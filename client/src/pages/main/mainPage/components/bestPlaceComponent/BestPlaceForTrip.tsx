import './style.scss'
import { CardComponent } from '../../../../../components/cardComponent'

const BestPlaceForTrip = () => (
  <div className="container">
    <div className="container__wrapper">
      <div className="header">
        <span className="underline">Discover</span> our idyllic countryside
        cabin
      </div>
      <div className="subtitle">
        <span>
          Fully equipped kitchen and bathroom with plenty of walking and cycling
          routes to explore.
        </span>
        <span>
          <a href="/">View all cabins</a>
        </span>
      </div>
      <div className="best-place-card">
        <CardComponent />
      </div>
    </div>
  </div>
)

export default BestPlaceForTrip
