import '../../../../../scss/_main/_base.scss'
import '../../../../../scss/_block/_nav.scss'
import './style.scss'
import { Logo } from '../../../../../media'
import { navMenu } from '../../../../../constants/navMenu'

const Header = () => (
  <div className="header">
    <div className="container">
      <div className="header-row">
        <a href="/">
          <img src={Logo} alt="UnwidCabins" />
        </a>
        <div className="nav">
          <div className="nav__list">
            {navMenu.map((item) => (
              <li>
                <span className="nav__list-link">{item.label}</span>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Header
