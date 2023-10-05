import { useTranslation } from 'react-i18next'
import { Form } from 'antd'
import { InputFormComponent } from '../../../../components/form/inputFormComponent'
import InputPasswordFormComponent from '../../../../components/form/inputFormComponent/InputPasswordComponent'
import { ButtonDefault } from '../../../../components/button/inxed'
import { useLoginUserMutation } from '../../../../redux/service/authApi'

interface Login {
  email: string
  password: string
}

function AuthForm() {
  const { t } = useTranslation()
  const [form] = Form.useForm()
  const [loginUser, { data, isLoading, isSuccess, error }] =
    useLoginUserMutation()
  console.log(data)
  const login = (values: Login) => {
    loginUser({ ...values })
  }
  return (
    <Form form={form} onFinish={login}>
      <InputFormComponent
        name="email"
        rules={[]}
        label=""
        placeholder="Email"
        initialValue=""
        formClassName=""
      />
      <InputPasswordFormComponent
        name="password"
        rules={[]}
        label=""
        initialValue=""
        placeholder="Password"
        formClassName=""
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>{`${t('Need an account?')} ${t('Register')}`}</span>

        <ButtonDefault
          disabled={false}
          className=""
          loading={isLoading}
          onClick={() => form.submit()}
          icon={null}
          text="Sign in"
        />
      </div>
    </Form>
  )
}

export default AuthForm
