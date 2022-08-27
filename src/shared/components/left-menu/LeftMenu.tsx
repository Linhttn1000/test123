import { Menu } from '@mui/icons-material';
import { Button, Drawer } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './styles.module.scss';
import SubLeftMenu from '../sub-left-menu';

const LeftMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const showSubMenu = (): void => {
    setIsOpen(true);
  };

  const hideSubMenu = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={classes.menu}>
        <div className={classes['menu__hamburger-btn']}>
          <Button onClick={showSubMenu}>
            <Menu />
          </Button>
          <Drawer anchor='left' open={isOpen} onClose={hideSubMenu}>
            <SubLeftMenu />
          </Drawer>
        </div>
        <div className={classes['menu__logo']}>
          <Link to='/'>
            <img src="/logo.png" alt="Logo" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default LeftMenu;