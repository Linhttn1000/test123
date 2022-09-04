import {
  CameraIndoor,
  ColorLens,
  Headphones,
  Help,
  Map,
  Memory,
  Museum,
  Park,
  Public,
  SportsSoccer,
  VideogameAsset,
} from '@mui/icons-material';
import Icon from '../../../../shared/components/icon';

export const CATEGORY_CONFIGS = [
  {
    id: 'art',
    title: 'Art',
    icon: <Icon icon={ColorLens} color='#747df6' />,
  },
  {
    id: 'entertainment',
    title: 'Entertainment',
    icon: <Icon icon={CameraIndoor} color='#9391fd' />,
  },
  {
    id: 'game',
    title: 'Game',
    icon: <Icon icon={VideogameAsset} color='#44ff00' />,
  },
  {
    id: 'History',
    title: 'History',
    icon: <Icon icon={Museum} color='#eab171' />,
  },
  {
    id: 'Help',
    title: 'Help',
    icon: <Icon icon={Help} color='#fbe44b' />,
  },
  {
    id: 'internet',
    title: 'Internet',
    icon: <Icon icon={Public} color='#9391fd' />,
  },
  {
    id: 'Music',
    title: 'Music',
    icon: <Icon icon={Headphones} color='#44ff00' />,
  },
  {
    id: 'Nature',
    title: 'Nature',
    icon: <Icon icon={Park} color='#44ff00' />,
  },
  {
    id: 'Sports',
    title: 'Sports',
    icon: <Icon icon={SportsSoccer} color='#f92bfd' />,
  },
  {
    id: 'Technology',
    title: 'Technology',
    icon: <Icon icon={Memory} color='#1d1d1f' />,
  },
  {
    id: 'Travel',
    title: 'Travel',
    icon: <Icon icon={Map} color='#e60023' />,
  },
];
