
import React from 'react';
import { connect } from 'react-redux'

import Pane from '../components/Pane';
import Checkbox from '../components/Checkbox'

import { resize } from '../actions'

const mapStateToProps = state => {
  return {
    isResized: state.isResized
  }
}

const mapDispatchToProps = (dispatch) => ({
  onClickResize: (e) => dispatch(resize(e.target.value)),
})

const PreviewPane = ({isResized, onClickResize}) => (
  <Pane className="size">
    <div>Resize <Checkbox value={isResized} onClick={onClickResize}></Checkbox></div>
  </Pane>
);

export default connect( mapStateToProps, mapDispatchToProps )(PreviewPane)