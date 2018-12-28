import { ipcRenderer } from 'electron';
import getBuilder from '../../lib/messages';

export default store => next => {
  ipcRenderer.on('asynchronous-reply', (event, arg) => {
    return next(arg);
  });

  return action => {
    const state = store.getState();

    switch(action.type) {
    case 'SAVE':
    case 'RELOAD':
    case 'LOAD':
      return ipcRenderer.send('asynchronous-message', getBuilder(action.type)(state));
        
    default:
      return next(action);
    }
  };
};