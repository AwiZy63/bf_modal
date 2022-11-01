import { useEffect } from 'react';

function Modal({
  show,
  title,
  children,
  onClose
}) {
  const escapeCloseModal = event => {
    if (event.charcode === 27 || event.keyCode === 27) {
      closeModal();
    }
  };
  useEffect(() => {
    document.body.addEventListener("keydown", escapeCloseModal);
    return removeListeners = () => {
      document.body.removeEventListener("keydown", escapeCloseModal);
    };
  }, []);
  return document.body;
}

export { Modal };
