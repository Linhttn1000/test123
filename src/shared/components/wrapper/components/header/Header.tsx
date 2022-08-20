import { Box, Stack, Drawer, Button } from '@mui/material';
import { Menu } from '@mui/icons-material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './styles.module.scss';
import LeftMenu from '../left-menu/LeftMenu';

const Header: React.FC = () => {
  const [isShowLeftMenu, setIsShowLeftMenu] = useState<boolean>(false);

  return (
    <>
      <Stack>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
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
        </Box>
        <Box></Box>
        <Box></Box>
      </Stack>
    </>
  );
};

export default Header;
