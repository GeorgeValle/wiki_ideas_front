//import React from 'react'
import './SearchResultsList.css';
import './searchResult.css';
//import SearchResult from './SearchResult.jsx';


const SearchResultsList =({results, setOpenModal, setOneResult}) => {
    //const entries = Object.entries(results);
    console.log("Result in list:", results)

    const handleChange = (value)=>{
        
        setOneResult(value)
        console.log("value one result:", value)
        setOpenModal(true);
    }
    return (
        <>
    <div className="results-list">
        { results.map((result) =>
            {
            return <div onClick={()=> handleChange(result)} className="search-result" key={result._id}>
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