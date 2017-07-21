import React from 'react';
import CardComponent from './CardComponent';
import GridItem from './GridItem';

export default ({ texts = [], components = [], responsibility }) => (
  <section className="grid-2c">
    {
      texts.map((text, i) =>
        <GridItem key={Math.random()} title={ text.title } desc={ text.body }/>
      )
    }


    <div className="grid-item min-height">
      <div className="flex-container">
        {
          components.map((c, i) =>
            c.code &&
            <CardComponent
              key={i}
              name={c.name}
              code={c.code}
              type={c.type}
            />
          )
        }
      </div>

      <div className="card tag">
        <div className="inner">
          <p>Responsibility</p>
          <h1>{ responsibility }</h1>
        </div>
      </div>
    </div>
  </section>
);