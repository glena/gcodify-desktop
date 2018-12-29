import { dialog } from 'electron';
import * as path from 'path';
import { processor, getBase64Image } from './processor';

async function preprocess(event, action) {
  processor(action.originalFilename, action)
    .then((output) => {
      if (output.outputFilename) {
        action.preview = getBase64Image(path.join(__static, output.outputFilename));
        action.original = getBase64Image(action.originalFilename);
        action.width = output.width;
        action.height = output.height;
      } 
      event.sender.send('asynchronous-reply', action);
    });
}

export async function load (event, action) {
  const selection = dialog.showOpenDialog({ filters: [{name: 'Images', extensions:['png', 'jpg']}], properties: ['openFile'] });
  if (selection && selection.length > 0) {
    action.originalFilename = selection[0];
    action.preview = true;
    await preprocess(event, action);
  }
}

export async function reload(event, action) {
  action.preview = true;
  await preprocess(event, action);
}

export async function save(event, action) {
  const selection = dialog.showSaveDialog({ filters: [{name: 'GCODE', extensions:['gcode']}]});
  if (selection) {
    action.outputFilename = selection;
    action.preview = false;
    await preprocess(event, action);
  }
}

