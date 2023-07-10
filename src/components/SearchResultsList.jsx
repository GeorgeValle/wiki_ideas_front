//import React from 'react'
import './SearchResultsList.css';
// import './searchResult.css';
import SearchResult from './SearchResult.jsx';


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
        <article className="results-list">
    <div >
        {  
        results.map((result) =>{

             //results.map((result.title, result.content, result._id) => {  
            
            // return <div onClick={()=> handleChange(result)} className="search-result" key={result._id}>
            // {result.title} 
            // </div>
            return  <SearchResult  result={result} onClicking={handleChange} key={result._id}/>
            })
        }
    </div>
    </article>
    </>
    );
};

export default SearchResultsList