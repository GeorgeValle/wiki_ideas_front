//import React from 'react'
// import { useEffect } from 'react';
import './DialogMessage.css'

export default function DialogMessage({children,setOpenDialog,isOpen}) {

    const dialogPop = () => {

            const timer = setTimeout(() => {
                setOpenDialog(false);
            }, 2000);
            
        

        timer();
    }
    // {isOpen? && open}
    return (
        <article >
            <dialog className='dialog_message' >
                <header className="dialog-header">
                </header>
                <main className="dialog-main">
                {children}
                </main>
                <footer>

                </footer>
                
            </dialog>
        </article>
    )
}
