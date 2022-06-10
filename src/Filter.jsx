import React from 'react';

import './filter.scss';

const Filter =({ onChange, filterText, count }) => {
  const setFilter = (event) => {
    onChange(event.target.value);
  }
  
  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input 
        type="text" 
        className="filter__input"
        onChange={setFilter} 
        value={filterText} 
      />
    </div>
  );
 
};

export default Filter;

