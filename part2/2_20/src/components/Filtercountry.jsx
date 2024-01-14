const Filtercountry = ({ newFilterCountry, handleFilterCountryChange}) => {
  return (
<div>
    Inter country for search:<input value={newFilterCountry} onChange={handleFilterCountryChange}/>
</div>
  )
}

export default Filtercountry
