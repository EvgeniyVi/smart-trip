import './style.scss'
import { Form, Input } from 'antd'

function LoginPage() {
  const [form] = Form.useForm()
  return (
    <div className="wrapper_auth_page">
      <div className="container_auth">
        <Form form={form}>
          <Input />
        </Form>
      </div>
    </div>
  )
}

export default LoginPage
