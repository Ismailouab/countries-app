import React from 'react'
import "./Css/CountryList.css"
import CountryCard from "./CountryCard"

function CountryList({countries}) {
  return (
    <div className='country-list'>
        {countries.map((country,index)=>{
            return < CountryCard key={index} country={country} style={{animationDelay:`${index*0.1}s`}}/>
        })}
    </div>
  )
}

export default CountryList
