import { useStore } from '@balm-ui';
import { updatePageClassName } from '@yiban-shared/routes/config';
import { CLASS_NAMESPACE, ROUTE_NAME } from './config';

export function initRouter(router) {
  router.beforeEach(async (to, from, next) => {
    const { name, matched } = to;
    const requiresAuth = matched.some((route) => route.meta.requiresAuth);

    if (requiresAuth) {
      const $store = useStore();
      const isLoginPage = name === ROUTE_NAME.login;

      // 检查权限
      if (!$store.isAuthenticated && !isLoginPage) {
        await $store.me();
      }

      $store.isAuthenticated ? next() : next({ name: ROUTE_NAME.login });
    } else {
      next();
    }
  });

  router.afterEach((to, from) => {
    updatePageClassName(to, from, CLASS_NAMESPACE);
  });
}
