const tableAttrOrProp = {
  defaultColWidth: 200,
  scroll: { y: 540 }
};

export function getTableAttrOrProp(props = {}) {
  return Object.assign({}, tableAttrOrProp, props);
}

export function getTableAttrOrPropWithRowCheckbox(selectedKey = 'id') {
  return getTableAttrOrProp({
    rowCheckbox: true,
    selectedKey
  });
}

export const getSubmitActionConfig = (text = '保存') => [
  {
    type: 'submit',
    text,
    attrOrProp: {
      raised: true
    }
  }
];

export const actionConfig = [
  ...getSubmitActionConfig(),
  {
    type: 'cancel',
    text: '返回'
  }
];
