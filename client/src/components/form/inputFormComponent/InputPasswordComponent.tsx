import { Form, Input } from 'antd'
import './style.scss'
import { useTransition } from 'react'
import { useTranslation } from 'react-i18next'
import { EyeInvisibleOutlined, EyeTwoTone } from '../../icon'

type InputFormProps = {
  name: string
  rules: {}
  label: string
  initialValue: string
  formClassName: string
  placeholder: string
}
function InputPasswordFormComponent({
  name,
  rules = {},
  label,
  initialValue,
  placeholder,
  formClassName = 'antd_form',
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
      <Input.Password
        onClick={(e) => e.stopPropagation()}
        placeholder={t(placeholder)}
      />
    </Form.Item>
  )
}

export default InputPasswordFormComponent