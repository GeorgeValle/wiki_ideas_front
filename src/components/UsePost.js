// import React from 'react'
import axios from 'axios';

export default function UsePost(inputData) {
    axios.post("https://wiki-ideas-back.fly.dev/topics/", inputData)
    .then((response)=>{
        console.log(response)
    })
}
