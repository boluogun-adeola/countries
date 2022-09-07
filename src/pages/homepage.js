import { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
import { ThemeContext } from "../components/ThemeProvider";

import axios from "axios";

const Homepage = () => {
  const {darkMode} = useContext(ThemeContext)
  const [Country, setCountry] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getCountries = () => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((response) => {
        setCountry(response.data);
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

  return (
    <>
      {isLoading ? (
        <div className="globe">
          <FaGlobe />
        </div>
      ) : (
       
        
          <section className={darkMode?`countries-homepage countries-dark`:`countries-homepage countries-light`}>
            {Country.map((country) => {
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
    </>
  );
};

export default Homepage;
