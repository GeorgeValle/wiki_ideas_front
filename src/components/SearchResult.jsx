//import React from 'react'
import './searchResult.css';

const SearchResult = ({result, onClicking}) => {
    
    return (
    <>
        <div  className="search-result" onClick={(e)=> onClicking(result)}>
            {result.title}
        </div>
    </>
    )
}

export default SearchResult