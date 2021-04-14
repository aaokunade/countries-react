import React from 'react';
// import './App.css';
import AllCountries from './allCountries.js';
import Data from '../Data.json';
import SearchBar from './searchBox.js';


const AllCountryFiles = () => {
return(  
<div> 
<SearchBar />
<AllCountries allData = {Data}/>
</div>
)
}

export default AllCountryFiles