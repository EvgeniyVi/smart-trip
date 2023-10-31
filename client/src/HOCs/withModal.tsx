import React, { useState } from 'react'
import { Modal } from 'antd'
import { useTranslation } from 'react-i18next'
import { ButtonDefault } from '../components/button/inxed'

interface withAntdModalProps {
  okButtonText?: string
  footer?: string
  title?: string
  disabled: boolean
  icon?: React.JSX.Element
  className: string
}

interface ComponentWithDialogProps {
  header: string
}

function withModal(
  Component: React.ComponentType<any>,
  {
    okButtonText = '',
    footer = '',
    title = '',
    disabled,
    icon,
    className,
  }: withAntdModalProps
) {
  // eslint-disable-next-line react/function-component-definition
  return function ComponentWithDialog(props: ComponentWithDialogProps) {
    const { t } = useTranslation()

    const [visible, setVisible] = useState(false)
    const handleOpen = () => setVisible(true)
    const handleClose = () => setVisible(false)
    return (
      <div>
        {okButtonText && (
          <ButtonDefault
            onClick={handleOpen}
            disabled={disabled}
            text={t(okButtonText)}
            icon={icon}
            className={className}
          />
        )}
        <Modal
          title={t(title)}
          open={visible}
          footer={footer}
          destroyOnClose
          className="modalWindow"
          onCancel={handleClose}
        >
          <Component {...props} onClose={handleClose} />
        </Modal>
      </div>
    )
  }
}

export default withModal
