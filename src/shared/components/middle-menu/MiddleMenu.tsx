import { AddReaction, Explore, Home, KeyboardArrowDown, MovieCreation, Whatshot } from '@mui/icons-material';
import { IconButton, Tab, Tabs } from '@mui/material';
import React from 'react';
import classes from './styles.module.scss';

const MiddleMenu = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes['mid-menu']}>
        <Tabs value={value} onChange={handleChange} aria-label='icon label tabs example'>
          <Tab iconPosition='start' icon={<Home />} label='HOME' className={classes['mid-menu__tab-item']} />
          <Tab iconPosition='start' icon={<MovieCreation />} label='SHORTS' className={classes['mid-menu__tab-item']} />
          <Tab iconPosition='start' icon={<AddReaction />} label='REACTIONS' className={classes['mid-menu__tab-item']} />
          <Tab iconPosition='start' icon={<Whatshot />} label='HOTS' className={classes['mid-menu__tab-item']} />
          <Tab iconPosition='start' icon={<Explore />} label='EXPLORE' className={classes['mid-menu__tab-item']} />
        </Tabs>
        <IconButton color='primary' size='large'>
          <KeyboardArrowDown />
        </IconButton>
      </div>
    </>
  );
};

export default MiddleMenu;
