import { useStore, useToast } from '@balm-ui';
import { useApiModel } from '@balm-ui-pro';
import { downloadInNewTab } from '@yiban-shared/utils';
import { apiEndpoint } from '@/plugins/http';

const $toast = useToast();
const $apiModel = useApiModel();

export async function customTopActionHandler(action, listViewData) {
  const $store = useStore();
  const actionType = action.type;
  const { model, searchForm, listData, listDataSource, resetSelectedRows } =
    listViewData;
  const { selectedRows } = listData;

  // 兼容多选操作
  if (action.useMulti) {
    if (selectedRows.length) {
      searchForm.data[action.keyField || 'ids'] = selectedRows;
    } else {
      const actionText = action.text || '批量操作';
      $toast(`请选择要${actionText}的数据`);
      return;
    }
  }

  const topAction = Array.isArray(listDataSource.topbarActions)
    ? listDataSource.topbarActions.find(({ type }) => type === actionType)
    : false;

  if (topAction) {
    switch (actionType) {
      case 'export':
        const params = topAction.withParams ? searchForm.data : {};
        downloadInNewTab(topAction.link, params); // 只能使用 GET 请求
        break;
    }
  } else {
    switch (actionType) {
      case 'export':
        if (action.useApi) {
          // 默认使用 POST 请求，但为了与服务端 topbarActions 配置保持一致，已在 store/model.js 中配置为 GET 请求
          const message = await $store.$getModel(model, searchForm.data, {
            apiAction: actionType
          });
          message && $toast(message);
        } else {
          downloadInNewTab(
            `${apiEndpoint}${$apiModel.getApi(model, 'read', actionType)}`,
            searchForm.data
          );
        }
        break;
    }
  }

  if (action.useMulti) {
    resetSelectedRows();
  }
}

export function setListViewFormData(
  formData,
  { actionType, action, data, model, modelOptions, listData, $route }
) {
  if (actionType === 'list') {
    const { page, pageSize } = listData;

    formData = Object.assign({}, formData, {
      page,
      size: pageSize
    });
  } else {
    switch (actionType) {
      case 'switchStatus':
        formData = Object.assign({}, formData, action.requestData(data));
        break;
    }
  }

  return formData;
}
