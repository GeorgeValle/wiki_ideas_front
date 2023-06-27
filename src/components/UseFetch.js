import { useState, useEffect} from "react";
import axios from "axios";

export  function UseFetch(searchTerm){
    const [data, setData] = useState(null);
    const [message, setMessage]= useState(""); 
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        if(searchTerm){
            setLoading(true);
            // let baseURL="https://wiki-ideas-back.fly.dev/"
            // let url = "topics/search/"
            // let params=searchTerm
            axios.get(`https://wiki-ideas-back.fly.dev/topics/search/${searchTerm}`)
            // axios.get(baseURL,url,searchTerm)
            // .then((response)=>response.json())
            .then(function (response) {
                setData(response.data),setMessage(response.message)
            })
            .catch ((error) => {
            console.log (error)})
            .finally(()=>setLoading(false));
        }
        
    },[searchTerm]);
    console.log('have datum',data)
    return {data, loading, message}
}

