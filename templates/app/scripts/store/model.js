import getModelStore from '@yiban-shared/store/model';

function isPostRequest({ model, apiAction, apiUrl, config }) {
  let result = true;

  if (apiAction === 'export') {
    result = false;
  }

  return result; // 模仿易班后台，全部使用 POST 请求
}

async function getModelOptionsByType(
  modelType,
  { model, params, config, $store }
) {
  let result = [];

  if (modelType === 'list') {
    // 使用列表接口取配置
    const { list } = await $store.$getModelList(model, params, config);
    result = list;
  }

  return result;
}

export default getModelStore({ isPostRequest, getModelOptionsByType });
