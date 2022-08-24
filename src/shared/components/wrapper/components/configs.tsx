import {
  AddReaction,
  Group,
  Home,
  Image,
  LocalFireDepartment,
  MovieCreation,
  Newspaper,
  Tag,
} from '@mui/icons-material';

interface IMenuItem {
  id: string;
  title: string;
  icon: any;
  path: string;
  value?: string;
}

export const LEFT_MENU_ITEMS: IMenuItem[] = [
  {
    id: 'home',
    title: 'Home',
    icon: <Home />,
    path: '/',
  },
  {
    id: 'host',
    title: 'Hots',
    icon: <LocalFireDepartment />,
    path: '/',
  },
  {
    id: 'submit_news',
    title: 'Submit News',
    icon: <Newspaper />,
    path: '/',
  },
  {
    id: 'submit_image',
    title: 'Submit Image',
    icon: <Image />,
    path: '/',
  },
  {
    id: 'tags',
    title: 'Tags',
    icon: <Tag />,
    path: '/',
  },
  {
    id: 'top_users',
    title: 'Top Users',
    icon: <Group />,
    path: '/',
  },
];

export const MIDDLE_MENU_ITEMS: IMenuItem[] = [
  {
    id: 'home',
    title: 'Home',
    icon: Home,
    path: '/',
    value: 'one',
  },
  {
    id: 'shorts',
    title: 'Shorts',
    icon: MovieCreation,
    path: '/',
    value: 'two',
  },
  {
    id: 'reactions',
    title: 'Reactions',
    icon: AddReaction,
    path: '/',
    value: 'third',
  },
  {
    id: 'hots',
    title: 'Hots!',
    icon: LocalFireDepartment,
    path: '/',
    value: 'four',
  },
];
