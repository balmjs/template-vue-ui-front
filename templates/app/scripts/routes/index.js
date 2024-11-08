import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import { SERVER_BASE_URL } from '@/config';
import { initRouter } from './middleware';
import { routes } from './config';

Vue.use(VueRouter);
Vue.use(VueMeta);

const router = new VueRouter({
  mode: 'history',
  base: SERVER_BASE_URL,
  routes
});

initRouter(router);

export default router;
