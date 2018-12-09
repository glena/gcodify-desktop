import React from 'react';

const Checkbox = ({ value, onClick }) => (
  <input type="checkbox" value={value} onClick={onClick} />
);

export default Checkbox;