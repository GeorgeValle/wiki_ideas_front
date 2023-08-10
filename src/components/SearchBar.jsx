import  { useState } from "react";
// import axios from "axios";
import './SearchBar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";


const SearchBar =({setResults,setIsLoading})=>{

    const [input, setInput] = useState("");

    const fetchData = (value)=>{
                
                    // console.log(value);
                    // const response =  axios.get(`https://wiki-ideas-back.fly.dev/topics/`)
                    // .then(function (response) {
                    //     setInput(response.data)
                    // }).catch(function (error) {
                    //     // handle error
                    //     console.log(error);
                    // })

                    setIsLoading(true)
                    fetch(`https://wiki-ideas-back.fly.dev/topics/`)
                        .then((response)=>response.json())
                        .then((json)=>{
                            const results = json.data.filter((topic)=>{
                                return (
                                    value && 
                                    topic && 
                                    topic.title && 
                                    topic.title.toLowerCase().includes(value)
                                );
                            });

                            console.log("filter topics: ",results);
                            setResults(results)
                            
                        }).catch((error) => {
                            console.log (error)})
                            .finally( ()=>setIsLoading(false))
                        

                    
            //     axios.get(`https://wiki-ideas-back.fly.dev/topics/search/${e.target.value}`)
            // .then(response => {
            //     setResults(response.data);
            // })
            // .catch(error => {
            //     console.error(error);
            // });

    };

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
                {/* <div>Search Bar</div>
                <div>search-bar result</div> */}
            </div>
        </article>
        </>
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