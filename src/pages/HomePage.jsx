import React from 'react'
import {useState, useEffect} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomePage() {
  const [countries, setCountries] = useState(null)

  async function fetchCountries () {
    try{
      const result = await axios.get("https://ih-countries-api.herokuapp.com/countries ")
      // console.log(result)
      setCountries(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  if (!countries) {
    return <div className="loading">Loading...</div>
  }

  return (
    <>
        <h1>WikiCountries: Your Guide to the World</h1>

        <ul>
          {countries.map((country) => {
            return (
             <Link key={country.alpha2Code} to={country.alpha3Code}>
              <li>
                  {" "}
                   <img
                     src = {`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} 
                     alt= ""
                 />{" "} 
                 {country.name.common}
              </li>
             </Link>
            )
          })}
        </ul>
    </>
  )
}

export default HomePage