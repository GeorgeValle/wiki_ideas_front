//import React from 'react'
import axios from 'axios'

function UseEdit(result) {

    axios.put(`https://wiki-ideas-back.fly.dev/topics/${result._id}`, {
        title: result.title,
        content: result.content
    })
        // .then(function (response) {
        //     console.log(response);
        // })
        .then((response)=>{
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        });
    //   return (
    //     <div>UseEdit</div>
    //   )
}

export default UseEdit