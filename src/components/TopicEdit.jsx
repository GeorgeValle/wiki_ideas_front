import { useState } from 'react'
import "./TopicEdit.css";
import UseEdit from './UseEdit.js';
import DialogModal from './DialogModal.jsx';

const TopicEdit = ({oneResult, onClose}) => {

    const [responseBody, setResponseBody] = useState(oneResult);
    const [openDialog, setOpenDialog]= useState(false);
    const question = "are you sure you want to overwrite this post?";

    const inputChangeHandler = (event) => {
        const {name, value} = event.target
        setResponseBody({...responseBody, [name]: value})
    }
    const onSubmitHandler = (event) => {
        event.preventDefault()
        setOpenDialog(true);
    }

    const handleCloseDialog = () =>{
        setOpenDialog(false);
    };
    

    const dialogHandler = () => {
        const oneMessage = "Article edited successfully"
        onClose(responseBody,oneMessage)
        UseEdit(responseBody)
        
	//Form submission happens here
    }

    console.log("initial",responseBody)

    return (
        <>
            <section className="modal_container"
                onClick={(e) => {
                    if (e.target.className === "modal_container") { onClose(oneResult,"Edit mode closed") }
                    }
                }
            >
                <article className="modal-edit">
                    <header className="modal_header">
                        <p className="close_modal" onClick={() => onClose(oneResult,"Edit mode closed")}>X</p>

                    </header>

                    <main className="modal_content">
                        <form onSubmit={onSubmitHandler}>
                        <div className="modal_buttons">
                        <button type="submit" className="btn btn_update" >Update</button>
                        <button  className="btn btn_cancel" onClick={() => onClose(oneResult)} >Cancel</button>
                                
                        </div>
                        <div><label className="label_edit" htmlFor="title_edit">Title:</label></div>
                        <div><input id="title_edit" name="title" onChange={(e)=>inputChangeHandler(e)} defaultValue={oneResult.title} type="text"/></div>
                        <div><label className="label_edit" htmlFor="content_edit">Content:</label></div>
                        <div><textarea id="content_edit" name="content"   onChange={(e)=>inputChangeHandler(e)} defaultValue={oneResult.content} /></div>
                            
                            
                        </form>
                    </main>
                    <footer className="modal_footer">

                    </footer>
                </article>
            </section >
            {openDialog &&( <DialogModal  closeModal={handleCloseDialog} messageQuestion={question} handleModals={dialogHandler}/>)}
                    
        </>
    )
}

export default TopicEdit