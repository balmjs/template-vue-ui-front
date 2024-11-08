import { indexView } from '@yiban-shared/routes/config';
import NotFound from '@yiban-shared/layouts/not-found';
// Modules
import commonRoutes from '@/routes/common';

export const CLASS_NAMESPACE = 'ggw';

export const ROUTE_NAME = {
  login: 'login',
  home: 'home'
};

export const routes = [
  {
    path: '/',
    name: 'root',
    component: indexView,
    redirect: { name: ROUTE_NAME.home },
    children: [],
    meta: {
      // requiresAuth: true
    }
  },
  ...commonRoutes,
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
];
