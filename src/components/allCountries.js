import React from 'react';
// import Data from '../Data.json';
// console.log(Data);



const AllCountries = (props) => {
   const allData = props.allData
    return (
    <div className = "countries"> 
        {allData.map((obj, index) => {
            console.log(obj);
            return <div className = "oneCountry card">
            <img className = "card-img-top" src = {obj["flag"]} alt = "flag" />
            <p className = "nameC" key = {index}> {obj["name"]} </p>
            <div className = "info">
            <p> Population: {obj["population"]} </p>
            <p> Region:  {obj["region"]} </p>
            <p> Capital: {obj["capital"]} </p>
            </div>
            </div>
        } )}
    </div> 
    )   
}




export default AllCountries;