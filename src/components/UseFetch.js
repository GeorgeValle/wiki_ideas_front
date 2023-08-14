import { useState, useEffect} from "react";
import axios from "axios";

export  function UseFetch(searchTerm){
    const [data, setData] = useState(null);
    const [message, setMessage]= useState(""); 
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        if(searchTerm){
            setLoading(true);
            axios.get(`https://wiki-ideas-back.fly.dev/topics/search/${searchTerm}`)
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

