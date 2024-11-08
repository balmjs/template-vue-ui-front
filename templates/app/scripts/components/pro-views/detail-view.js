import { useConstant } from '@balm-ui-pro';

const $constant = useConstant();

export function switchDetailViewFn({ model, modelAction }) {
  let fn;

  switch (modelAction) {
    case 'export':
      fn = 'getModel';
      break;
    case 'delete':
      fn = 'deleteModel';
      break;
  }

  return fn;
}

export function setDetailViewFormData(formData, { model, modelOptions }) {
  return formData;
}
