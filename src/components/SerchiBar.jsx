import  { useState } from "react";
import { UseFetch } from "./UseFetch.js";
import './SerchiBar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const SerchiBar =()=>{
    const [input, setInput] = useState("");
    const [term, setTerm] = useState("");  
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);


    const {data, loading} =  UseFetch(term)

    const  handleChange =  (value)=>{
            setInput(value);       // setData(data);
            // setLoading(loading);
    } 
    const handleSubmit = (event)=>{
        event.stopPropagation()
        setTerm(input);
    }

    return(
        <>

        <div className="input-wrapper">
            <FontAwesomeIcon id="search-icon" icon={faMagnifyingGlass} />
            <input 
            placeholder="Type article to search..." 
            value={input} 
            onChange={(e)=> handleChange(e.target.value)}/>
            <input type="button" onClick={(e)=>handleSubmit(e)} value="Search"/>
            {/* <div>Search Bar</div>
            <div>search-bar result</div> */}
        </div>

            <ul>
                {loading
                ?<li>{<li>Loading</li>}</li>
                :data?.map((dat) => (
                    <li key={dat._id}>{dat.title}</li>
                ))
                }
            </ul>

        
        
            
            </>
        
    )
} 

export default SerchiBar
    