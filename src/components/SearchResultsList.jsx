//import React from 'react'
import './SearchResultsList.css';
import './searchResult.css';
//import SearchResult from './SearchResult.jsx';


const SearchResultsList =({results}) => {
    //const entries = Object.entries(results);
    console.log("Result in list:", results)
    return (
        <>
    <div className="results-list">
        { results.map((result) =>
            {
            return <div onClick={(e)=> alert(`you click on ${result.title}`)} className="search-result" key={result._id}>
            {result.title} 
            </div>
            // <SearchResult  result={result.title} key={id}/>
            })
        }
    </div>
    </>
    );
};

export default SearchResultsList