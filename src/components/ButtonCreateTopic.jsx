import './ButtonCreateTopic.css';

export default function ButtonCreateTopic({setOpenCreateModal}) {

    const handleOpen = ()=>{
        setOpenCreateModal(true);
    }

    return (
    <>
        <article>
            <p className="description_button_create">Let your mind fly</p>
            <button className="btn btn_create" onClick={()=>handleOpen()}> Create  New Topic </button>
            <p className='separator_button_create'>-</p>
        </article>    
    </>
    )
}

