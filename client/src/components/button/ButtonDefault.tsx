import { Button } from 'antd'
import React, { ReactNode } from 'react'

type ButtonDefaultProps = {
  disabled: boolean
  className: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  icon: ReactNode
  text: string
}
function ButtonDefault({
  disabled,
  className,
  onClick,
  icon,
  text,
}: ButtonDefaultProps) {
  return (
    <Button
      // size="medium"
      key={2}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {icon}
      {text}
    </Button>
  )
}

export default ButtonDefault
