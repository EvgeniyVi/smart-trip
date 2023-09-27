// import React, { useState } from 'react'
// import { CSSTransition } from 'react-transition-group'
//
// interface withCssTransitionProps {
//   loading: boolean
//   okButtonText: string
//   buttonProps: object
//   footer: string
//   title: string
//   type: string
//   className: string
// }
//
// const withCssTransition = <P extends object>(
//   Component: React.ComponentType<P>
// ): React.FC<P & withCssTransitionProps> =>
//   function ({ ...props }: withCssTransitionProps) {
//     const [show, setShow] = useState<boolean>(false)
//     const handleShow = () => setShow(true)
//     const handleHide = () => setShow(false)
//     return <CSSTransition />
//   }
//
// // interface withAntdModalProps {
// //   loading: boolean
// //   okButtonText: string
// //   buttonProps: object
// //   footer: string
// //   title: string
// //   type: string
// //   className: string
// // }
//
// // function withAntdModal(
// //   Component: React.ComponentType<P>,
// //   {
// //     okButtonText,
// //     buttonProps = {},
// //     footer,
// //     title,
// //     type,
// //     size,
// //     disabled,
// //     className,
// //     tooltipTitle = null,
// //     icon,
// //     style,
// //   }
// // ) {
// //   return function ComponentWithDialog(props) {
// //     const [visible, setVisible] = useState(false)
// //     const handleOpen = () => setVisible(true)
// //     const handleClose = () => setVisible(false)
// //     return (
// //       <div>
// //         {okButtonText && (
// //           <ButtonDefault
// //             onClick={handleOpen}
// //             type={type}
// //             size={size}
// //             disabled={disabled}
// //             className={className}
// //             style={style.style}
// //             text={okButtonText}
// //             icon={icon}
// //           />
// //         )}
// //         <Modal
// //           title={title}
// //           open={visible}
// //           footer={footer}
// //           destroyOnClose
// //           className="modalWindow"
// //           onCancel={handleClose}
// //         >
// //           <Component {...props} onClose={handleClose} />
// //         </Modal>
// //       </div>
// //     )
// //   }
// // }
// //
// // export default withAntdModal

export default {}
