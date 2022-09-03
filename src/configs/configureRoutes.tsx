import React, { lazy } from 'react';

const LazyLandingPage = lazy(() => import('./../pages/landing-page').then((m) => ({ default: m.LandingPage })));
const LazySignUpPage = lazy(() => import('./../pages/sign-up').then((m) => ({ default: m.SignUpPage })));

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
    id: 'sign-up',
    path: '/sign-up',
    element: <LazySignUpPage />
  }
];
export default routes;
