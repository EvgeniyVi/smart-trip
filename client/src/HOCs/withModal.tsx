import React, { FC, useState } from 'react'
import { Modal } from 'antd'
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
    title,
    disabled,
    icon,
    className,
  }: withAntdModalProps
) {
  return function ComponentWithDialog(props: ComponentWithDialogProps) {
    const [visible, setVisible] = useState(false)
    const handleOpen = () => setVisible(true)
    const handleClose = () => setVisible(false)
    return (
      <div>
        {okButtonText && (
          <ButtonDefault
            onClick={handleOpen}
            disabled={disabled}
            text={okButtonText}
            icon={icon}
            className={className}
          />
        )}
        <Modal
          title={title}
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
