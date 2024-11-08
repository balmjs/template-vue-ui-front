import * as proViews from '@yiban-shared/components/pro-views';
import getFormDataWithDefaultParams from './get-default-params';
import { getModelConfigPath } from './form-view';
import { switchDetailViewFn } from './detail-view';
import { customTopActionHandler } from './list-view';
import { actionConfig, getTableAttrOrProp } from './config';

export default {
  UiFormView: {
    setModelOptionsFn: proViews.setModelOptionsFn({
      getFormDataWithDefaultParams
    })
  },
  UiDetailView: {
    actionConfig,
    getModelConfigFn: proViews.getModelConfigFn({ getModelConfigPath }),
    getModelDataFn: proViews.getDetailModelDataFn({
      getFormDataWithDefaultParams
    }),
    setModelDataFn: proViews.setDetailModelDataFn({
      getFormDataWithDefaultParams,
      switchFn: switchDetailViewFn
    }),
    formViewAttrOrProp: {
      formAttrOrProp: {
        actionAlign: 'left'
      }
    }
  },
  UiListView: {
    searchActionConfig: [
      {
        type: 'submit',
        text: '搜索',
        attrOrProp: {
          raised: true,
          style: {
            width: '190px'
          }
        }
      },
      {
        type: 'reset',
        text: '重置',
        attrOrProp: {}
      }
    ],
    getModelConfigFn: proViews.getModelConfigFn({ getModelConfigPath }),
    getModelDataFn: proViews.getListModelDataFn({
      getFormDataWithDefaultParams
    }),
    tableAttrOrProp: getTableAttrOrProp(),
    tableDataFormat: {
      data: 'list',
      total: ({ page }) => page.total,
      topActions: 'topbarActions'
    },
    pageSize: 50,
    noData: '暂无数据',
    rowActionHandler: proViews.getRowActionHandler({
      getFormDataWithDefaultParams
    }),
    topActionHandler: proViews.getTopActionHandler({
      getFormDataWithDefaultParams,
      customTopActionHandler
    }),
    placeholder: '请正确输入查询条件后搜索',
    searchOnReset: true
  }
};
