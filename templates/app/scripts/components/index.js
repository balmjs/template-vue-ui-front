import BalmUI from '@balm-ui';
import BalmUIPlus from '@balm-ui-plus';
import BalmUIPro from '@balm-ui-pro';
import {
  balmUIConfig,
  balmUIPlusConfig,
  balmUIProConfig,
  customComponents
} from './config';

export default function useComponents(Vue) {
  Vue.use(BalmUI, balmUIConfig);
  Vue.use(BalmUIPlus, balmUIPlusConfig);
  Vue.use(BalmUIPro, balmUIProConfig);

  customComponents.forEach((component) =>
    Vue.component(component.name, component)
  );
}
