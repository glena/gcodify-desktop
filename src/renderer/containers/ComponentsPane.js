
import React from 'react';
import { pick } from 'lodash';
import { connect } from 'react-redux';

import Pane from '../components/Pane';
import Slider from '../components/Slider';
import Button from '../components/Button';

import SizePane from './SizePane';

import { change, load, reload, save } from '../actions';

const mapStateToProps = state => ({
  isLoaded: !!state.image,
  upToDate: state.upToDate,
  ...pick(state.settings, ['imageContrast', 'imageBrighness', 'pixelThreshold'])
});

const mapDispatchToProps = (dispatch) => ({
  onClickLoad: () => dispatch(load()),
  onClickReload: () => dispatch(reload()),
  onClickSave: () => dispatch(save()),
  onChangeBrightness: (e) => dispatch(change('imageBrighness', e.target.value)),
  onChangeContrast: (e) => dispatch(change('imageContrast', e.target.value)),
  onChangeThreshold: (e) => dispatch(change('pixelThreshold', e.target.value)),
});

function LoadButton({isLoaded, onClick}) {
  if (isLoaded) return null;
  return (<Button onClick={onClick}>Load</Button>);
}
function ReloadButton({isLoaded, upToDate, onClick}) {
  if (!isLoaded || upToDate) return null;
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
  <Pane className="components">
    <div>Brighness <Slider min={-1} max={1} value={imageBrighness} step={0.1} onChange={onChangeBrightness}></Slider> {imageBrighness}</div>
    <div>Contrast <Slider min={-1} max={1} value={imageContrast} step={0.1} onChange={onChangeContrast} ></Slider> {imageContrast}</div>
    <div>Pixel Threshold <Slider min={0} max={255} value={pixelThreshold} step={1} onChange={onChangeThreshold} ></Slider> {pixelThreshold}</div>
    <SizePane></SizePane>
    <LoadButton isLoaded={isLoaded} onClick={onClickLoad}></LoadButton>
    <ReloadButton isLoaded={isLoaded} upToDate={upToDate} onClick={onClickReload}></ReloadButton>
    <SaveButton isLoaded={isLoaded} upToDate={upToDate} onClick={onClickSave}></SaveButton>
  </Pane>
);

export default connect( mapStateToProps, mapDispatchToProps )(ComponentsPane);