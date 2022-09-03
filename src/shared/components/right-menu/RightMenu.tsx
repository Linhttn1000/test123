import { Add, Person, Search } from '@mui/icons-material';
import { Button, Drawer, IconButton, Stack } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../../../store/selectors/authSelector';
import FunctionsMenu from '../functions-menu';
import LoginDialog from '../login-dialog';
import SearchBox from '../search-box';
import classes from './styles.module.scss';

const RightMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isFuncsMenuOpen = Boolean(anchorEl);
  const [isShowLoginDialog, setIsShowLoginDialog] = useState<boolean>(false);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const showSearchBox = (): void => {
    setIsOpen(true);
  };
  const hideSearchBox = (): void => {
    setIsOpen(false);
  };
  const showFunctionsMenu = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const hideFunctionsMenu = (): void => {
    setAnchorEl(null);
  };
  const showLoginDialog = (): void => {
    setIsShowLoginDialog(true);
  };
  const hideLoginDialog = (): void => {
    setIsShowLoginDialog(false);
  };
  const navigateToSignUpPage = (): void => {
    if (isShowLoginDialog) {
      setIsShowLoginDialog(false);
    }
    navigate('/sign-up');
  };

  return (
    <>
      <Stack spacing={2} alignItems='center' direction='row'>
        <IconButton size='large' color='primary' onClick={showSearchBox} className={classes.btn}>
          <Search />
        </IconButton>
        <IconButton
          size='large'
          color='error'
          aria-haspopup='true'
          aria-expanded={isFuncsMenuOpen ? 'true' : undefined}
          aria-controls={isFuncsMenuOpen ? 'basic-menu' : undefined}
          onClick={showFunctionsMenu}
          className={classes.btn}
        >
          <Add />
        </IconButton>
        <FunctionsMenu anchorEl={anchorEl} onClose={hideFunctionsMenu} isOpen={isFuncsMenuOpen} />
        {user ? (
          <></>
        ) : (
          <>
            <IconButton size='large' color='default' onClick={showLoginDialog} className={classes.btn}>
              <Person />
            </IconButton>
            <LoginDialog isOpen={isShowLoginDialog} onClose={hideLoginDialog} onNavigate={navigateToSignUpPage} />
            <Button
              variant='contained'
              color='primary'
              className={classes['btn-register']}
              onClick={navigateToSignUpPage}
            >
              Register
            </Button>
          </>
        )}
      </Stack>
      <Drawer anchor='bottom' open={isOpen} onClose={hideSearchBox}>
        <SearchBox />
      </Drawer>
    </>
  );
};

export default RightMenu;
