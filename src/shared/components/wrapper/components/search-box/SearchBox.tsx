import React from 'react';
import { Box, TextField, List, ListItem, ListItemText } from '@mui/material';
import { Stack } from '@mui/system';
import classes from './styles.module.scss';

const SearchBox: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Stack direction='column' alignItems='center' justifyItems='center'>
          <TextField
            label='Search'
            variant='standard'
            sx={{
              width: '50%',
            }}
          />
          <h3>Discover</h3>
          <List>
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
        </Stack>
      </Box>
    </>
  );
};

export default SearchBox;
