const mappers = {
  CHANGE: (action, state) => ({ 
    upToDate: false, 
    settings:  {
      ...state.settings, 
      [action.attribute]: action.value
    }
  }),
  RESIZE: (action) => ({ isResized: action.value }),
  SAVE: () => ({ succes: true }), //TODO
  LOAD: (action, state) => ({
    image: {
      preview: action.preview,
      original: action.original,
      originalFilename: action.originalFilename,
      width: action.width,
      height: action.height
    },
    upToDate: true
  }),
  RELOAD: (action, state) => ( {
    image: {
      preview: action.preview,
      original: action.original,
      originalFilename: action.originalFilename,
      width: action.width,
      height: action.height
    },
    upToDate: true
  }),
  TOGGLE_PREVIEW: (action) => ({ showOriginal: action.value} )
};

const reducers = (state = [], action) => {
  const mapper = mappers[action.type];
  if (!mapper) { return state; }
  return {
    ...state, 
    ...mapper(action, state)
  };
};

export default reducers;