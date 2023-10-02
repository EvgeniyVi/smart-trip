import { Button } from 'antd'
import React, { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()
  return (
    <Button key={2} disabled={disabled} onClick={onClick} className={className}>
      {icon}
      {t(text)}
    </Button>
  )
}

export default ButtonDefault
