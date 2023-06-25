import {useState, useEffect} from "react";
import axios from "axios";
import SearchBar from './SearchBar.jsx';

const Article = () => {
    const [Topics, setTopic] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const getArticles = async () => {
        const response = await axios.get(`https://wiki-ideas-back.fly.dev/topics/search/${searchTerm}`);
        setTopic(response.data);
    };

    useEffect(() => {
        getArticles();
    }, [searchTerm]);

    // const filteredItems = items.filter((item) => {
    //     return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    // });

    return (
        <div>
            <SearchBar
                value={searchTerm}
                onChange={setSearchTerm}
            />
            <ul>
                {Topics.map((topic) => (
                    <li key={topic.id}>{topic.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Article;