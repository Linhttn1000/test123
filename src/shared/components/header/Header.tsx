import React from 'react';
import LeftMenu from '../left-menu';
import MiddleMenu from '../middle-menu';
import RightMenu from '../right-menu';
import classes from './styles.module.scss';

const Header: React.FC = () => {
  return (
    <>
      <header className={classes.header}>
        <LeftMenu />
        <MiddleMenu />
        <RightMenu />
      </header>
    </>
  );
};

export default Header;