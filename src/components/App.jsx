import React, { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { getPhotos } from '../Api/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import s from './App.module.css';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [imagesData, setImagesData] = useState([]);
  const [page, setPage] = useState(1);
  const [userInput, setUserInput] = useState('locomotive');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');
  ////
  useEffect(() => {
    async function getImages() {
      try {
        setLoading(true);
        const images = await getPhotos(userInput, page);
        if (page === 1) {
          setImagesData(images);
        } else {
          setImagesData(prevState => [...prevState, ...images]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [userInput, page]);

  const buttonLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const onSubmit = e => {
    e.preventDefault();
    const userInput = e.currentTarget.elements.userInput.value;
    console.log(userInput);
    setUserInput(userInput);
    setPage(1);
    setImagesData([]);
  };
  const openModal = imgUrl => {
    setIsModalOpen(prevState => !prevState);
    setModalImageUrl(imgUrl);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={s.App}>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery imagesData={imagesData} openModal={openModal} />
      {loading === true ? <Loader /> : null}
      <Button buttonLoadMore={buttonLoadMore} />
      {isModalOpen && (
        <Modal modalImageUrl={modalImageUrl} closeModal={closeModal} />
      )}
    </div>
  );
};
