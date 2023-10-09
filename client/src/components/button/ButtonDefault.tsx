import { Button } from 'antd'
import React, { FC, ReactNode } from 'react'
import { SizeType } from 'antd/es/config-provider/SizeContext'

type ButtonDefaultProps = {
  disabled: boolean
  className: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  icon: ReactNode
  text: string
  size?: SizeType
  loading?: boolean
}

const ButtonDefault: FC<ButtonDefaultProps> = ({
  disabled,
  className,
  onClick,
  icon,
  text,
  size = 'middle',
  loading,
}) => (
  <Button
    size={size}
    key={2}
    disabled={disabled}
    loading={loading}
    onClick={onClick}
    className={className}
  >
    {icon}
    {text}
  </Button>
)

export default ButtonDefault
