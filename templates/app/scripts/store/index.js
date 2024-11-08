import modelStore from './model';
import modelConfigStore from './model-config';
import authStore from './auth';

export default {
  data() {
    return {
      pageLoading: false
    };
  },
  mixins: [modelStore, modelConfigStore, authStore]
};
