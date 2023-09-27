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
