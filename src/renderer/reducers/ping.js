const ping = (state = [], action) => {
  switch (action.type) {
    case 'PING':
      console.log('reducer ping')
      return Object.assign({}, state, {
        buttonContent: action.result
      })
    default:
      return state
  }
}

export default ping