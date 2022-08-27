import { Menu, MenuItem } from '@mui/material';
import React from 'react';
import {
  Newspaper,
  Image,
  VideoCall,
  FormatAlignLeft,
  FormatAlignJustify,
  Close,
  Headphones,
} from '@mui/icons-material';
import classes from './styles.module.scss';

interface IFunctionsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
}

const FunctionsMenu = ({ isOpen, onClose, anchorEl }: IFunctionsMenuProps) => {
  return (
    <>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={isOpen}
        onClose={onClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={onClose} className={classes['menu__item']}>
          <Newspaper />
          <span className={classes['menu__item__text']}>News</span>
        </MenuItem>
        <MenuItem onClick={onClose} className={classes['menu__item']}>
          <Image />
          <span className={classes['menu__item__text']}>Images</span>
        </MenuItem>
        <MenuItem onClick={onClose} className={classes['menu__item']}>
          <VideoCall />
          <span className={classes['menu__item__text']}>Video</span>
        </MenuItem>
        <MenuItem onClick={onClose} className={classes['menu__item']}>
          <FormatAlignLeft />
          <span className={classes['menu__item__text']}>Poll</span>
        </MenuItem>
        <MenuItem onClick={onClose} className={classes['menu__item']}>
          <FormatAlignJustify />
          <span className={classes['menu__item__text']}>List</span>
        </MenuItem>
        <MenuItem onClick={onClose} className={classes['menu__item']}>
          <Close />
          <span className={classes['menu__item__text']}>Trivia Quiz</span>{' '}
        </MenuItem>
        <MenuItem onClick={onClose} className={classes['menu__item']}>
          <Headphones />
          <span className={classes['menu__item__text']}>Music</span>
        </MenuItem>
      </Menu>
    </>
  );
};

export default FunctionsMenu;
