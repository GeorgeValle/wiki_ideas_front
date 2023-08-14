import  { useState } from "react";
import './SearchBar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";


const SearchBar =({setResults,setIsLoading})=>{

    const [input, setInput] = useState("");

    const fetchData = (value)=>{
                
                    if(value.length>0){
                    setIsLoading(true)
                        fetch(`https://wiki-ideas-back.fly.dev/topics/search/${value}`)
                        .then((response)=>response.json())
                        .then((json)=>{
                            setResults(json.data)
                            
                        }).catch((error) => {
                            console.log (error)})
                        .finally( ()=>setIsLoading(false))
                            }
                            else{
                                setResults([])
                            }
    }

    

    const handleChange = (value)=>{
        setInput(value);
        fetchData(value);
    };


    return(
        <>
        <article>
            <p className="description_search_bar">Read amazing articles</p>
            <div className="input-wrapper">
                <FontAwesomeIcon id="search-icon" icon={faMagnifyingGlass} />
                <input 
                placeholder="Type article to search..." 
                value={input}
                onChange={(e)=> handleChange(e.target.value)}/>
            </div>
        </article>
        </>
    )
    
}

export default SearchBar;