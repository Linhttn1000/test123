import { Add, Menu, Person, Search } from '@mui/icons-material';
import { Box, Button, Drawer, Stack, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeftMenu from '../left-menu/LeftMenu';
import { MIDDLE_MENU_ITEMS as middleMenuItems } from './../configs';
import classes from './styles.module.scss';

const Header: React.FC = () => {
  const [isShowLeftMenu, setIsShowLeftMenu] = useState<boolean>(false);

  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 12px' }}>
        <Stack alignItems='center' justifyContent='center' direction='row'>
          <Button onClick={() => setIsShowLeftMenu(true)}>
            <Menu />
          </Button>
          <Drawer anchor='left' open={isShowLeftMenu} onClose={() => setIsShowLeftMenu(false)}>
            <LeftMenu />
          </Drawer>
          <div className={classes.logo}>
            <Link to='/'>
              <img src='/logo.png' alt='Logo' />
            </Link>
          </div>
        </Stack>
        <Box>
          <Tabs aria-label='icon label tabs example'>
            {middleMenuItems.map((item) => (
              <Tab key={item.id} icon={<item.icon />} label={item.title} />
            ))}
          </Tabs>
        </Box>
        <Box>
          <Stack direction='row' spacing={2}>
            <Button variant='contained' color='info'>
              <Search />
            </Button>
            <Button variant='contained' color='error'>
              <Add />
            </Button>
            <Button variant='contained' color='primary'>
              <Person />
            </Button>
            <Button variant='contained' color='primary'>
              Register
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Header;
