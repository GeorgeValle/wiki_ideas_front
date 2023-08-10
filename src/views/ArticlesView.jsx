
import {useState} from 'react';
import './ArticlesView.css';
import {createPortal} from 'react-dom'
import SearchBar from '../components/SearchBar.jsx';
import SearchResultsList from "../components/SearchResultsList.jsx";
import TopicModal from "../components/TopicModal.jsx";
import TopicEdit from "../components/TopicEdit.jsx";
import TopicNew from '../components/TopicNew.jsx';
import DialogMessage from '../components/DialogMessage.jsx';
import ButtonCreateTopic from '../components/ButtonCreateTopic.jsx';
import BouncyLoading from '../components/BouncyLoading.jsx'

const Articles = () =>{
    
    const [results, setResults] = useState([]);
    const [openModal, setOpenModal]= useState(false);
    const [openEditModal, setOpenEditModal]= useState(false);
    const [openCreateModal, setOpenCreateModal]= useState(false);
    const [oneResult, setOneResult] = useState({});
    const [message, setMessage] = useState("");
    const [isOpenModalMessage, setIsOpenModalMessage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleButtonClick = (OneMessage) =>{
        setOpenModal(false);
        setResults([])
        setMessage(OneMessage);
        setIsOpenModalMessage(true)
    }

    const handleButtonEdit = (result) =>{
        setOpenModal(false);
        setOpenEditModal(true);
        setOneResult(result)
    }

    const handleButtonEditClose = (result,oneMessage) =>{
        setOneResult(result);
        setOpenEditModal(false);
        setOpenModal(true);
        setMessage(oneMessage)
        setIsOpenModalMessage(true) 
    }

    const handleButtonCreate = (OneMessage) =>{
        setOpenCreateModal(false);
        setMessage(OneMessage);
        setIsOpenModalMessage(true);
    }

    const handleButtonCloseCreate = () =>{
        setOpenCreateModal(false);
    }

    const handleCloseMessage = ()=>{
        setIsOpenModalMessage(false);
    }

    return (
        <>
        <div className="articles">
            <div className="search-bar-container">
                
                <ButtonCreateTopic setOpenCreateModal={setOpenCreateModal}/>
                <SearchBar setResults={setResults} setIsLoading={setIsLoading}/>
                {results.length>0 &&
                    <SearchResultsList results={results} setOpenModal={setOpenModal} setOneResult={setOneResult}/> 
                }
                {
                isLoading && <BouncyLoading/>
                }
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
                    
                    onCreate={handleButtonCreate}
                    onClose={handleButtonCloseCreate}

                    />, document.body
                )}
                {isOpenModalMessage &&(<DialogMessage isOpen={isOpenModalMessage} dialogMessage={message} isClose={handleCloseMessage}/>)}
        </div>
        </>
    )

}

export default Articles;