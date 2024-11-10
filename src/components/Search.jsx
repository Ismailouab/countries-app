import React from 'react'
import './Css/Search.css'
function Search({setSearchItem}) {
  return (
    <div className='search'>
        <input type="text" placeholder='search for a country...' 
        onChange={(e)=>setSearchItem(e.target.value)}/>
    </div>
  )
}

export default Search