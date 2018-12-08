const reducers = (state = [], action) => {
  switch (action.type) {    
    case 'CHANGE':
    console.log(Object.assign({}, state, {
      [action.attribute]: action.value
    }))
      return Object.assign({}, state, {
        [action.attribute]: action.value
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