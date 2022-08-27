import { List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import classes from './styles.module.scss';

const Discover: React.FC = () => {
  return (
    <>
      <h3>Discover</h3>
      <List className={classes['list']}>
        <ListItem className={classes['list-item']}>
          <ListItemText>video</ListItemText>
        </ListItem>
        <ListItem className={classes['list-item']}>
          <ListItemText>music</ListItemText>
        </ListItem>
        <ListItem className={classes['list-item']}>
          <ListItemText>art</ListItemText>
        </ListItem>
        <ListItem className={classes['list-item']}>
          <ListItemText>vimeo</ListItemText>
        </ListItem>
        <ListItem className={classes['list-item']}>
          <ListItemText>instagram</ListItemText>
        </ListItem>
      </List>
    </>
  );
};

export default Discover;
