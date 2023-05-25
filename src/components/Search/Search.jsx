import React from 'react';
import { SearchContext } from '../../App';

import styles from './search.module.scss';

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

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
