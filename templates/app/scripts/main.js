import Vue from 'vue';
import App from '@/layouts/app';
import router from '@/routes';
import useComponents from '@/components';
import usePlugins from '@/plugins';

function createMyApp() {
  Vue.config.productionTip = false;

  useComponents(Vue);
  usePlugins(Vue);

  new Vue({
    el: '#app',
    components: { App },
    template: '<app/>',
    router
  });
}

export default createMyApp;
