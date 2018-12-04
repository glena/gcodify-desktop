import {ipcRenderer, remote} from 'electron'

export default store => next => {
  ipcRenderer.on('asynchronous-reply', (event, arg) => {
    console.log(arg)
    return next(arg)
  })

  return action => {

    if (action.type === 'PING') {
      return ipcRenderer.send('asynchronous-message', action)      
    }

    if (action.type === 'LOAD') {
      return ipcRenderer.send('asynchronous-message', action)
    }

    return next(action)
  }
}