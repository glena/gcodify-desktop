import { pick } from 'lodash';
import { baseProps, offsetProps, sizeProps, printProps, imgManipulationProps } from './fields_enum';

export function build(state) {
  return Object.assign({ type: 'SAVE' }, pick(state, [
    ...baseProps, 
    ...offsetProps, 
    ...sizeProps, 
    ...printProps, 
    ...imgManipulationProps
  ]));
}
