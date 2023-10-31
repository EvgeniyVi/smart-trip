import { Form, Input } from 'antd'
import './style.scss'
import { useTranslation } from 'react-i18next'

type InputFormProps = {
  name: string
  rules: {}
  label: string
  initialValue: string
  formClassName: string
  placeholder: string
}
const InputPasswordFormComponent = ({
  name,
  rules = {},
  label,
  initialValue,
  placeholder,
  formClassName = 'antd_form',
}: InputFormProps) => {
  const { t } = useTranslation()
  return (
    <Form.Item
      name={name}
      rules={[rules]}
      label={t(label)}
      className={formClassName}
      initialValue={initialValue}
    >
      <Input.Password
        onClick={(e) => e.stopPropagation()}
        placeholder={t(placeholder)}
      />
    </Form.Item>
  )
}

export default InputPasswordFormComponent
