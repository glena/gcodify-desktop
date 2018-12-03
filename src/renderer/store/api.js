import {ipcRenderer} from 'electron'

export default store => next => {
  return action => {

    if (action.type !== 'PING') {
      return next(action)
    }
  
    ipcRenderer.send('asynchronous-message', 'ping')
  
    ipcRenderer.on('asynchronous-reply', (event, arg) => {
      action.result = arg;
      return next(action)
    })
  }
}