import { pick } from 'lodash'
import {ipcRenderer, remote} from 'electron'

const baseProps = ['originalFilename', 'laserPrecision'];
const printProps = ['travelSpeed', 'laserSpeed', 'laserOffCode', 'laserOnCode'];
const sizeProps = ['isResized', 'height', 'width'];
const offsetProps = ['xOffset', 'yOffset', 'zOffset'];
const imgManipulationProps = ['imageContrast', 'imageBrighness', 'pixelThreshold'];

export default store => next => {
  ipcRenderer.on('asynchronous-reply', (event, arg) => {
    return next(arg)
  })

  return action => {
    const state = store.getState();

    switch(action.type) {
      case 'SAVE':
        const savePayload = Object.assign({}, action, pick(state, [
          ...baseProps, 
          ...offsetProps, 
          ...sizeProps, 
          ...printProps, 
          ...imgManipulationProps
        ]));
        return ipcRenderer.send('asynchronous-message', savePayload);

      case 'RELOAD':
      case 'LOAD':
        const loadPayload = Object.assign({}, action, { width: '50' }, pick(state, [
          ...baseProps, 
          ...offsetProps, 
          ...printProps,
          ...imgManipulationProps
        ]));
        return ipcRenderer.send('asynchronous-message', loadPayload);
        
      default:
        return next(action);
    }
  }
}