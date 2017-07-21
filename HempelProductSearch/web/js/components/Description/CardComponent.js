import React from 'react';

export default ({ code, name, type }) => (
  <div className="component">
    <div className="code">{code} <span>{type}</span></div>
    <div className="name">{name}</div>
  </div>
);