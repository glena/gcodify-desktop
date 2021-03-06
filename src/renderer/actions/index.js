const attrCast = {
  pixelThreshold: parseInt,
  imageContrast: parseFloat,
  imageBrighness: parseFloat,
  height: parseInt,
  width: parseInt,
  laserSpeed: parseInt,
  travelSpeed: parseInt,
  laserPrecision: parseFloat,
  laserOnCode: (value) => value,
  laserOffCode: (value) => value,
  xOffset: parseFloat, 
  yOffset: parseFloat, 
  zOffset: parseFloat,
};

export const change = (attribute, value) => ({
  type: 'CHANGE',
  attribute,  
  value: attrCast[attribute](value)
});

export const load = () => ({ type: 'LOAD' });
export const reload = () => ({ type: 'RELOAD' });
export const save = () => ({ type: 'SAVE' });

export const togglePane = (value) => ({ type: 'TOGGLE_PANE', value });

export const resize = (value) => ({ type: 'RESIZE', value });
export const viewOriginal  = () => ({ type: 'TOGGLE_PREVIEW', value: true });
export const viewPreview = () => ({ type: 'TOGGLE_PREVIEW', value: false });