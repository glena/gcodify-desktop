import { pick } from 'lodash';
import { baseProps, offsetProps, sizeProps, printProps, imgManipulationProps, imageProps } from './fields_enum';

export function build(state) {
  const imageData = state.image ? pick(state.image, imageProps) : {};
  return Object.assign({ type: 'SAVE', isResized: state.isResized }, imageData, pick(state.settings, [
    ...baseProps, 
    ...offsetProps, 
    ...sizeProps, 
    ...printProps, 
    ...imgManipulationProps
  ]));
}
