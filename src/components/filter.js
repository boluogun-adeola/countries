import React from "react";

const Filter = ({ searchCountries, searchCountry }) => {
  return (
    <form className="form" id="form">
      <input
        type="text"
        name="search"
        placeholder="Search Country"
        value={searchCountry}
        onChange={(e)=>searchCountries(e.target.value)}
      />
      <div>
        <select name="select" className="select">
          <option value="Filter by Region">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </form>
  );
};
export default Filter;
