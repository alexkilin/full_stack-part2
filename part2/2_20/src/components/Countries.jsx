
const Countries =({countries, showDetails, updateWeatherFromApi, currentWeather, currentWindy, currentCondition}) =>{

if (countries.length>=10)
    {
    console.log('много' + countries.length)
    return (
      <ul>'уточните запрос...'  </ul>
    )
    }

if (countries.length==1)
  {
    console.log(countries[0])
    updateWeatherFromApi(countries[0]);
    // showDetails(countries[0]);

      return (
<div>
        <h1>{countries[0].name.common}</h1>
        <h4>Capital: {countries[0].capital}</h4>
        <h4>Area: {countries[0].area}</h4>
        <h3>Languages:</h3>
        <h4>{
Object.keys(countries[0].languages).map((prop)=>
  <li>
  {countries[0].languages[prop]}
  </li>
)
      }
        </h4>
  <img src={countries[0].flags.png}/>


<p>Weather in {countries[0].capital}: {currentWeather}</p>
<p>Windy: {currentWindy}</p>
<p><img src={currentCondition}/></p>

</div>
      )
    }
return (
<ul>
   {countries.map(country =>
     <li>
     {country.name.common}
     <button onClick={()=>{showDetails(country)}}>Details</button>
     </li>
)}
</ul>
)

}

export default Countries
