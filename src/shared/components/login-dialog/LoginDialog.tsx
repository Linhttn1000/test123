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
  TextField
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import cx from 'classnames';
import { useFormik } from 'formik';
import React from 'react';
import GoogleLogin from 'react-google-login';
import * as yup from 'yup';
import { useAppDispatch } from '../../../store/index';
import { signIn } from './../../../store/slices/authSlice';
import classes from './styles.module.scss';
interface ILoginDialogProp {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const LoginDialog = ({ isOpen, onClose, onNavigate }: ILoginDialogProp) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: yup.object({
      username: yup.string().required('Required'),
      password: yup.string().required(),
    }),
    onSubmit: (values) => {
      dispatch(signIn(values));
    },
  });

  const handleError = (fieldName: 'username' | 'password') => {
    if (formik.touched[fieldName] && formik.errors[fieldName]) {
      return {
        error: true,
        label: 'Error',
        helperText: 'Required',
      };
    }
  };

  const handleSignIn = (): void => {
    formik.handleSubmit();
  };

  const responseGoogle = (response: any): void => {};;

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
            <TextField
              type='text'
              fullWidth
              label='Email or username'
              id='username'
              {...handleError('username')}
              {...formik.getFieldProps('username')}
            />
          </Box>
          <Box className={classes['form-group']}>
            <TextField
              type='password'
              fullWidth
              label='Password'
              {...handleError('password')}
              {...formik.getFieldProps('password')}
            />
          </Box>
          <Box sx={{ marginTop: '8px' }}>
            <Checkbox id='rememberPassword' /> <label htmlFor='rememberPassword'>Remember password</label>
          </Box>
          <Stack alignItems='center' justifyContent='center' margin='16px 0 4px 0'>
            <Button
              variant='contained'
              color='success'
              fullWidth
              startIcon={<LoginSharp />}
              className={classes.btn}
              onClick={handleSignIn}
            >
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
            onClick={onNavigate}
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
