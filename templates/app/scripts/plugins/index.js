import $http from '@yiban-shared/plugins/http';
import { apiEndpoint, responseHandler } from './http';
import $mock from './mock';

export default function usePlugins(Vue) {
  Vue.use($http, {
    apiEndpoint,
    responseHandler
  });
  Vue.use($mock);
}
