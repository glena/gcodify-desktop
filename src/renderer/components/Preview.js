import React from 'react';
import * as path from 'path'
import { connect } from 'react-redux'
import * as fs from "fs";

const mapStateToProps = state => {
  const logo = state.image && fs.readFileSync(path.join(__static, state.image)).toString('base64');
  return {
    image: 'data:image/jpg;base64,' + logo
  }
}

const Preview = ({image}) => (
  <img src={image} />
);

export default connect( mapStateToProps )(Preview)