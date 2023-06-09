//import React from 'react'
// import { useEffect } from 'react';
import './DialogMessage.css'

export default function DialogMessage({children,setOpenDialog,openDialog}) {

    const dialogPop = () => {

            const timer = setTimeout(() => {
                setOpenDialog(false);
            }, 2000);
            
        

        timer();
    }

    return (
        <article>
            <dialog className='dialog_message' open={openDialog}>
                {children}
            </dialog>
        </article>
    )
}
