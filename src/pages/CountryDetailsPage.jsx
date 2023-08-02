

import React from 'react'
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'

function CountryDetailsPage() {
  const params = useParams()
  console.log(params)
  const [country, setCountry] = useState(null)
  
  async function fetchOneCountry () {
    try {
      const result = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${params.countryId} `)
      setCountry(result.data)
    } catch(error) {
      console.log(error)
    }
  } 
  
  useEffect (() => {
    fetchOneCountry()
  }, [])

  if (!country) {
    return <div className = "loading">Loading...</div>
  }
  
  return (
    <>
  
      <h2>CountryDetailsPage</h2>
      <p>{country.name.common}</p>
   </>
  )
  
}

export default CountryDetailsPage;


