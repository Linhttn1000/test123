import { Group, Home, Image, LocalFireDepartment, Newspaper, Tag } from '@mui/icons-material';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import classes from './styles.module.scss';

const SubLeftMenu: React.FC = () => {
  return (
    <>
      <div className={classes['sub-menu']}>
        <List className={classes['sub-menu__list']}>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <LocalFireDepartment />
            </ListItemIcon>
            <ListItemText>Hots</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Newspaper />
            </ListItemIcon>
            <ListItemText>Submit News</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Image />
            </ListItemIcon>
            <ListItemText>Submit Image</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Tag />
            </ListItemIcon>
            <ListItemText>Tags</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText>Top Users</ListItemText>
          </ListItemButton>
        </List>
      </div>
    </>
  );
};

export default SubLeftMenu;
