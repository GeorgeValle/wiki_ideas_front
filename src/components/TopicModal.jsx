import './TopicModal.css';
import UseDelete from './UseDelete.js';

const TopicModal =({oneResult, onClose, onEdit})=>{

    
    const buttonDeleteHandler = (id) => {
        //const {name, value} = event.target
        UseDelete(id);
        onClose("topic-delete");
        //setResponseBody({...responseBody, [name]: value})


    }

    return(
        <>
        <section className="modal_container"
            onClick={(e)=>{
                if(e.target.className === "modal_container"){onClose("click outside of windows")}}
            }
        >
            <article className="modal">
                <header className="modal_header">
                    <p className="close_modal" onClick={()=>onClose("close windows")}>X</p>
                    
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
        </>
    )

    
}

export default TopicModal;