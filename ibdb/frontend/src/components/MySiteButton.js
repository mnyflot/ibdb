import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


export default function MySiteButton() {
    const username = localStorage.getItem("user");
    const navigate = useNavigate();

    const handleClick = event => {
        event.preventDefault();
        navigate(`/user/${username}`);
    };

    return(
            <div>
                <button onClick={handleClick} className="buttonDefault" type="button">Min side</button>
            </div>

    )
}
