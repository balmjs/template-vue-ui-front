import $http from '@yiban-shared/plugins/http';
import { apiEndpoint, responseHandler } from './http';

export default function usePlugins(Vue) {
  Vue.use($http, {
    apiEndpoint,
    responseHandler
  });
}
