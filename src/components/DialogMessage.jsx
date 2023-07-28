//import React from 'react'
// import { useEffect } from 'react';
import './DialogMessage.css'

export default function DialogMessage({isOpen,dialogMessage,isClose}) {

    // const dialogPop = () => {

    //         const timer = setTimeout(() => {
    //             setIsOpen();
    //         }, 2000);
            
        

        // timer();


        
            setTimeout(() => {
                isClose();
            }, 4000)
    
    // {isOpen? && open}
    return (
        <article >
            <dialog open className={`dialog_message ${isOpen&&"open_dialog_message"} `}>
                
                <p className="dialog_text">{dialogMessage}</p>
                
            </dialog>
        </article>
    )
}
