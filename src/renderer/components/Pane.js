import React from 'react';

const Pane = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

export default Pane;