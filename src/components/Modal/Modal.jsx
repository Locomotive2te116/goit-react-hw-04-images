import { useEffect } from 'react';
import s from './Modal.module.css';

export const Modal = ({ modalImageUrl, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      console.log(event.key);
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div className={s.backdrop} onClick={closeModal}>
      <img className={s.modal} src={modalImageUrl} alt="Modal" />
    </div>
  );
};
