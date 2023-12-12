import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import s from './Loader.module.css';
export const Loader = () => {
  return (
    <div className={s.style}>
      <InfinitySpin width="200" height="200" color="blue" />
    </div>
  );
};
