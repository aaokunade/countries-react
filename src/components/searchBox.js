import AllCountries from "./allCountries"

const SearchBar = (props) => {
    return     <div>
    <input onChange = {props.handleSearch} type = "text" placeholder = "your search here" />
    {/* <AllCountries > */}
    </div>
    
}

export default SearchBar