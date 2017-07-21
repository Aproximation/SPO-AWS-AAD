import React from 'react';

const MAX_CHARS_TITLE = 46;
const MAX_CHARS_BODY = 100;

const MarComCard = ({ title, body, info, lang, downloadURL }) => (
  <div className="grid-item-33 card-blue">
    <div className="inner">
      <h2 className="card-title">{ title.length > MAX_CHARS_TITLE ? title.substring(0, MAX_CHARS_TITLE) + '...' : title }</h2>
      <div className="lang">
        <i className="fa fa-globe" aria-hidden="true"/>
        { lang }
      </div>
      <p>{ body.length > MAX_CHARS_BODY ? body.substring(0, MAX_CHARS_BODY) + '...' : body }</p>
    </div>
    <div className="card-footer">
      <i className="fa fa-info" aria-hidden="true"/><i className="fa fa-download" aria-hidden="true"/>
    </div>
  </div>
);

export default MarComCard;