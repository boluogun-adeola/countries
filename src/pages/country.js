import axios from "axios";
import React, { useState, useEffect,useContext } from "react";

import { ThemeContext } from "../components/ThemeProvider";
import { Link, useParams } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { FaGlobe } from "react-icons/fa";

const Country = () => {
  const {darkMode} = useContext(ThemeContext)
  const [Country, setCountry] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { name } = useParams();

  const getCountry = async () => {
    await axios
      .get(`https://restcountries.com/v3.1/alpha/${name}`)
      .then((response) => {
        setCountry(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCountry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <div className ={darkMode?`country-page country-dark`:`country-page countries-light`}>
   
     <Link to ="/">
            <button className={darkMode?`back-btn btn-dark`:`back-btn btn-light`}><HiArrowNarrowLeft/><span>Back</span></button>
           
            
          </Link> 
          
      {isLoading ? (
       
        <div className="globe"> <FaGlobe/></div>
      ) : (
        <section>
          
          {Country.map((country) => {
            return (
              <section key={country.name.common} className={darkMode?`single-country single-country-dark`:`single-country single-country-light`}>
                <section className="flag">
                  <img src={country.flags.png} alt={country.name.common} />
                </section>
                <section className="full-details">
                  <h1>{country.name.official}</h1>
                  <section className="details">
                    <div className="details-1">
                      {/* {country.name.common} */}
                      <p>
                        <span>Native Name:</span>
                        {
                          country.name.nativeName[
                            Object.keys(country.name.nativeName)[0]
                          ].common
                        }
                      </p>
                      <p>
                        <span>Population:</span>
                        {country.population.toLocaleString()}
                      </p>
                      <p>
                        <span>Region:</span>
                        {country.region}
                      </p>
                      <p>
                        <span>Subregion:</span>
                        {country.subregion}
                      </p>
                      <p>
                        <span>Capital:</span>
                        {country.capital}
                      </p>
                    </div>
                    <div className="details-2">
                      <p>
                        <span>Top Level Domain:</span>
                        {country.tld}
                      </p>
                      <p>
                        <span>Currencies:</span>{" "}
                        {
                          country.currencies[Object.keys(country.currencies)[0]]
                            .name
                        }
                      </p>
                      <p>
                        <span>Languages:</span>
                        {country.languages[Object.keys(country.languages)[0]]}
                      </p>
                    </div>

                  </section>
                  <div className="border-country">
                      <p>Border Countries:</p>
                      <div key={country.name} className="borders">
                        { country.borders? country.borders.map((country, index) => (
                          <button className="border-btn" key={index}>
                             <Link to={`/${country.toLowerCase()}`}>
                            <div className="borders" key={index}>
                              {country}
                            </div>
                          </Link>
                          </button>
                         
                        )):'-'}
                      </div>
                    </div>
                </section>
              </section>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default Country;
