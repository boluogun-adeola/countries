import React from "react";
 

const Filter =()=>{
    return(
        <form className="form" id="form">
            <input type="text" name="search" placeholder="Search Country"/>
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
    )
}
export default Filter;