/* global __static */

import { dialog } from 'electron';
import * as path from 'path';
import { processor, getBase64Image } from './processor';

function preprocess(event, action) {
  processor(action.originalFilename, action)
    .then((output) => {
      if (output.outputFilename) {
        action.preview = getBase64Image(path.join(__static, output.outputFilename));
        action.original = getBase64Image(action.originalFilename);
      } 
      event.sender.send('asynchronous-reply', action);
    });
}

export function load (event, action) {
  const selection = dialog.showOpenDialog({ filters: [{name: 'Images', extensions:['png', 'jpg']}], properties: ['openFile'] });
  if (selection && selection.length > 0) {
    action.originalFilename = selection[0];
    action.preview = true;
    preprocess(event, action);
  }
  return;
}

export function reload(event, action) {
  action.preview = true;
  preprocess(event, action);
  return;
}

export function save(event, action) {
  const selection = dialog.showSaveDialog({ filters: [{name: 'GCODE', extensions:['gcode']}]});
  if (selection) {
    action.outputFilename = selection;
    action.preview = false;
    preprocess(event, action);
  }
  return;
}

