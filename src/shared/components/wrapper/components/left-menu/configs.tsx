import { Group, Home, Image, LocalFireDepartment, Newspaper, Tag } from '@mui/icons-material';
import { ReactNode } from 'react';

interface ILeftMenuItem {
  id: string;
  title: string;
  icon: ReactNode,
  path: string;
}

export const LEFT_MENU_ITEMS: ILeftMenuItem[] = [
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