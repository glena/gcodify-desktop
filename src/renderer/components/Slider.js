import React from 'react';

const Slider = ({ max, min, value, step, onChange }) => (
  <input type="range" min={min} max={max} value={value} step={step} onChange={onChange} />
);

export default Slider;