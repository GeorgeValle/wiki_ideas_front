import './ButtonCreateTopic.css';

export default function ButtonCreateTopic({setOpenCreateModal}) {

    const handleOpen = ()=>{
        setOpenCreateModal(true);
    }

    return (
    <>
        <article>
            <button className="btn btn_create" onClick={()=>handleOpen()}> Create  New Topic </button>
            <p className="description_button_create">Let your mind fly</p>

        </article>    
    </>
    )
}

