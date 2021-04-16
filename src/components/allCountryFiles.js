import {React, useState} from 'react';
import AllCountries from './allCountries.js';
import Data from '../Data.json';
import SearchBar from './searchBox.js';
import RegionSelect from './regionSelect.js';


const AllCountryFiles = () => {
    const [countryName, setCountryName] = useState(Data);
    const handleSearch = (event) => {
    const searched = event.target.value.toLowerCase();
          const filteredSearch = Data.filter((obj) => {
            if((obj["name"].toLowerCase().includes(searched)) || (obj["capital"].toLowerCase().includes(searched))) {
                return obj;
            }
        })
        setCountryName(filteredSearch)
    }

    const handleSelect = (event) => {
        const selected = event.target.value
        if(selected === "All Regions"){
            setCountryName(Data)
        } else{
        console.log(selected);
        const filteredSelected = Data.filter((obj) => {
             if (obj["region"].includes(selected)){
                return obj;
            }             
        })
        setCountryName(filteredSelected);
    }
         
    }

return(  
<div> 
<div className = "regionsearch">
<SearchBar handleSearch = {handleSearch}/>
<RegionSelect allData = {Data} handleSelect = {handleSelect}/>
</div>
<AllCountries allData = {countryName}/>
</div>
)
}

export default AllCountryFiles