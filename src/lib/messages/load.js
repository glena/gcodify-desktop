import { pick } from 'lodash';
import { baseProps, offsetProps, printProps, imgManipulationProps, imageProps, sizeProps } from './fields_enum';

export function build(state) {
  const imageData = state.image ? pick(state.image, imageProps) : {};
  return Object.assign({ type: 'LOAD', isResized: state.isResized }, imageData, pick(state.settings, [
    ...baseProps, 
    ...offsetProps, 
    ...printProps,
    ...sizeProps, 
    ...imgManipulationProps
  ]));
}

export function getFileName () {
}

export function getOpts () {
  
}