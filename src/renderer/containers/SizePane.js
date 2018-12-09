
import React from 'react';
import { connect } from 'react-redux'
import { pick } from 'lodash'

import Pane from '../components/Pane';
import Input from '../components/Input'
import Checkbox from '../components/Checkbox'

import { resize, change } from '../actions'

const mapStateToProps = state => {
  return Object.assign({
    isResized: state.isResized,
  }, pick(state, ['height', 'width', 'xOffset', 'yOffset', 'zOffset']));
}

const mapDispatchToProps = (dispatch) => ({
  onChangeResize: (e) => dispatch(resize(e.target.checked)),
  onHeightChange: (e) => dispatch(change('height', e.target.value)),
  onWidthChange: (e) => dispatch(change('width', e.target.value)),
  onXOffsetChange: (e) => dispatch(change('xOffset', e.target.value)),
  onYOffsetChange: (e) => dispatch(change('yOffset', e.target.value)),
  onZOffsetChange: (e) => dispatch(change('zOffset', e.target.value)),
})

function InputField({label, value, onChange, isVisible}) {
  if (!isVisible) return null;
  return (<div>
    {label} <Input value={value} onChange={onChange}></Input>
  </div>);
}

const PreviewPane = ({
  isResized, height, width, xOffset, yOffset, zOffset,
  onChangeResize, onHeightChange, onWidthChange, onXOffsetChange, onYOffsetChange, onZOffsetChange
}) => (
  <Pane className="size">
    <div>Resize <Checkbox checked={isResized} onChange={onChangeResize}></Checkbox></div>
    <InputField label="Height" isVisible={isResized} value={height} onChange={onHeightChange}></InputField>
    <InputField label="Width" isVisible={isResized} value={width} onChange={onWidthChange}></InputField>
    <InputField label="X Offset" isVisible={true} value={xOffset} onChange={onXOffsetChange}></InputField>
    <InputField label="Y Offset" isVisible={true} value={yOffset} onChange={onYOffsetChange}></InputField>
    <InputField label="Z Offset" isVisible={true} value={zOffset} onChange={onZOffsetChange}></InputField>
  </Pane>
);

export default connect( mapStateToProps, mapDispatchToProps )(PreviewPane)