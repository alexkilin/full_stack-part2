import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'
const weatherUrl = 'https://api.weatherapi.com/v1/current.json?'
const apiKey = '675e9b4bd4a3478b9c1175118240301'
//example:
//https://api.weatherapi.com/v1/current.json?key=675e9b4bd4a3478b9c1175118240301&q=London

const getAll = () => {
  const request = axios.get(`${baseUrl}`+'/all')
  return request.then(response => response.data)
}

const getByName = (name) => {
  const request = axios.get(`${baseUrl}/name/${name}`)
  return request.then(response => response.data)
}

const getWeatherByNameOfCapital = (name) => {
  const request = axios.get(`${weatherUrl}key=${apiKey}&q=${name}`)
  return request.then(response => response.data)
}



export default {
  getAll: getAll,
  getByName: getByName,
  getWeatherByNameOfCapital: getWeatherByNameOfCapital,

}
