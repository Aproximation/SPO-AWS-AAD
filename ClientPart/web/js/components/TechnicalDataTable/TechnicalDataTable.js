import React from 'react';

const PLACEHOLDER_TEXT = "-";

export default ({ data = {} }) => {
  const {
    serviceTemperature = { min: {}, max: {} },
    mixRatio = {},
    flashPoint = {},
    finish = "",
    applicationMethod = "",
    potLife = "",
    surfaceDry = "",
    throughDry = "",
    indicatedFilmThickness = "",
    fullyCured,
  } = data;

  return (
    <section>
      <div className="row">
        <div className="card">
          <h1 className="card-header white center">Technical data</h1>
          <div className="table">
            <div className="cell">
              <h3>Mix Ratio</h3>
              <p>
                {
                  mixRatio ? `BA ${ mixRatio.base } : ${ mixRatio.ca } CA` : PLACEHOLDER_TEXT
                }
              </p>
            </div>
            <div className="cell">
              <h3>Service Temperature</h3>
              <div className="two-lines">
                {
                  serviceTemperature.min ?
                    <div>
                      MIN { serviceTemperature.min.metric }&deg;C
                      | { serviceTemperature && serviceTemperature.min.imperial || "" }&deg;F
                    </div> :
                    <div>-</div>
                }
                <div>MAX { serviceTemperature && serviceTemperature.max.metric }&deg;C
                  | { serviceTemperature && serviceTemperature.max.imperial || "" }&deg;F
                </div>
              </div>
            </div>
            <div className="cell">
              <h3>Flashpoint</h3>
              <p>{ flashPoint && flashPoint.metric }&deg;C | { flashPoint && flashPoint.imperial }&deg;F</p>
            </div>
            <div className="cell">
              <h3>Finish</h3>
              <p>{ finish ? finish : PLACEHOLDER_TEXT }</p>
            </div>
            <div className="cell">
              <h3>Application Method</h3>
              <p>{ applicationMethod ? applicationMethod : PLACEHOLDER_TEXT }</p>
            </div>
            <div className="cell">
              <h3>Pot Life</h3>
              <p>{ potLife ? potLife + ' hour(s)*' : PLACEHOLDER_TEXT }</p>
            </div>
            <div className="cell">
              <h3>Surface Dry</h3>
              <p>{ surfaceDry ? surfaceDry + ' hour(s)*' : PLACEHOLDER_TEXT }</p>
            </div>
            <div className="cell">
              <h3>Through Dry</h3>
              <p>{ throughDry ? throughDry + ' hour(s)*' : PLACEHOLDER_TEXT } </p>
            </div>
            <div className="cell">
              <h3>Fully Cured</h3>
              <p>{ fullyCured ? fullyCured + ' hour(s)*' : PLACEHOLDER_TEXT  }</p>
            </div>
            <div className="cell">
              <h3>Indicated Film Thickness</h3>
              <p>{ indicatedFilmThickness ? indicatedFilmThickness + ' micron' : PLACEHOLDER_TEXT } </p>
            </div>
            <div className="desc">
              <small>* Measured at 20*C | 68*F</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}