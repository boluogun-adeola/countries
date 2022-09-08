import { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
import { ThemeContext } from "../components/ThemeProvider";
import Filter from "../components/filter";

import axios from "axios";

const Homepage = () => {
  const {darkMode} = useContext(ThemeContext)
  const [Countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const[filterCountry, setFilterCountry] = useState([]);
  const[searchCountry, setSearchCountry]= useState("")

  const getCountries = () => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((response) => {
        setCountries(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getCountries();
  }, []);

const searchCountries = (searchValue)=>{
  setSearchCountry(searchValue);
  if(searchCountry){
    const searchedCountry = Countries.filter((country)=>(
      country.name.common.toLowerCase().includes(searchValue.toLowerCase())
    ))
    setFilterCountry(searchedCountry)
  }
  else{
    setFilterCountry(Countries)
  }
}
  return (
    <>
      {isLoading ? (
        <div className="globe">
          <FaGlobe />
        </div>
      ) : (
        <section className={darkMode?`homepage countries-dark`:`homepage countries-light`}>
        <Filter searchCountries={searchCountries} searchCountry={searchCountry}/>
        {searchCountry.length>0?(
                <section className="countries-homepage">
           
                {filterCountry.map((country) => {
                  return (
                    <Link
                   
                      to={`${country.cca3.toLowerCase()}`}
                      key={country.name.common}
                    >
                      <div className={darkMode?`countries countries-card-dark`:`countries countries-card-light`}>
                        <img src={country.flags.png} alt={country.name.common} />
                        <div className="countries-text">
                          <h2>{country.name.common}</h2>
                          <ul>
                            <li>
                              <span>Population:</span> {country.population.toLocaleString()}
                            </li>
                            <li>
                              <span>Region:</span> {country.region}
                            </li>
                            <li>
                              <span>Capital:</span> {country.capital}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </section>
        ):(
          <section className="countries-homepage">
           
                {Countries.map((country) => {
                  return (
                    <Link
                   
                      to={`${country.cca3.toLowerCase()}`}
                      key={country.name.common}
                    >
                      <div className={darkMode?`countries countries-card-dark`:`countries countries-card-light`}>
                        <img src={country.flags.png} alt={country.name.common} />
                        <div className="countries-text">
                          <h2>{country.name.common}</h2>
                          <ul>
                            <li>
                              <span>Population:</span> {country.population.toLocaleString()}
                            </li>
                            <li>
                              <span>Region:</span> {country.region}
                            </li>
                            <li>
                              <span>Capital:</span> {country.capital}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </section>
        )}
       
    
          </section>
    
      )}
    </>
  );
};

export default Homepage;
