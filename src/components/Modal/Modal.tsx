import React from 'react';
import "./Modal.css";

interface ModalProps {
  children: React.ReactNode
}

const Modal = (props: ModalProps) => {
  return (
    <div className='modal'>{props.children}</div>
  )
}

export default Modal;