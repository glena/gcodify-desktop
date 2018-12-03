import React from 'react';
import { connect } from 'react-redux'
import Button from '../components/Button'
import { ping } from '../actions'

const mapStateToProps = state => {
  console.log(state)
  return {
    buttonContent: state.buttonContent
  }
}

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(ping())
})


const PingButton = ({ onClick, buttonContent }) => (
  <Button onClick={onClick}>{buttonContent}</Button>
);

export default connect( mapStateToProps, mapDispatchToProps )(PingButton)