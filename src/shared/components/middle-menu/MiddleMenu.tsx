import { KeyboardArrowDown } from '@mui/icons-material';
import { IconButton, Tab, Tabs } from '@mui/material';
import React from 'react';
import SubMiddleMenu from '../sub-middle-menu';
import { MIDDLE_MENU_CONFIGS as configs } from './configs';
import classes from './styles.module.scss';

const MiddleMenu = () => {
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isSubMenuOpen = Boolean(anchorEl);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const showSubMiddleMenu = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const hideSubMiddleMenu = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className={classes['mid-menu']}>
        <Tabs value={value} onChange={handleChange} aria-label='icon label tabs example'>
          {configs.map((config) => (
            <Tab
              key={config.id}
              iconPosition='start'
              icon={config.icon}
              label={config.title}
              className={classes['mid-menu__tab-item']}
            />
          ))}
        </Tabs>
        <IconButton color='primary' size='large' onClick={showSubMiddleMenu}>
          <KeyboardArrowDown
            sx={{ transform: anchorEl ? 'rotate(180deg)' : 'rotate(0)', transition: 'all .2s ease' }}
          />
        </IconButton>
      </div>
      <SubMiddleMenu anchorEl={anchorEl} isOpen={isSubMenuOpen} onClose={hideSubMiddleMenu} />
    </>
  );
};

export default MiddleMenu;
