// BalmUI config
import myStore from '@/store';
import validatorRules from '@/config/validator-rules';
import apiModelConfig from '@/apis';
import constantSource from '@/constants';
import proViewsConfig from '@/components/pro-views';
// Custom components
import PageLoading from '@yiban-shared/components/page-loading';
import YbAvatar from '@yiban-shared/components/yb-avatar';

export const balmUIConfig = {
  $store: myStore,
  $validator: validatorRules,
  UiForm: {
    labelRightAligned: true
  },
  UiTextfield: {
    outlined: true
  },
  UiAutocomplete: {
    outlined: true
  },
  UiSelect: {
    outlined: true
  },
  UiDatepicker: {
    outlined: true
  },
  UiRangepicker: {
    outlined: true
  },
  $alert: {
    buttonText: '确定'
  },
  $confirm: {
    acceptText: '确定',
    cancelText: '取消'
  },
  UiDialogTitle: {
    closable: true
  },
  UiPagination: {
    showTotal: true,
    ofText: '/',
    unitText: '条',
    showJumper: true,
    jumperText: ['跳转到', '页']
    // jumperButtonText: '跳转'
  }
};

export const balmUIPlusConfig = {};

export const balmUIProConfig = {
  $apiModel: apiModelConfig,
  $constant: constantSource,
  ...proViewsConfig
};

export const customComponents = [PageLoading, YbAvatar];
