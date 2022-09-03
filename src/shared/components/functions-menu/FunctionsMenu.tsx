import { Menu, MenuItem } from '@mui/material';
import { FUNCTIONS_MENU_CONFIG as configs } from './functionsMenuConfig';
import classes from './styles.module.scss';

interface IFunctionsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
}

const FunctionsMenu = ({ isOpen, onClose, anchorEl }: IFunctionsMenuProps) => {
  return (
    <>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={isOpen}
        onClose={onClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        className={classes.menu}
        PaperProps={{
          style: {
            width: 280,
            padding: 12,
            borderRadius: 28,
          },
        }}
      >
        {configs.map((config) => (
          <MenuItem key={config.id} onClick={onClose} className={classes['menu__item']}>
            {config.icon}
            <span className={classes['menu__item__title']}>{config.title}</span>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default FunctionsMenu;
