import React from 'react';

const Image = ({src, x, y, width, height, onMouseEnter, onMouseLeave}) => {
  if (!src) { return null; }

  var divStyle = {
    width: `${width}px`,
    height: `${height}px`,
    bottom: `${y+1}px`,
    left: `${x+1}px`,
  };
  
  return (
    <img src={src} style={divStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
  );
};

export default Image;