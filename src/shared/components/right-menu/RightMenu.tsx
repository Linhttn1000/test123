import { Add, Person, PowerSettingsNew, Search } from '@mui/icons-material';
import { Button, Drawer, IconButton, Stack, SvgIcon, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store';
import { selectUser } from '../../../store/selectors/authSelector';
import { authActions } from '../../../store/slices/authSlice';
import { IUser } from '../../types/user.interface';
import FunctionsMenu from '../functions-menu';
import LoginDialog from '../login-dialog';
import SearchBox from '../search-box';
import classes from './styles.module.scss';

const RightMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isFuncsMenuOpen = Boolean(anchorEl);
  const [isShowLoginDialog, setIsShowLoginDialog] = useState<boolean>(false);
  const currentUser: IUser = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
  const handleSignOut = (): void => {
    dispatch(authActions.signOut());
    setIsShowLoginDialog(false);
    navigate('/');
  };

  return (
    <>
      <Stack spacing={2} alignItems='center' direction='row'>
        <Tooltip title='Search'>
          <IconButton size='large' color='warning' onClick={showSearchBox} className={classes.btn}>
            <Search />
          </IconButton>
        </Tooltip>
        <Tooltip title='Functions menu'>
          <IconButton
            size='large'
            color='success'
            aria-haspopup='true'
            aria-expanded={isFuncsMenuOpen ? 'true' : undefined}
            aria-controls={isFuncsMenuOpen ? 'basic-menu' : undefined}
            onClick={showFunctionsMenu}
            className={classes.btn}
          >
            <Add />
          </IconButton>
        </Tooltip>
        <FunctionsMenu anchorEl={anchorEl} onClose={hideFunctionsMenu} isOpen={isFuncsMenuOpen} />
        {currentUser ? (
          <>
            <Tooltip title={`Hi ${ currentUser.firstName } ${ currentUser.lastName }!`}>
              <IconButton size='large' className={classes.btn}>
                {currentUser.profilePhotoUrl ? (
                  <img alt={currentUser.username} src={currentUser.profilePhotoUrl} />
                ) : (
                  <Person />
                )}
              </IconButton>
            </Tooltip>
            <Tooltip title='Sign out'>
              <IconButton size='large' className={classes.btn} onClick={handleSignOut}>
                <SvgIcon component={PowerSettingsNew} inheritViewBox sx={{ color: '#e60023' }} />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          <>
            <Tooltip title='Sign in'>
              <IconButton size='large' color='default' onClick={showLoginDialog} className={classes.btn}>
                <Person />
              </IconButton>
            </Tooltip>
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
