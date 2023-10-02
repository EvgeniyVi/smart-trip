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
function InputFormComponent({
  name,
  rules = {},
  label,
  initialValue,
  formClassName = 'antd_form',
  placeholder,
}: InputFormProps) {
  const { t } = useTranslation()
  return (
    <Form.Item
      name={name}
      rules={[rules]}
      label={t(label)}
      className={formClassName}
      initialValue={initialValue}
    >
      <Input
        onClick={(e) => e.stopPropagation()}
        placeholder={t(placeholder)}
      />
    </Form.Item>
  )
}

export default InputFormComponent
