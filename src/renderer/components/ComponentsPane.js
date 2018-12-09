
import React from 'react';
import Pane from './Pane';
import Slider from './Slider';
import Button from './Button';
import { connect } from 'react-redux'
import { change, load, reload, save } from '../actions'

const mapStateToProps = state => {
  return {
    imageContrast: state.imageContrast,
    imageBrighness: state.imageBrighness,
    pixelThreshold: state.pixelThreshold,
    isLoaded: !!state.originalFilename,
    upToDate: state.upToDate,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onClickLoad: () => dispatch(load()),
  onClickReload: () => dispatch(reload()),
  onClickSave: () => dispatch(save()),
  onChangeBrightness: (e) => dispatch(change('imageBrighness', e.target.value)),
  onChangeContrast: (e) => dispatch(change('imageContrast', e.target.value)),
  onChangeThreshold: (e) => dispatch(change('pixelThreshold', e.target.value)),
})

function LoadButton({isLoaded, onClick}) {
  if (isLoaded) return null;
  return (<Button onClick={onClick}>Load</Button>);
}
function ReloadButton({isLoaded, upToDate, onClick}) {
  if (!isLoaded) return null;
  return (<Button disabled={upToDate} onClick={onClick}>Reload</Button>);
}
function SaveButton({isLoaded, upToDate, onClick}) {
  if (!isLoaded) return null;
  return (<Button disabled={!upToDate} onClick={onClick}>Save</Button>);
}

const ComponentsPane = ({
  isLoaded, upToDate,
  pixelThreshold, imageContrast, imageBrighness, 
  onChangeBrightness, onChangeContrast, onChangeThreshold, 
  onClickLoad, onClickReload, onClickSave, 
}) => (
  <div>
    <Pane>
      <div>Brighness <Slider min={-1} max={1} value={imageBrighness} step={0.1} onChange={onChangeBrightness}></Slider> {imageBrighness}</div>
      <div>Contrast <Slider min={-1} max={1} value={imageContrast} step={0.1} onChange={onChangeContrast} ></Slider> {imageContrast}</div>
      <div>Pixel Threshold <Slider min={0} max={255} value={pixelThreshold} step={1} onChange={onChangeThreshold} ></Slider> {pixelThreshold}</div>
      <LoadButton isLoaded={isLoaded} onClick={onClickLoad}></LoadButton>
      <ReloadButton isLoaded={isLoaded} upToDate={upToDate} onClick={onClickReload}></ReloadButton>
      <SaveButton isLoaded={isLoaded} upToDate={upToDate} onClick={onClickSave}></SaveButton>
    </Pane>
  </div>
);

export default connect( mapStateToProps, mapDispatchToProps )(ComponentsPane)