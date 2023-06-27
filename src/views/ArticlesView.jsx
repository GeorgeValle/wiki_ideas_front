
//import { useParams } from "react-router-dom";
import {useState} from "react";
import './ArticlesView.css';
// import Article from '../components/Article.jsx';
import SearchBar from '../components/SearchBar.jsx';
import SearchResultsList from "../components/SearchResultsList.jsx";
//import SerchiBar from "../components/SerchiBar.jsx";
// import Pochi from "../components/Pochi.jsx";
// import "./ArticlesView.css";

const Articles = () =>{
    //const {id} = useParams();
    const [results, setResults] = useState([]);
    return (
        <>
        <div className="articles">
            <div className="search-bar-container">
                
                {/* <SerchiBar></SerchiBar> */}
                {/* <Pochi></Pochi> */}
                <SearchBar setResults={setResults}/>
                <SearchResultsList results={results}/>
            </div>
        </div>


        {/* <Article></Article> */}
        
        </>
    )

}

export default Articles;