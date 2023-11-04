import withModal from '../../HOCs/withModal'
import { AuthForm } from '../../pages/auth'
import './style.scss'

export const UserModal = withModal(AuthForm, {
  okButtonText: 'Sign in',
  disabled: false,
  title: 'Sign in',
  className: '',
})

export const ListTravelModal = withModal(AuthForm, {
  okButtonText: 'Travellers',
  disabled: false,
  classNameText: 'text-button',
  title: 'Travellers',
  className: 'button-travellers',
})
