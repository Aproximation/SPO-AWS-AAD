import React from 'react';

export default ({ title, desc, children }) => (
  <div className="card grid-item min-height">
    {
      title &&
      <h2 className="card-header">{ title }</h2>
    }
    {
      desc &&
      <p>{ desc }</p>
    }
    { children }
  </div>
);