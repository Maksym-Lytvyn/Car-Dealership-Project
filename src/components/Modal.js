import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
  const modalRoot = document.getElementById('modal-root'); // Створіть елемент в DOM для модального вікна

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;