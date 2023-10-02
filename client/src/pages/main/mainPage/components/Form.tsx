import { useTranslation } from 'react-i18next'
import { InputFormComponent } from '../../../../components/form/inputFormComponent'
import InputPasswordFormComponent from '../../../../components/form/inputFormComponent/InputPasswordComponent'
import { ButtonDefault } from '../../../../components/button/inxed'

function Form() {
  const { t } = useTranslation()
  return (
    <div>
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
          onClick={() => console.log('auth')}
          icon={null}
          text="Sign in"
        />
      </div>
    </div>
  )
}
export default Form
