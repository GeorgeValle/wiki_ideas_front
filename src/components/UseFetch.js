import { useState, useEffect} from "react";
import axios from "axios";

export  function UseFetch(searchTerm){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        axios.get(`https://wiki-ideas-back.fly.dev/topics/search/${searchTerm}`)
        .then((response)=>response.json())
        .then((datum)=>setData(datum))
        .finally(()=>setLoading(false));

        
    },[]);
    
    return {data, loading}
}

