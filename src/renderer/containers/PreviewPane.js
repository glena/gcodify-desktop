
import React from 'react';
import { connect } from 'react-redux'

import Pane from '../components/Pane'
import Image from '../components/Image'

import { viewOriginal, viewPreview } from '../actions'

const mapStateToProps = state => {
  return {
    image: state.showOriginal ? state.original : state.preview
  }
}

const mapDispatchToProps = (dispatch) => ({
  onMouseEnter: () => dispatch(viewOriginal()),
  onMouseLeave: () => dispatch(viewPreview())
})

const PreviewPane = ({image, onMouseEnter, onMouseLeave}) => (
  <Pane className="preview">
    <div class="origin">(0,0)</div>
    <Image src={image} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}></Image>
  </Pane>
);

export default connect( mapStateToProps, mapDispatchToProps )(PreviewPane)