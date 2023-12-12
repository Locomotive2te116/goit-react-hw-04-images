import React from 'react';
import s from './Searchbar.module.css';
export const Searchbar = ({ onSubmit }) => {
  return (
    <header className={s.Searchbar}>
      <form
        className={s.SearchForm}
        onSubmit={() => {
          onSubmit();
        }}
      >
        <button className={s.SearchFormButton} type="submit">
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          placeholder="Search images and photos"
          name="userInput"
        />
      </form>
    </header>
  );
};
