import React from 'react';

const BASE_URL = "https://hmp-pim-dataservice.azurewebsites.net/api/resources/";

const Shades = ({ shades = [] }) => (
  <section style={{ marginTop: '8px' }}>
    <div className="row">
      <div className="card">
        <h1 className="card-header center">Shades</h1>
      </div>
      <div className="flex-container">
        {
          shades.map((shade, i) =>
            <div className="grid-item-33 card" key={shade.ShadeCode}>
              {
                shade.Image ?
                  <div
                    className="color-img"
                    style={{ backgroundImage: `url(${BASE_URL}/${shade.Image.FileId })` }}
                  /> :
                  <div className="color-img">
                    <i className="fa fa-picture-o" aria-hidden="true"/>
                  </div>
              }
              <div className="shade-footer">
                <p>
                  <span className="meta-text">15780</span><strong>19840</strong>
                </p>
                <i className="fa fa-info" aria-hidden="true"/>
              </div>
            </div>
          )
        }
      </div>
    </div>
  </section>
);

export default Shades;