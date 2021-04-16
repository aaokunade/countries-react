const RegionSelect = (props) => {
    return (
        <div>
            <select onChange = {props.handleSelect}>
                {props.allData.map((obj) => {
                    return <option>{obj["region"]}</option> 
                }
                )}
                
            </select>
        </div>
    )
}

export default RegionSelect