
import React,{useContext} from "react";
import { ThemeContext } from "../components/ThemeProvider";

const Filter = ({ searchCountries, searchCountry, onSelect }) => {
  const {darkMode} = useContext(ThemeContext)
   
 
    const handleSelect=e=>{
      const region = e.target.value;
      onSelect(region)
    }
  return (
    <form className ={darkMode?`form form-dark`:`form form-light`} id="form">
      <input
        type="text"
        name="search"
        placeholder="search for a country ..."
        value={searchCountry}
        onChange={(e)=>searchCountries(e.target.value)}
      />
      <div>
        <select name="select" className="select" onChange={handleSelect}>
          <optgroup>
          <option className="option" value="" hidden>Filter by Region</option>
          <option className="option"  value="africa">Africa</option>
          <option className="option"  value="americas">Americas</option>
          <option  className="option" value="asia">Asia</option>
          <option className="option"  value="europe">Europe</option>
          <option className="option" value="oceania">Oceania</option>
          </optgroup>
         
        </select>
      </div>
    </form>
  );
};
export default Filter;
