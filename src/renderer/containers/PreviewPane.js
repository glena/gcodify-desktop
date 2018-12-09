
import React from 'react';
import { connect } from 'react-redux'

import Pane from '../components/Pane'
import Image from '../components/Image'


const mapStateToProps = state => {
  return {
    image: state.showOriginal ? state.original : state.preview
  }
}

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(toggleViewOriginal())
})

const PreviewPane = ({image, onClick}) => (
  <Pane className="preview">
    <Image src={image} onClick={onClick}></Image>
  </Pane>
);

export default connect( mapStateToProps, mapDispatchToProps )(PreviewPane)