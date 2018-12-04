const reducers = (state = [], action) => {
  switch (action.type) {
    case 'PING':
      return Object.assign({}, state, {
        buttonContent: action.result
      })

    case 'LOAD':
      return Object.assign({}, state, {
        preview: action.preview,
        original: action.original,
      })
    
    case 'TOGGLE_PREVIEW':
      return Object.assign({}, state, {
        showOriginal: !state.showOriginal
      })

    default:
      return state
  }
}

export default reducers