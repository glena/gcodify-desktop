
import React from 'react';
import Pane from './Pane';
import Slider from './Slider';
import Button from './Button';
import { connect } from 'react-redux'
import { change, load, reload } from '../actions'

const mapStateToProps = state => {
  return {
    imageContrast: state.imageContrast,
    imageBrighness: state.imageBrighness,
    pixelThreshold: state.pixelThreshold,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onClickLoad: () => dispatch(load()),
  onClickReload: () => dispatch(reload()),
  onChangeBrightness: (e) => dispatch(change('imageBrighness', e.target.value)),
  onChangeContrast: (e) => dispatch(change('imageContrast', e.target.value)),
  onChangeThreshold: (e) => dispatch(change('pixelThreshold', e.target.value)),
})

const ComponentsPane = ({
  pixelThreshold, imageContrast, imageBrighness, 
  onChangeBrightness, onChangeContrast, onChangeThreshold, 
  onClickLoad, onClickReload,
}) => (
  <div>
    <Pane>
      <div>Brighness <Slider min={-1} max={1} value={imageBrighness} step={0.1} onChange={onChangeBrightness} ></Slider></div>
      <div>Contrast <Slider min={-1} max={1} value={imageContrast} step={0.1} onChange={onChangeContrast} ></Slider></div>
      <div>Pixel Threshold <Slider min={0} max={255} value={pixelThreshold} step={1} onChange={onChangeThreshold} ></Slider></div>
      <div>Load <Button onClick={onClickLoad}>Load</Button></div>
      <div>Reload <Button onClick={onClickReload}>Reload</Button></div>
    </Pane>
  </div>
);

export default connect( mapStateToProps, mapDispatchToProps )(ComponentsPane)