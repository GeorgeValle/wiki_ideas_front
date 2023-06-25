import  { useState } from "react";
import axios from "axios";
import './SearchBar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";



const SearchBar =({setResults})=>{

    const [input, setInput] = useState("");

    const fetchData = /*async*/(value)=>{
        
                    console.log(value);
                    // const response = await axios.get(`https://wiki-ideas-back.fly.dev/topics/search/${value}`);
                    
                    // setInput(response.data);
                //     const results = response.data
                //     setResults(results)
                // }catch(e){
                //     console.error(e);
                // }
                axios.get(`https://wiki-ideas-back.fly.dev/topics/search/${e.target.value}`)
            .then(response => {
                setResults(response.data);
            })
            .catch(error => {
                console.error(error);
            });

    };

    const handleChange = (value)=>{
        setInput(value);
        fetchData(value);
    };


    return(
        <div className="input-wrapper">
            <FontAwesomeIcon id="search-icon" icon={faMagnifyingGlass} />
            <input 
            placeholder="Type article to search..." 
            
            onChange={(e)=> handleChange(e.target.value)}/>
            <div>Search Bar</div>
            <div>search-bar result</div>
        </div>
    )
}
// const SearchBar = () => {
//     const [searchTerm, setSearchTerm] = useState("");

//     const handleChange = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     return (
//         <div className="bar" >
//             <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={handleChange}
//                 className="search-bar"
//                 placeholder="Search an article..."
//             />
//         </div>
//     );
// };



export default SearchBar;