import React from 'react'
import './Css/FilterCounty.css'
function FilterCounty({ onSelect }) {
    const continents =[
        {id:1, name:"Africa"},
        {id:2, name:"Asia"},
        {id:3, name:"Europe"},
        {id:4, name:"North America"},
        {id:5, name:"Oceania"},
        {id:6, name:"South America"},
    ]
    const selectContinent=(e)=>{
        const regionName = e.target.value;
        onSelect(regionName);
    }

  return (
    <select onChange={selectContinent}>
        <option value="all">Filter by region </option>
        {continents.map((continent)=>{
            return(
              <option value={continent.name} key={continent.id}>{continent.name}</option>  
            );
            
        })}
    </select>
  )
}

export default FilterCounty