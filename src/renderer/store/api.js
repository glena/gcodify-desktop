import {ipcRenderer, remote} from 'electron'

export default store => next => {
  ipcRenderer.on('asynchronous-reply', (event, arg) => {
    return next(arg)
  })

  return action => {
    const state = store.getState();

    switch(action.type) {
      case 'RELOAD':
      case 'LOAD':
      case 'SAVE':
        action.originalFilename = state.originalFilename;
        action.pixelThreshold = state.pixelThreshold;
        action.imageContrast = state.imageContrast;
        action.imageBrighness = state.imageBrighness;
        return ipcRenderer.send('asynchronous-message', action);
      default:
        return next(action);
    }
  }
}