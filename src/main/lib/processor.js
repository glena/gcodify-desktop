import * as gcodify from 'gcodify'
import * as path from 'path'

export default async function processor (selection) {
  const outputFilename = 'preview' + Math.random();
  const absPath = path.join(__static, outputFilename);

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

    filename: selection,

    preview: true,
    debug: false,
    outputFilename: absPath,

    pixelThreshold: 128,
    imageQuality: 60,
    imageBrighness: undefined,
    imageContrast: undefined,
  });

  return outputFilename;
};
