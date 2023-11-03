import { AutoComplete, Form, SelectProps } from 'antd'

import { FC } from 'react'
import { InternalFieldProps } from 'rc-field-form/lib/Field'

interface AutoCompleteComponentProps {
  name: string
  rules?: InternalFieldProps['rules']
  initialValue?: InternalFieldProps['initialValue']
  options: SelectProps['options']
  onSelect?: SelectProps['onSelect']
  allowClear?: SelectProps['allowClear']
  onChange?: SelectProps['onChange']
  label?: string
  classNameForm?: string
  className?: string
  placeholder: SelectProps['placeholder']
}

const AutoCompleteComponent: FC<AutoCompleteComponentProps> = ({
  name,
  rules,
  initialValue,
  label,
  className,
  classNameForm,
  options,
  onSelect,
  onChange,
  allowClear = true,
  placeholder,
}) => (
  <Form.Item
    name={name}
    label={label}
    rules={rules}
    style={{ marginBottom: 0 }}
    className={classNameForm}
    initialValue={initialValue}
  >
    <AutoComplete
      options={options}
      allowClear={allowClear}
      placeholder={placeholder}
      onSelect={onSelect}
      className={className}
      onChange={onChange}
    />
  </Form.Item>
)

export default AutoCompleteComponent
