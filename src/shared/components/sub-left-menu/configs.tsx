import { Group, Home, Image, LocalFireDepartment, Newspaper, Tag } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';

export const SUB_LEFT_MENU_CONFIGS = [
  {
    id: 'home',
    icon: <SvgIcon component={Home} inheritViewBox />,
    title: 'Home',
  },
  {
    id: 'local_fire_department',
    icon: <SvgIcon component={LocalFireDepartment} inheritViewBox />,
    title: 'Hots',
  },
  {
    id: 'newspaper',
    icon: <SvgIcon component={Newspaper} inheritViewBox />,
    title: 'Submit News',
  },
  {
    id: 'image',
    icon: <SvgIcon component={Image} inheritViewBox />,
    title: 'Submit Image',
  },
  {
    id: 'tags',
    icon: <SvgIcon component={Tag} inheritViewBox />,
    title: 'Tags',
  },
  {
    id: 'group',
    icon: <SvgIcon component={Group} inheritViewBox />,
    title: 'Top Users',
  },
];
