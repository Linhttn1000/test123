import { Email, Info, Password, Person, Phone } from '@mui/icons-material';
import { Box, Button, Container, Divider, Grid, InputAdornment, Stack, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import useLocalStorage from '../../shared/hooks/useLocalStorage';
import { IUser } from '../../shared/types/user.interface';
import classes from './styles.module.scss';

type Field = 'username' | 'password' | 'email' | 'firstName' | 'lastName' | 'phone';

const SignUp = () => {
  const navigate = useNavigate();
  const currentUser = useLocalStorage('currentUser') as IUser;
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
    },
    validationSchema: yup.object({
      username: yup.string().required('Required'),
      password: yup.string().required('Required'),
      email: yup.string().required('Required'),
      firstName: yup.string().required('Required'),
      lastName: yup.string().required('Required'),
      phone: yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleError = (fieldName: Field): any => {
    if (formik.touched[fieldName] && formik.errors[fieldName]) {
      return {
        error: true,
        label: 'Error',
        helperText: formik.errors[fieldName],
      };
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <div className={classes.container}>
        <Container
          sx={{
            backgroundColor: '#fff',
            height: '100%',
          }}
        >
          <h3 className={classes.title}>Sign Up</h3>
          <Divider />
          <br />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Stack justifyContent='center' alignItems='center' width='100%' padding='20px' spacing={4}>
                <Box width='90%'>
                  <TextField
                    fullWidth
                    placeholder='Enter your username'
                    label='Username'
                    id='username'
                    type='text'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Person />
                        </InputAdornment>
                      ),
                    }}
                    {...formik.getFieldProps('username')}
                    {...handleError('username')}
                  />
                </Box>
                <Box width='90%'>
                  <TextField
                    fullWidth
                    placeholder='Enter your password'
                    id='password'
                    label='Password'
                    type='password'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Password />
                        </InputAdornment>
                      ),
                    }}
                    {...formik.getFieldProps('password')}
                    {...handleError('password')}
                  />
                </Box>
                <Box width='90%'>
                  <TextField
                    fullWidth
                    placeholder='Enter your email'
                    id='email'
                    label='Email'
                    type='text'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Email />
                        </InputAdornment>
                      ),
                    }}
                    {...formik.getFieldProps('email')}
                    {...handleError('email')}
                  />
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack justifyContent='center' alignItems='center' width='100%' padding='20px' spacing={4}>
                <Box width='90%'>
                  <TextField
                    fullWidth
                    placeholder='Enter your first name'
                    id='firstName'
                    type='text'
                    label='First name'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Info />
                        </InputAdornment>
                      ),
                    }}
                    {...formik.getFieldProps('firstName')}
                    {...handleError('firstName')}
                  />
                </Box>
                <Box width='90%'>
                  <TextField
                    fullWidth
                    placeholder='Enter your last name'
                    id='lastName'
                    type='text'
                    label='Last name'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Info />
                        </InputAdornment>
                      ),
                    }}
                    {...formik.getFieldProps('lastName')}
                    {...handleError('lastName')}
                  />
                </Box>
                <Box width='90%'>
                  <TextField
                    fullWidth
                    placeholder='Enter your phone'
                    id='phone'
                    type='text'
                    label='Phone'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Phone />
                        </InputAdornment>
                      ),
                    }}
                    {...formik.getFieldProps('phone')}
                    {...handleError('phone')}
                  />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <Button size='large' variant='contained' color='error' className={classes.btn}>
          Register
        </Button>
      </div>
    </>
  );
};

export default SignUp;
