import React from 'react';

export default ({ qualityName, qualityCode }) => (
  <header>
    <div className="header-content">
      <h3>Product information</h3>
      <h1>{ qualityName }</h1>
      <h3>{ qualityCode }</h3>
    </div>
  </header>
);