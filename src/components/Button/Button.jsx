import React from 'react';
import s from './Button.module.css';
export const Button = ({ buttonLoadMore }) => {
  return (
    <div className={s.holder}>
      <button className={s.button} onClick={buttonLoadMore}>
        Add more
      </button>
    </div>
  );
};
