import React from 'react';

const MenuFilter = ({ filter, handleChangeFilter }) => (
  <div>
    <input
      type="text"
      value={filter}
      onChange={handleChangeFilter}
      placeholder="Filter"
    />
  </div>
);

export default MenuFilter;
