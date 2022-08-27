import { Box, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import React from 'react';
import { RootState } from '../../../store';
import classes from './styles.module.scss';

const LoadingSpinner = () => {
  const isLoading = useSelector((state: RootState) => state.globalState.isLoading);
  return (
    <>
      {
        isLoading && <Box
          sx={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#eef5f6',
          }}
        >
          <CircularProgress className={classes.spinner} />
        </Box>
      }</>
  );
};

export default LoadingSpinner;
