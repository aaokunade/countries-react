import {React, useState} from 'react';
// import './App.css';
import AllCountries from './allCountries.js';
import Data from '../Data.json';
import SearchBar from './searchBox.js';
import RegionSelect from './regionSelect.js';


const AllCountryFiles = () => {
    const [countryName, setCountryName] = useState(Data);
    const [region, setRegion] = useState(Data)
    const handleSearch = (event) => {
        const searched = event.target.value.toLowerCase();
        // console.log(searched);
        // searched = searched.toLowerCase();
        const filteredSearch = Data.filter((obj) => {
            if((obj["name"].toLowerCase().includes(searched)) || (obj["capital"].toLowerCase().includes(searched))) {
                return obj;
            }
        })
        console.log(filteredSearch);
        setCountryName(filteredSearch)
    }

    const handleSelect = (event) => {
        const selected = event.target.value.toLowerCase()
        const filteredSelected = Data.filter((obj) => {
            if (obj["region"].toLowerCase().includes(selected)){
                return obj;
            }
        })
        setCountryName(filteredSelected);
    }

return(  
<div> 
<div className = "regionsearch">
<SearchBar handleSearch = {handleSearch}/>
<RegionSelect allData = {countryName} handleSelect = {handleSelect}/>
</div>
<AllCountries allData = {countryName}/>
</div>
)
}

export default AllCountryFiles