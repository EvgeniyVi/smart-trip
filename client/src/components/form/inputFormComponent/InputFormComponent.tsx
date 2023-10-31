import { Form, Input } from 'antd'
import './style.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type InputFormProps = {
  name: string
  rules: object
  label: string
  initialValue: string
  formClassName: string
  placeholder: string
}
const InputFormComponent: FC<InputFormProps> = ({
  name,
  rules = {},
  label,
  initialValue,
  formClassName = 'antd_form',
                                                    placeholder,
}) => (
  <Form.Item
    name={name}
    rules={[rules]}
    label={label}
    className={formClassName}
    initialValue={initialValue}
  >
    <Input onClick={(e) => e.stopPropagation()} placeholder={placeholder} />
  </Form.Item>
)

export default InputFormComponent
