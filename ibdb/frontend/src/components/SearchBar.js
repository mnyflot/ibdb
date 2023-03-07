import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


export default function SearchBar() {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("q") || "";


    const [search, setSearch] = useState(query);
    
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        if (search.trim()) {
            navigate(`/search_results?quer=${encodeURIComponent(search.trim())}`);
        } else {
            navigate(`/search_results`);
        }
    };

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    return (
        <div className='searchBar'>
            <form onSubmit={handleSubmit}>
                <label>
                    <input 
                        className='searchField' 
                        type="search" 
                        value={search} 
                        name="q" 
                        onChange={handleChange} 
                        placeholder="Søk" />
                </label>
                <input 
                    className='buttonDefault' 
                    type="submit" 
                    value="Search"
                    onChange={(e) => setSearch(e.target.value)} />
            </form>
        </div>
    );
}
