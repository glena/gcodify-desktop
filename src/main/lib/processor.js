import * as gcodify from 'gcodify';
import * as path from 'path';
import * as fs from 'fs';

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

  const output = await gcodify({
    xOffset: opts.xOffset,
    yOffset: opts.yOffset,
    zOffset: opts.zOffset,

    width: opts.isResized && opts.width || undefined, 
    height: opts.isResized && opts.height || undefined, 

    laserPrecision: opts.laserPrecision, 
    
    laserOnCode: opts.laserOnCode,
    laserOffCode: opts.laserOffCode,

    laserSpeed: opts.laserSpeed,
    travelSpeed: opts.travelSpeed,

    filename: filename,

    preview: opts.preview,
    debug: false,
    outputFilename: absPath,

    pixelThreshold: opts.pixelThreshold,
    imageQuality: 60,
    imageBrighness: opts.imageBrighness,
    imageContrast: opts.imageContrast,
  });

  return { 
    outputFilename,
    width: output.width,
    height: output.height
  };
}

export function getBase64Image(filename) {
  const b64 = fs.readFileSync(filename).toString('base64');
  return `data:image/jpg;base64,${b64}`;
}