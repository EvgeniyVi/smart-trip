import { DatePicker, Form } from 'antd'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { useTranslation } from 'react-i18next'
import moment from 'moment'
import { InternalFieldProps } from 'rc-field-form/lib/Field'
import { FC } from 'react'
import { AdditionalPickerLocaleLangProps } from 'antd/lib/date-picker/generatePicker'

dayjs.extend(customParseFormat)

interface DatePickerComponentProps {
  name: string
  rules?: InternalFieldProps['rules']
  initialValue?: InternalFieldProps['initialValue']
  label?: string
  classNameForm?: string
  placeholder: AdditionalPickerLocaleLangProps['placeholder']
  disabledLastDate?: boolean
  className?: string
}

const DateTimePickerComponent: FC<DatePickerComponentProps> = ({
  name,
  placeholder,
  rules,
  label,
  className,
  disabledLastDate = false,
  initialValue = moment(),
  ...props
}) => {
  const { t } = useTranslation()

  const disabledDate = (current: any) =>
    current && current < dayjs().endOf('day')
  return (
    <Form.Item
      name={name}
      label={label}
      rules={rules}
      className="form-reset-margin"
      initialValue={initialValue}
    >
      <DatePicker
        placeholder={t(placeholder)}
        onClick={(e) => e.stopPropagation()}
        {...props}
        className={className}
      />
    </Form.Item>
  )
}

export default DateTimePickerComponent
