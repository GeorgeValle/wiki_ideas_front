//import React from 'react'
import './searchResult.css';

const SearchResult = ({result}) => {
    
    return (
    <div  className="search-result" onClick={(e)=> alert(`you click on ${result}`)}>
        {result}
    </div>
    )
}

export default SearchResult