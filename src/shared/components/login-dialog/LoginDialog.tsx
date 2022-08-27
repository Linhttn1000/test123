import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import classes from './styles.module.scss';

interface ILoginDialogProp {
  isOpen: boolean;
  onClose: () => void;
}

const LoginDialog = ({ isOpen, onClose }: ILoginDialogProp) => {
  return (
    <>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <Box className={classes['form-control']}>
            <TextField type='text' label='Username' />
          </Box>
          <Box className={classes['form-control']}>
            <TextField type='password' label='Password' />
          </Box>
        </DialogContent>
        <DialogActions>
          <Box>
            <Button>Register</Button>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LoginDialog;
