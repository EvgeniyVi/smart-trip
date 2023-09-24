import './style.scss'
import { Button, Card, Form } from 'antd'
import { InputFormComponent } from '../../components/form/inputFormComponent'

function LoginPage() {
  const [form] = Form.useForm()
  return (
    <div className="wrapper_auth_page">
      <div className="container_auth">
        <Card
          style={{
            backgroundColor: '#F5F5F5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '250px',
            width: '250px',
            opacity: 0.8,
          }}
        >
          <Form
            form={form}
            className="form"
            labelCol={{ span: 12 }}
            wrapperCol={{ span: 12 }}
          >
            <InputFormComponent
              formClassName=""
              initialValue=""
              name="email"
              label="Email"
              rules={{}}
            />
            <InputFormComponent
              formClassName=""
              initialValue=""
              name="password"
              label="Password"
              rules={{}}
            />
            <Form.Item style={{ marginBottom: 0 }}>
              <Button
                htmlType="submit"
                style={{
                  width: '100%',
                  marginTop: 25,
                  backgroundColor: '#3F50B5',
                  color: '#fff',
                }}
              >
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  )
}

export default LoginPage
