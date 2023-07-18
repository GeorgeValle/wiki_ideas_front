import './DialogModal.css'

const DialogModal = ({openDialog, closeModal, messageQuestion, handleModals})=>{


    // const [ closeModal, messageQuestion, handleModals ] = props
    
    const handleClose = (message)=>{
        
        handleModals()
        closeModal(message);
        
    };

    return(
        <section className={`dialog_container ${openDialog && 'open_modal' }`}>
            <article className="dialog_modal">
                <div className="dialog_header">
                
                </div>
                <div className="dialog_main">
                    <p className="dialog_question">{messageQuestion}</p>
                </div>
                <div className="dialog_footer">
                    <button className="btn btn_accept" onClick={()=>handleClose("Accepted")} >Accept</button>
                    <button  className="btn btn_cancel" onClick={()=>closeModal("Canceled")}>Cancel</button>
                </div>
            </article>
        </section>
    )
}

export default DialogModal;