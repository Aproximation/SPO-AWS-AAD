import React from 'react';

const FilterBar = ({ filters = [], clickCallback }) => (
  <div className="filter-bar">
    <div className="filters">
      {
        filters.map((filter, i) =>
          <div
            key={filter}
            className="filter"
            onClick={ () => clickCallback(filter) }
          >{ filter }
          </div>
        )
      }
    </div>
  </div>
);

export default FilterBar;