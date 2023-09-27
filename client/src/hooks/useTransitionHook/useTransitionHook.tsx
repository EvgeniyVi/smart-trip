import { CSSTransition } from 'react-transition-group'
import React, { useState } from 'react'
import './style.scss'

interface childrenProps {
  children: React.ReactNode
}
const useTransitionHook = () => {
  const [show, setShow] = useState<boolean>(false)
  const handleShow = () => setShow(!show)
  function WrapperTransition(props: childrenProps) {
    const { children } = props
    return (
      <CSSTransition in={show} classNames="slide" timeout={3000} unmountOnExit>
        {children}
      </CSSTransition>
    )
  }

  return {
    handleShow,
    WrapperTransition,
  }
}

export default useTransitionHook
