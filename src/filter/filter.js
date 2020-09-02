import React from "react";

function Filter() {
  return (
    <div className="filter">
      <h3>Filter by</h3>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Surname" />
      <button>Apply</button>
    </div>
  );
}

export default Filter;
