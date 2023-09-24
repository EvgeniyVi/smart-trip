import { Form, Input } from 'antd'
import './style.scss'

type InputFormProps = {
  name: string
  rules: {}
  label: string
  initialValue: string
  formClassName: string
}
function InputFormComponent({
  name,
  rules = {},
  label,
  initialValue,
  formClassName = 'antd_form',
}: InputFormProps) {
  return (
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
}

export default InputFormComponent
