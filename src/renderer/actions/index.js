export const load = () => {
  return {
    type: 'LOAD'
  }
};

export const reload = () => {
  return {
    type: 'RELOAD'
  }
};

const attrCast = {
  pixelThreshold: parseInt,
  imageContrast: parseFloat,
  imageBrighness: parseFloat
}

export const change = (attribute, value) => {
  return {
    type: 'CHANGE',
    attribute,  
    value: attrCast[attribute](value)
  }
};

export const toggleViewOriginal = () => {
  return {
    type: 'TOGGLE_PREVIEW'
  }
};