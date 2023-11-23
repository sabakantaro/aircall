import React from 'react';

const SVGIcon = ({ path, label, height }) => (
  <svg role="img" aria-label={label} xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 512 512">
    <path d={path} />
  </svg>
);

export default SVGIcon;