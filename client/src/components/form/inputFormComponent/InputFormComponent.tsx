import { Form, Input } from 'antd'
import './style.scss'
import { FC } from 'react'

type InputFormProps = {
  name: string
  rules: object
  label: string
  initialValue: string
  formClassName: string
}
const InputFormComponent: FC<InputFormProps> = ({
  name,
  rules = {},
  label,
  initialValue,
  formClassName = 'antd_form',
}) => (
  <Form.Item
    name={name}
    rules={[rules]}
    label={label}
    className={formClassName}
    initialValue={initialValue}
  >
    <Input onClick={(e) => e.stopPropagation()} />
  </Form.Item>
)

export default InputFormComponent
