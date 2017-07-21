import React from 'react';
import classNames from 'classnames';

export default ({ type = {} }) => {
  let pdsClasses = classNames({
    "btn-round": true,
    "inactive": !type.pds,
  });

  let sdsClasses = classNames({
    "btn-round": true,
    "inactive": !type.sds,
  });

  let aiClasses = classNames({
    "btn-round": true,
    "inactive": !type.ai,
  });

  return (
    <section>
      <div className="row">
        <div className="document-container">
          <div className="flex-container">
            <a className={pdsClasses}>
              <h1>
                <i className="fa fa-file" aria-hidden="true"/>
                <span> PDS</span>
              </h1>
              <small>PRODUCT DATA SHEETS</small>
            </a>
            <a className={sdsClasses}>
              <h1>
                <i className="fa fa-file" aria-hidden="true"/>
                <span> SDS</span>
              </h1>
              <small>SAFETY DATA SHEETS</small>
            </a>
            <a className={aiClasses}>
              <h1>
                <i className="fa fa-file" aria-hidden="true"/>
                <span> AI</span>
              </h1>
              <small>APPLICATION INSTRUCTIONS</small>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}