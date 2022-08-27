import { Search } from '@mui/icons-material';
import React from 'react';
import Discover from '../discover';
import classes from './styles.module.scss';

const SearchBox: React.FC = () => {
  return (
    <>
      <div className={classes['search-box']}>
        <div className={classes['search-box__input']}>
          <input type="text" placeholder='Search' autoFocus />
          <span className={classes['search-box__input__icon']}>
            <Search />
          </span>
        </div>
        <div className={classes['search-box__discover']}>
          <Discover />
        </div>
      </div>
    </>
  );
};

export default SearchBox;
