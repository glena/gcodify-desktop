import React from 'react';

const Button = ({ children, onClick, disabled }) => (
  <button type="button" disabled={disabled} onClick={onClick}>
    {children}
  </button>
);

export default Button;
