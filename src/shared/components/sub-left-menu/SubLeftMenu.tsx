import { Close } from '@mui/icons-material';
import { Divider, List, ListItemButton, ListItemIcon, ListItemText, SvgIcon } from '@mui/material';
import { Stack } from '@mui/system';
import { SUB_LEFT_MENU_CONFIGS as configs } from './configs';
import classes from './styles.module.scss';

interface ISubLeftMenuProp {
  onClose: () => void;
}

const SubLeftMenu = ({ onClose }: ISubLeftMenuProp) => {
  return (
    <>
      <div className={classes['sub-menu']}>
        <Stack className={classes['sub-menu__close']} padding={2}>
          <SvgIcon
            component={Close}
            inheritViewBox
            fontSize='large'
            color='disabled'
            className={classes['sub-menu__close__icon']}
            onClick={onClose}
          />
        </Stack>
        <Divider orientation='vertical' />
        <List className={classes['sub-menu__list']}>
          {configs.map((config) => (
            <ListItemButton key={config.id} className={classes['sub-menu__list__item']}>
              <ListItemIcon>{config.icon}</ListItemIcon>
              <ListItemText>{config.title}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </div>
    </>
  );
};

export default SubLeftMenu;
