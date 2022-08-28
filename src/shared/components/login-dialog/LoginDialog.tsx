import { AppRegistration, LoginSharp } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
  TextField,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import cx from 'classnames';
import classes from './styles.module.scss';
import GoogleLogin from 'react-google-login';

interface ILoginDialogProp {
  isOpen: boolean;
  onClose: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const LoginDialog = ({ isOpen, onClose }: ILoginDialogProp) => {
  const responseGoogle = (response: any): void => {
    console.log(response);
  };

  return (
    <>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby='alert-dialog-slide-description'
        className={classes.dialog}
      >
        <DialogTitle align='center' className={classes['dialog__header']} fontWeight={700}>
          LOGIN
        </DialogTitle>
        <DialogContent className={classes['dialog__body']}>
          <Box className={classes['form-group']}>
            <TextField type='text' fullWidth label='Email or username' />
          </Box>
          <Box className={classes['form-group']}>
            <TextField type='password' fullWidth label='Password' />
          </Box>
          <Box sx={{ marginTop: '8px' }}>
            <Checkbox id='rememberPassword' /> <label htmlFor='rememberPassword'>Remember password</label>
          </Box>
          <Stack alignItems='center' justifyContent='center' margin='16px 0 4px 0'>
            <Button variant='contained' color='success' fullWidth startIcon={<LoginSharp />} className={classes.btn}>
              Sign in
            </Button>
          </Stack>
          <Stack marginTop='16px'>
            <GoogleLogin
              clientId={
                process.env.REACT_APP_GOOGLE_CLIENT_ID ||
                '315854245557-i0cjaqcqjmkd3lf61gdmup5hnh3qbroa.apps.googleusercontent.com'
              }
              buttonText='Login with Google'
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              className={classes['btn-google']}
            />
          </Stack>
        </DialogContent>
        <DialogActions className={classes['dialog__footer']}>
          <Button
            variant='contained'
            fullWidth
            className={cx(classes.btn, classes['dialog__footer__btn'])}
            startIcon={<AppRegistration />}
          >
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
// clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"

export default LoginDialog;
