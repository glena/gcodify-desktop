const attrCast = {
  pixelThreshold: parseInt,
  imageContrast: parseFloat,
  imageBrighness: parseFloat
}

export const load = () => ({ type: 'LOAD'});
export const reload = () => ({ type: 'RELOAD' });
export const resize = (value) => ({ type: 'RESIZE', value });
export const save = () => ({ type: 'SAVE' });
export const change = (attribute, value) => ({
  type: 'CHANGE',
  attribute,  
  value: attrCast[attribute](value)
});
export const toggleViewOriginal = () => ({ type: 'TOGGLE_PREVIEW' });