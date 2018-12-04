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
      // const selection = remote.dialog.showOpenDialog({ filters: [{name: 'Images', extensions:['png', 'jpg']}], properties: ['openFile'] });
      // if (selection.length!== 0) {
      //   action.result = selection[0];
      // }
    }

    return next(action)
  }
}