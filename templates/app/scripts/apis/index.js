// Reference https://legacy.pro.balmjs.com/#/plugins/api-model
// import mockApis from './mock';
import commonApis from './common';
import { isDev } from '@/config';

const debug = isDev ? 'user' : false;

export default {
  crud: {
    create: 'add',
    read: {
      list: 'index',
      detail: 'info'
    },
    update: 'edit',
    delete: 'delete'
  },
  urlToCamelCase: true,
  apis: [...commonApis],
  debug
};
