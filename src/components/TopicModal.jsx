import './TopicModal.css';

const TopicModal =({oneResult, onClose})=>{

    


    return(
        <>
        <section className="modal_container"
            onClick={(e)=>{
                if(e.target.className === "modal_container"){onClose("click outside of windowsr")}}
            }
        >
            <article className="modal">
                <header className="modal_header">
                    <p className="close_modal" onClick={()=>onClose("close windows")}>X</p>
                    
                </header>
                <main className="modal_content">
                    <div className="modal_text" >
                        <h1 className="modal_title">{oneResult.title}</h1>
                        <p className="modal_content">{oneResult.content}</p>
                    </div>
                    <div className="modal_buttons">
                        <button className="btn btn_edit" >Edit</button>
                        <button  className="btn btn_delete">Delete</button>
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