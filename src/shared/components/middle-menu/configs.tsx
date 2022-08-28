import { AddReaction, Explore, Home, MovieCreation, Whatshot } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';

export const MIDDLE_MENU_CONFIGS = [
  {
    id: 'home_tab',
    title: 'HOME',
    icon: <SvgIcon component={Home} inheritViewBox />,
  },
  {
    id: 'shorts_tab',
    title: 'SHORTS',
    icon: <SvgIcon component={MovieCreation} inheritViewBox />,
  },
  {
    id: 'reactions',
    title: 'REACTIONS',
    icon: <SvgIcon component={AddReaction} inheritViewBox />,
  },
  {
    id: 'hot_tab',
    title: 'HOT!',
    icon: <SvgIcon component={Whatshot} inheritViewBox />,
  },
  {
    id: 'explore',
    title: 'EXPLORE',
    icon: <SvgIcon component={Explore} inheritViewBox />,
  },
];
