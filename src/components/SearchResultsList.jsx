import './SearchResultsList.css';
import SearchResult from './SearchResult.jsx';


const SearchResultsList =({results, setOpenModal, setOneResult}) => {
    //const entries = Object.entries(results);

    const handleChange = (value)=>{  
        setOneResult(value)
        setOpenModal(true);
    }
    return (
        <>
        <article className="results-list">
    <div >
        {  
        results.map((result) =>{

            return  <SearchResult  result={result} onClicking={handleChange} key={result._id}/>
            })
        }
    </div>
    </article>
    </>
    );
};

export default SearchResultsList