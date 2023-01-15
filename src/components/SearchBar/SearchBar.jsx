import React, { useRef } from 'react';
import styles from './SearchBar.module.css';
import searchIcon from '../../assets/search.png';
import fetchData from '../Api/fetchData';

const SearchBar = ({onFilter}) => {
  const searchInput = useRef('');
  const searchProduct = async () => {
    const value = searchInput.current.value;
    const arrayOfSearch = value.split(' ');
    const obj = {};
    arrayOfSearch.forEach((el) => {
      obj[el.toLowerCase()] = 1;
    });
    const data = await fetchData();
    const filterData = data.filter(
      (item) =>
        obj[item.type.toLowerCase()] ||
        obj[item.color.toLowerCase()] ||
        obj[item.gender.toLowerCase()] ||
        obj[item.price]
    );
    onFilter(filterData);
  };

  return (
    <div className={styles.searchMain}>
      <div>
        <input
          ref={searchInput}
          className={styles.searchInput}
          placeholder='Search for products..'
        />
      </div>
      <div onClick={searchProduct}>
        <img src={searchIcon} alt='search-icon' className={styles.searchIcon} />
      </div>
    </div>
  );
};

export default SearchBar;
