import * as gcodify from 'gcodify'
import * as path from 'path'
import * as fs from 'fs'

export async function processor (filename, opts) {
  let absPath;
  let outputFilename;

  if (opts.outputFilename) {
    absPath = opts.outputFilename;
    outputFilename = null;
  } else {
    outputFilename = 'preview' + Math.random();
    absPath = path.join(__static, outputFilename);
  }

  await gcodify({
    xOffset: 28,
    yOffset: 16,
    zOffset: 90,

    width: 50, 
    height: undefined, 

    laserPrecision: 0.1, 
    
    laserOnCode: 'M106',
    laserOffCode: 'M107',

    laserSpeed: 10,
    travelSpeed: 200,

    filename: filename,

    preview: opts.preview,
    debug: false,
    outputFilename: absPath,

    pixelThreshold: opts.pixelThreshold,
    imageQuality: 60,
    imageBrighness: opts.imageBrighness,
    imageContrast: opts.imageContrast,
  });

  return outputFilename;
};

export function getBase64Image(filename) {
  const b64 = fs.readFileSync(filename).toString('base64');
  return `data:image/jpg;base64,${b64}`;
}