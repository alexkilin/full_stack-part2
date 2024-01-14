//task 2.18, 2.19, 2.20


import { useState, useEffect } from 'react'
import axios from 'axios'
import './index.css'

import Filter from './components/Filter'
import Countries from './components/Countries'
import Filtercountry from './components/Filtercountry'
import countryService from './services/countries'

const App = () => {

  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('filter...')
  const [weather, setWeather] = useState('tempreture')
  const [windy, setWindy] = useState('tempreture')
  const [currentCondition, setCurrentCondition] = useState('')

  useEffect(() => {
    countryService
    .getAll()
    .then(countries => {
      setCountries(countries)
    })
  }, [])


  const handleFilterCountryChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const countriesToShow = countries.filter(country =>
    {
      if (newFilter=="") {
        return true
      } else {
        return country.name.common.includes(newFilter)
      }
    }
  )

  const showDetails = (country) => {
    setNewFilter(country.name.common);
}

const updateWeather = (country) => {
  countryService
  .getWeatherByNameOfCapital(country.capital[0])
  .then (data => {
    console.log(data);
    setWeather(data.current.temp_c);
    setWindy(data.current.wind_mph);
    setCurrentCondition(data.current.condition.icon);
  }
  )
}

return (
  <div>
  <Filtercountry newFilterCountry={newFilter} handleFilterCountryChange={handleFilterCountryChange}/>
  <Countries countries={countriesToShow} showDetails={showDetails} currentWeather = {weather} currentCondition={currentCondition} currentWindy = {windy} 
  updateWeatherFromApi={updateWeather}/>
  </div>
)
}
export default App
