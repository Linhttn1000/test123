import { List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { DISCOVER_CONFIGS as configs } from './configs';
import classes from './styles.module.scss';

const Discover: React.FC = () => {
  return (
    <>
      <h3>Discover</h3>
      <List className={classes['list']}>
        {configs.map((config) => (
          <ListItem key={config.id} className={classes['list-item']}>
            <ListItemText>{config.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Discover;
