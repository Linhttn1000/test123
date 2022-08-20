import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { LEFT_MENU_ITEMS as leftMenuItems } from './configs';
import classes from './styles.module.scss';

const LeftMenu = () => {
  return (
    <>
      <Box
        sx={{
          width: '300px',
          height: '100vh',
        }}
        role='presentation'
        display='flex'
        alignItems='center'
        justifyContent='flex-start'
      >
        <Stack>
          <List>
            {leftMenuItems.map((item) => (
              <ListItem key={item.id}>
                <NavLink to={item.path} className={classes.link}>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.title}</ListItemText>
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Box>
    </>
  );
};

export default LeftMenu;
