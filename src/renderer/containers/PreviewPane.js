
import React from 'react';
import { connect } from 'react-redux';

import Pane from '../components/Pane';
import Image from '../components/Image';

import { viewOriginal, viewPreview } from '../actions';

const BED_SIZE_X = 220;
const BED_SIZE_Y = 220;
const PREVIEW_PX_X = 500;
const PREVIEW_PX_Y = 500;

const mapStateToProps = state => {
  return {
    image: state.image && (state.showOriginal ? state.image.original : state.image.preview),
    x: state.settings.xOffset * PREVIEW_PX_X / BED_SIZE_X, 
    y: state.settings.yOffset * PREVIEW_PX_Y / BED_SIZE_Y,
    width: state.image && state.image.width * PREVIEW_PX_X / BED_SIZE_X, 
    height: state.image && state.image.height * PREVIEW_PX_Y / BED_SIZE_Y
  };
};

const mapDispatchToProps = (dispatch) => ({
  onMouseEnter: () => dispatch(viewOriginal()),
  onMouseLeave: () => dispatch(viewPreview())
});

const PreviewPane = ({image, onMouseEnter, onMouseLeave,  x, y, width, height}) => (
  <Pane className="preview">
    <div className="origin">(0,0)</div>
    <Image src={image} x={x} y={y} width={width} height={height} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}></Image>
  </Pane>
);

export default connect( mapStateToProps, mapDispatchToProps )(PreviewPane);