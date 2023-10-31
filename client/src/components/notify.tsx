import { notification } from 'antd'

interface Notify {
  description: string
  type: string
  duration: number
  message: string
}

function notify({ description, type = 'success', duration, message }: Notify) {
  // @ts-ignore
  return notification[type]({ message, description, duration: duration || 3 })
}

export default notify
