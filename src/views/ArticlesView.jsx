
//import { useParams } from "react-router-dom";
import {useState} from 'react';
import './ArticlesView.css';
import {createPortal} from 'react-dom'
// import Article from '../components/Article.jsx';
import SearchBar from '../components/SearchBar.jsx';
import SearchResultsList from "../components/SearchResultsList.jsx";
import TopicModal from "../components/TopicModal.jsx";
import TopicEdit from "../components/TopicEdit.jsx";
import TopicNew from '../components/TopicNew.jsx';
import DialogMessage from '../components/DialogMessage.jsx';
import ButtonCreateTopic from '../components/ButtonCreateTopic.jsx';
//import SerchiBar from "../components/SerchiBar.jsx";
// import Pochi from "../components/Pochi.jsx";
// import "./ArticlesView.css";

const Articles = () =>{
    //const {id} = useParams();
    const [results, setResults] = useState([]);
    const [openModal, setOpenModal]= useState(false);
    const [openEditModal, setOpenEditModal]= useState(false);
    const [openCreateModal, setOpenCreateModal]= useState(false);
    const [oneResult, setOneResult] = useState({});
    const [openDialog, setOpenDialog]= useState(false);
    const [message, setMessage] = useState("");

    const handleButtonClick = (OneMessage) =>{
        setOpenModal(false);
        setResults([])
        setMessage(OneMessage);
        setOpenDialog(true);
        
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

    const handleButtonCreate = (OneMessage) =>{
        setOpenCreateModal(false);
        setMessage(OneMessage);
        setOpenDialog(true);
    }


    return (
        <>
        <div className="articles">
            <div className="search-bar-container">
                
                {/* <SerchiBar></SerchiBar> */}
                {/* <Pochi></Pochi> */}
                <ButtonCreateTopic setOpenCreateModal={setOpenCreateModal}/>
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
                {openCreateModal && 
            createPortal(
                    <TopicNew 
                    
                    
                    onClose={handleButtonCreate}

                    />, document.body
                )}
        </div>

        {/* <div><p>{message}</p></div> */}

        
                <DialogMessage setOpenDialog={setOpenDialog} openDialog={openDialog}>
                    {message}
                </DialogMessage>

        {/* <Article></Article> */}
        
        </>
    )

}

export default Articles;