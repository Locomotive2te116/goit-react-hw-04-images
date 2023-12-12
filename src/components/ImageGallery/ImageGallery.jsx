import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
export const ImageGallery = ({ imagesData, openModal }) => {
  return (
    <>
      <ul className={s.ImageGallery}>
        {imagesData.map(item => {
          return (
            <ImageGalleryItem key={item.id} {...item} openModal={openModal} />
          );
        })}
      </ul>
    </>
  );
};
