
//import { useParams } from "react-router-dom";
import {useState} from 'react';
import './ArticlesView.css';
import {createPortal} from 'react-dom'
// import Article from '../components/Article.jsx';
import SearchBar from '../components/SearchBar.jsx';
import SearchResultsList from "../components/SearchResultsList.jsx";
import TopicModal from "../components/TopicModal.jsx";
import TopicEdit from "../components/TopicEdit.jsx";
//import SerchiBar from "../components/SerchiBar.jsx";
// import Pochi from "../components/Pochi.jsx";
// import "./ArticlesView.css";

const Articles = () =>{
    //const {id} = useParams();
    const [results, setResults] = useState([]);
    const [openModal, setOpenModal]= useState(false);
    const [openEditModal, setOpenEditModal]= useState(false);
    const [oneResult, setOneResult] = useState({});
    const[message, setMessage] = useState("");

    const handleButtonClick = (OneMessage) =>{
        setOpenModal(false);
        setMessage(OneMessage);
        
    }

    const handleButtonEdit = (result) =>{

        setOpenModal(false);
        setOpenEditModal(true);
        setOneResult(result)
    }

    const handleButtonEditClose = (result) =>{

        setOneResult(result);
        setOpenEditModal(false);
        setOpenModal(true);
        
    }






    return (
        <>
        <div className="articles">
            <div className="search-bar-container">
                
                {/* <SerchiBar></SerchiBar> */}
                {/* <Pochi></Pochi> */}
                <SearchBar setResults={setResults} />
                <SearchResultsList results={results} setOpenModal={setOpenModal} setOneResult={setOneResult}/>   
            </div>
            {openModal && 
            createPortal(
                    <TopicModal 
                    oneResult={oneResult}
                    onClose={handleButtonClick}
                    onEdit={handleButtonEdit}
                    />, document.body
                )}
            {openEditModal && 
            createPortal(
                    <TopicEdit 
                    oneResult={oneResult}
                    
                    onClose={handleButtonEditClose}

                    />, document.body
                )}
        </div>

        <div><p>{message}</p></div>


        {/* <Article></Article> */}
        
        </>
    )

}

export default Articles;