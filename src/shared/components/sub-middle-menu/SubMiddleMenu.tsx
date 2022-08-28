import { Grid, Menu, MenuItem } from '@mui/material';
import { SUB_MIDDLE_MENU_CONFIGS as configs } from './configs';
import classes from './styles.module.scss';

interface ISubMiddleMenuProp {
  anchorEl: HTMLElement | null;
  isOpen: boolean;
  onClose: () => void;
}

const SubMiddleMenu = ({ anchorEl, isOpen, onClose }: ISubMiddleMenuProp) => {
  return (
    <>
      <Menu
        id='basic-middle-menu'
        anchorEl={anchorEl}
        open={isOpen}
        onClose={onClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        className={classes.menu}
        PaperProps={{
          style: {
            width: '100vw',
            padding: '12px 36px',
            borderRadius: 28,
          },
        }}
      >
        <Grid container spacing={2}>
          {configs.map((config, idx) => (
            <Grid key={idx} item xs={3}>
              {config.map((subItem) => (
                <MenuItem key={subItem.id} onClick={onClose} className={classes['menu__item']}>
                  {subItem.icon}
                  <span className={classes['menu__item__title']}>{subItem.title}</span>
                </MenuItem>
              ))}
            </Grid>
          ))}
        </Grid>
      </Menu>
    </>
  );
};

export default SubMiddleMenu;
