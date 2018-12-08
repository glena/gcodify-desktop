import React from 'react';
import { connect } from 'react-redux'
import { toggleViewOriginal } from '../actions'

const mapStateToProps = state => {
  return {
    image: state.showOriginal ? state.original : state.preview
  }
}

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(toggleViewOriginal())
})

const Preview = ({image, onClick}) => (
  <img src={image} onClick={onClick} style={{width: '100px'}} />
);

export default connect( mapStateToProps, mapDispatchToProps )(Preview)