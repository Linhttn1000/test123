import React from 'react';
import { lazy } from 'react';

const LazyLandingPage = lazy(() => import('./../pages/landing-page').then((m) => ({ default: m.LandingPage })));
const LazyAuthenticationPage = lazy(() =>
  import('../pages/authentication').then((m) => ({ default: m.AuthenticationPage })),
);

export interface IRouteConfig {
  id: string;
  path: string;
  element: React.ReactElement;
  children?: IRouteConfig[];
}

const routes: IRouteConfig[] = [
  {
    id: 'landing-page',
    path: '/',
    element: <LazyLandingPage />,
  },
  {
    id: 'authentication-page',
    path: '/auth',
    element: <LazyAuthenticationPage />,
  },
];
export default routes;
