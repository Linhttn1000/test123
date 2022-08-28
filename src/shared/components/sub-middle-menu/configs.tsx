import {
  CameraIndoor,
  ColorLens,
  Headphones,
  Help,
  Memory,
  Museum,
  Park,
  Public,
  SportsSoccer,
  VideogameAsset,
  Map
} from '@mui/icons-material';
import { SvgIcon } from '@mui/material';

export const SUB_MIDDLE_MENU_CONFIGS = [
  [
    {
      id: 'art',
      title: 'Art',
      icon: <SvgIcon component={ColorLens} inheritViewBox sx={{ color: '#747df6' }} />,
    },
    {
      id: 'entertainment',
      title: 'Entertainment',
      icon: <SvgIcon component={CameraIndoor} inheritViewBox sx={{ color: '#9391fd' }} />,
    },
    {
      id: 'game',
      title: 'Game',
      icon: <SvgIcon component={VideogameAsset} inheritViewBox sx={{ color: '#44ff00' }} />,
    },
  ],
  [
    {
      id: 'History',
      title: 'History',
      icon: <SvgIcon component={Museum} inheritViewBox sx={{ color: '#eab171' }} />,
    },
    {
      id: 'Help',
      title: 'Help',
      icon: <SvgIcon component={Help} inheritViewBox sx={{ color: '#fbe44b' }} />,
    },
    {
      id: 'internet',
      title: 'Internet',
      icon: <SvgIcon component={Public} inheritViewBox sx={{ color: '#9391fd' }} />,
    },
  ],
  [
    {
      id: 'Music',
      title: 'Music',
      icon: <SvgIcon component={Headphones} inheritViewBox sx={{ color: '#44ff00' }} />,
    },
    {
      id: 'Nature',
      title: 'Nature',
      icon: <SvgIcon component={Park} inheritViewBox sx={{ color: '#44ff00' }} />,
    },
    {
      id: 'Sports',
      title: 'Sports',
      icon: <SvgIcon component={SportsSoccer} inheritViewBox sx={{ color: '#f92bfd' }} />,
    },
  ],
  [
    {
      id: 'Technology',
      title: 'Technology',
      icon: <SvgIcon component={Memory} inheritViewBox sx={{ color: '#1d1d1f' }} />,
    },
    {
      id: 'Travel',
      title: 'Travel',
      icon: <SvgIcon component={Map} inheritViewBox sx={{ color: '#e60023' }} />,
    },
  ],
];
