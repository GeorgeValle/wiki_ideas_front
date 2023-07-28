import './TopicModal.css';
import UseDelete from './UseDelete.js';
import DialogModal from './DialogModal.jsx';
import { useState } from 'react'

const TopicModal =({oneResult, onClose, onEdit})=>{
    
    const [openDialog, setOpenDialog]= useState(false);
    const [id, setId] = useState("");
    const question = 'are you sure you want to "Delete" this post?';
    
    const buttonDeleteHandler = (OneId) => {
        setId(OneId);
        setOpenDialog(true);
    }

    const handleCloseDialog = () =>{
        setOpenDialog(false);
    };

    const dialogHandler = () => {

        UseDelete(id);
        onClose("Article has been deleted");
    }


    return(
        <>
        <section className="modal_container"
            onClick={(e)=>{
                if(e.target.className === "modal_container"){onClose("Article Closed")}}
            }
        >
            <article className="modal-topic">
                <header className="modal_header">
                    <p className="close_modal" onClick={()=>onClose("Article Closed")}>X</p>
                    
                </header>
                <main className="modal_content">
                <div className="modal_buttons">
                        <button className="btn btn_edit" onClick={()=>onEdit(oneResult)} >Edit</button>
                        <button  className="btn btn_delete" onClick={()=>buttonDeleteHandler(oneResult._id)}>Delete</button>
                    </div>
                    <div className="modal_text" >
                        <h1 className="modal_title">{oneResult.title}</h1>
                        <p className="modal_text_content">{oneResult.content}</p>
                    </div>
                    
                    
                </main>
                <footer className="modal_footer">
                    
                </footer>
            </article>
        </section>
        {openDialog &&( <DialogModal  closeModal={handleCloseDialog} messageQuestion={question} handleModals={dialogHandler}/>)}
        </>
    )

}

export default TopicModal;