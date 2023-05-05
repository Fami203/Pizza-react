import React from 'react';

import styles from './search.module.scss';

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <input
      value={searchValue}
      className={styles.root}
      type="text"
      placeholder="Поиск пиццы ..."
      onChange={(event) => setSearchValue(event.target.value)}
    />
  );
};

export default Search;
