import React from 'react';

const Image = ({src, onMouseEnter, onMouseLeave}) => (
  <img src={src} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
);

export default Image