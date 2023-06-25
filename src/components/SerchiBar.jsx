import  { useState } from "react";
import { UseFetch } from "./UseFetch.js";
import './SerchiBar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const SerchiBar =()=>{
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const  handleChange =  (value)=>{
            setInput(value);
    const {data, loading} =  UseFetch(value)
            

            setData(data);
            setLoading(loading);
    } 

    return(
        <>
        <div className="input-wrapper">
            <FontAwesomeIcon id="search-icon" icon={faMagnifyingGlass} />
            <input 
            placeholder="Type article to search..." 
            value={input} 
            onChange={(e)=> handleChange(e.target.value)}/>
            {/* <div>Search Bar</div>
            <div>search-bar result</div> */}

            <ul>
                {loading && <li>Loading</li>}
                {data?.map((dat) => (
                    <li key={dat._id}>{dat.title}</li>
                ))}
            </ul>

        </div>
        
            
            </>
        
    )
} 

export default SerchiBar
    