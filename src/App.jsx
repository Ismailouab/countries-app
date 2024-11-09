import './App.css';
import { useEffect, useState } from 'react';
import CountryList from './components/CountryList';
import Search from './components/Search';

const apiUrl ='https://restcountries.com/v3.1/all';
function App() {
  const [countries,setCountries]=useState([])
  useEffect(()=>{
    fetchCountries();
  },[])

  const fetchCountries= async ()=>{
    try{
     const res= await fetch(apiUrl);
     const data= await res.json();
     if(data)setCountries(data)
    }catch (error){
      console.log(error);
    }
  };
  console.log(countries);

  return (
    <div className="app">
      <Search />
      <CountryList countries={countries}/>
    </div>
  );
}

export default App;
