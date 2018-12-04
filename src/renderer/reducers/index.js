const reducers = (state = [], action) => {
  switch (action.type) {
    case 'PING':
      return Object.assign({}, state, {
        buttonContent: action.result
      })

    case 'LOAD':
      return Object.assign({}, state, {
        image: action.result
      })

    default:
      return state
  }
}

export default reducers