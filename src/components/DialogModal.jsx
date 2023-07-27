import './DialogModal.css'

const DialogModal = ({ closeModal, messageQuestion, handleModals})=>{

    
    const handleClose = ()=>{
        
        handleModals()
        closeModal();        
    };

    return(
        <section className={`dialog_container `}>
            <article className="dialog_modal">
                <div className="dialog_header">
                </div>
                <div className="dialog_main">
                    <p className="dialog_question">{messageQuestion}</p>
                </div>
                <div className="dialog_footer">
                    <button className="btn btn_accept" onClick={()=>handleClose()} >Accept</button>
                    <button  className="btn btn_cancel" onClick={()=>closeModal()}>Cancel</button>
                </div>
            </article>
        </section>
    )
}

export default DialogModal;