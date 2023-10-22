import React from 'react';
import "./Modal.css";
import { createPortal } from 'react-dom';

interface ModalProps {
  children: React.ReactNode,
  isOpen: boolean,
  onClose(): void
}

const Modal = (props: ModalProps) => {

  if (!props.isOpen) return null

  return createPortal(
    <div className='modal'>
      <div className='react_modal__overlay'></div>
      <div className='react_modal__container'>
        <section className="react_modal__content">
          <header className="react_modal__header">Title</header>
          <button className="react_modal__cls-btn" onClick={props.onClose} >&times;</button>

          <div className="react_modal__body">
            {props.children}
          </div>

          <footer className="react_modal__footer">
            footer content
          </footer>
        </section>
      </div>
    </div>
    ,document.body
  )
}

export default Modal;