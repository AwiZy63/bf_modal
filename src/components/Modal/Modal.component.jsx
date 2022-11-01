import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import './Modal.style.css';

export default function Modal({ title, description, show, onClose }) {
  const escapeCloseModal = (event) => {
    if (event.charcode === 27 || event.keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", escapeCloseModal);
    return () => {
      document.body.removeEventListener("keydown", escapeCloseModal);
    }
  }, []);

  return ReactDOM.createPortal(
    <div class={`modal-window ${show ? 'modal-window-visible' : ''}`}>
      <div>
        <button type='button' onClick={() => onClose()} class="modal-close"></button>
        <h2>{title || ""}</h2>
        <p>{description || ""}</p>
      </div>
    </div>,
    document.body
  )
}
