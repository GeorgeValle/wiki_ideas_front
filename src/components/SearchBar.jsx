import { useState } from "react";
import './SearchBar.css';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="bar" >
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                className="search-bar"
                placeholder="Search an article..."
            />
        </div>
    );
};

export default SearchBar;