const mappers = {
  CHANGE: (action) => ({ [action.attribute]: action.value, upToDate: false }),
  RESIZE: (action) => ({ isResized: action.value }),
  SAVE: (action) => ({ succes: true }), //TODO
  LOAD: (action) => ( {
    preview: action.preview,
    original: action.original,
    originalFilename: action.originalFilename,
    upToDate: true
  }),
  RELOAD: (action) => ( {
    preview: action.preview,
    original: action.original,
    originalFilename: action.originalFilename,
    upToDate: true
  }),
  TOGGLE_PREVIEW: (action, state) => ({ showOriginal: !state.showOriginal} )
}

const reducers = (state = [], action) => {
  const mapper = mappers[action.type];
  if (!mapper) { return state; }
  return Object.assign({}, state, mapper(action, state));
}

export default reducers