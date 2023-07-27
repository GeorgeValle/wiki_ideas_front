import { useState } from 'react'
import "./TopicNew.css";
import UsePost from "./UsePost.js";
function TopicNew({ onCreate,onClose}) {

    const [responseBody, setResponseBody] = useState({});

    const inputChangeHandler = (event) => {
        const {name, value} = event.target
        setResponseBody({...responseBody, [name]: value})
    }
    const onSubmitHandler = (event) => {
        event.preventDefault()
        onCreate("Article has been created")
        UsePost(responseBody)
	//Form submission happens here
    }

    

    return (
        <>
            <section className="modal_container"
                onClick={(e) => {
                    if (e.target.className === "modal_container") { onClose() }
                    }
                }
            >
                <article className="modal-new">
                    <header className="modal_header">
                        <p className="close_modal" onClick={() => onClose()}>X</p>

                    </header>

                    <main className="modal_content">
                        <form onSubmit={onSubmitHandler}>
                        <div className="modal_buttons">
                        <button type="submit" className="btn btn_create"  >Create Topic</button>
                        <button  className="btn btn_reset" type="reset" onClick={() => onClose()}>Reset</button>
                            
                        </div>
                        <div><label className="label_new" htmlFor="title_new">Title:</label></div>
                        <div><input id="title_new" name="title" onChange={(e)=>inputChangeHandler(e)} placeholder="Type a new title" type="text"/></div>
                        <div><label className="label_new" htmlFor="content_new">Content:</label></div>
                        <div><textarea id="content_new" name="content"   onChange={(e)=>inputChangeHandler(e)} placeholder="Type the content topic" /></div>
                            
                        </form>
                    </main>
                    <footer className="modal_footer">

                    </footer>
                </article>
            </section >
        </>
    )
}

export default TopicNew