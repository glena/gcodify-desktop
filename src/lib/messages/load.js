import { pick } from 'lodash';
import { baseProps, offsetProps, printProps, imgManipulationProps } from './fields_enum';

export function build(state) {
  return Object.assign({ type: 'LOAD', width: '50' }, pick(state, [
    ...baseProps, 
    ...offsetProps, 
    ...printProps,
    ...imgManipulationProps
  ]));
}

export function getFileName () {
}

export function getOpts () {
  
}