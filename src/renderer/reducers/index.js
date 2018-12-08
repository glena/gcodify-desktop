const reducers = (state = [], action) => {
  switch (action.type) {    
    case 'CHANGE':
      return Object.assign({}, state, {
        [action.attribute]: action.value
      })

    case 'SAVE':
      return Object.assign({}, state, {
        succes: true
      })

    case 'LOAD':
    case 'RELOAD':
      return Object.assign({}, state, {
        preview: action.preview,
        original: action.original,
        originalFilename: action.originalFilename,
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