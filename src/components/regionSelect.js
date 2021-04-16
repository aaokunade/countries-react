const RegionSelect = (props) => {
    const regions = [];
    return (
        <div>
            <select onChange = {props.handleSelect}>
            <option>All Regions</option>
                {props.allData.map((obj, index) => {
                    if(!(regions.includes(obj["region"]))){
                        regions.push(obj["region"]);
                    }         
                }
                )}

                     {regions.map((region, index)=>{
                         if(region === ""){
                             region = "antarctica"
                         }
                        return <option key = {index}>{region}</option>
                
                    })}
            
                
            </select>
        </div>
    )
}

export default RegionSelect