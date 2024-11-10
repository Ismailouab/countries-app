import './App.css';
import { useEffect, useState } from 'react';
import CountryList from './components/CountryList';
import Search from './components/Search';
import FilterCounty from './components/FilterCounty';
import Dropdown from './components/Dropdown';


const apiUrl ='https://restcountries.com/v3.1';
function App() {
  const [countries,setCountries]=useState([])
  const [searchitem ,setSearchItem]=useState('')
  const [sortOrder , setSortOrder]=useState('asc')

  useEffect(()=>{
    fetchCountries();
  },[])

  const fetchCountries= async ()=>{
    try{
     const res= await fetch(`${apiUrl}/all`);
     const data= await res.json();
     if(data)setCountries(data)
    }catch (error){
      console.log(error);
    }
  };

  const filterCountries= countries.filter((country)=>
    country.name.common.toLowerCase().includes(searchitem.toLowerCase())
  )
  .sort((a,b)=>{
    return sortOrder === "asc" ? a.name.common.localeCompare(b.name.common):b.name.common.localeCompare(a.name.common);
  });
 
  const counrtyRegion= async (regionName)=>{
    try{
      if (regionName==='all'){
        return fetchCountries();
      }
      const res = await fetch(`${apiUrl}/region/${regionName}`)
      const data = await res.json() 
      setCountries(data)
    }catch(error){
      console.log(error);
    }
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value)
  }

  return (
    <div className="app">

      <Search  setSearchItem = {setSearchItem} />

      <div className="filter">

        <FilterCounty  onSelect={counrtyRegion}/>

        <Dropdown sortOrder={sortOrder} onSortChange= {handleSortChange} />
      </div>

      <CountryList countries = {filterCountries}/>
    </div>
  );
}

export default App;
