import React from 'react';
import { connect } from 'react-redux'
import Button from '../components/Button'
import { load } from '../actions'

const mapStateToProps = state => {
  return {
    buttonContent: state.buttonContent
  }
}

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(load())
})


const PingButton = ({ onClick, buttonContent }) => (
  <Button onClick={onClick}>{buttonContent}</Button>
);

export default connect( mapStateToProps, mapDispatchToProps )(PingButton)