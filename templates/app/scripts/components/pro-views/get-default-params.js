import { useStore } from '@balm-ui';
import { setModelOptionsFormData } from './form-view';
import { setDetailViewFormData } from './detail-view';
import { setListViewFormData } from './list-view';

export default function getFormDataWithDefaultParams(
  viewType,
  formData,
  formOptions
) {
  const $store = useStore();
  const { model, modelOptions } = formOptions;

  // NOTE: 自定义请求必要参数字段 `requiredParams`
  if (modelOptions && modelOptions.requiredParams) {
    formData = { ...formData, ...modelOptions.requiredParams };
  }

  // 其他全局参数
  switch (viewType) {
    case 'model-options':
      formData = setModelOptionsFormData(formData, formOptions);
      break;
    case 'detail-view':
      formData = setDetailViewFormData(formData, formOptions);
      break;
    default:
      formData = setListViewFormData(formData, formOptions);
  }

  return formData;
}
