import { pick } from 'lodash';
import { baseProps, offsetProps, printProps, imgManipulationProps } from './fields_enum';

export function build(state) {
  return Object.assign({ type: 'RELOAD', width: '50' }, pick(state, [
    ...baseProps, 
    ...offsetProps, 
    ...printProps,
    ...imgManipulationProps
  ]));
}
