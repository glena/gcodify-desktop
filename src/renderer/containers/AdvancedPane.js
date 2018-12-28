
import React from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';

import Pane from '../components/Pane';
import Input from '../components/Input';

import { change } from '../actions';

const mapStateToProps = state => {
  return pick(state, ['laserPrecision', 'laserOnCode', 'laserOffCode', 'laserSpeed', 'travelSpeed']);
};

const mapDispatchToProps = (dispatch) => ({
  onLaserPrecisionChange: (e) => dispatch(change('laserPrecision', e.target.value)),
  laserOnCodeChange: (e) => dispatch(change('laserOnCode', e.target.value)),
  laserOffCodeChange: (e) => dispatch(change('laserOffCode', e.target.value)),
  laserSpeedChange: (e) => dispatch(change('laserSpeed', e.target.value)),
  travelSpeedChange: (e) => dispatch(change('travelSpeed', e.target.value)),
});

function InputField({label, value, onChange}) {
  return (<div>
    {label} <Input value={value} onChange={onChange}></Input>
  </div>);
}

const PreviewPane = ({
  laserPrecision, laserOnCode, laserOffCode, laserSpeed, travelSpeed,
  onLaserPrecisionChange, laserOnCodeChange, laserOffCodeChange, laserSpeedChange, travelSpeedChange,
}) => (
  <Pane className="size">
    <InputField label="Laser Precision" value={laserPrecision} onChange={onLaserPrecisionChange}></InputField>
    <InputField label="Laser on GCODE" value={laserOnCode} onChange={laserOnCodeChange}></InputField>
    <InputField label="Laser off GCCODE" value={laserOffCode} onChange={laserOffCodeChange}></InputField>
    <InputField label="Laser speed" value={laserSpeed} onChange={laserSpeedChange}></InputField>
    <InputField label="Travel speed" value={travelSpeed} onChange={travelSpeedChange}></InputField>
  </Pane>
);

export default connect( mapStateToProps, mapDispatchToProps )(PreviewPane);