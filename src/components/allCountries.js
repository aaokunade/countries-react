import React from 'react';
// import Data from '../Data.json';
// console.log(Data);



const AllCountries = (props) => {
   const allData = props.allData;
        return (
        <div className = "countries"> 
        {allData.map((obj, index) => {
             return <div className = "oneCountry">
            <img src = {obj["flag"]} alt = "flag" />
            <p className = "nameC" key = {index}> {obj["name"]} </p>
            <div className = "info">
            <p> <strong>Population:</strong> {obj["population"]} </p>
            <p> <strong>Region:</strong>  {obj["region"]} </p>
            <p> <strong>Capital:</strong> {obj["capital"]} </p>
            </div>
            </div>
        } )}
    </div>
    )   
}




export default AllCountries;