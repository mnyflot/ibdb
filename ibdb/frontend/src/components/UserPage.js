import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from "./Header.js";

export default function User() {
  const [username, setUser] = useState('');

  useEffect(() => {
    // Fetch user data based on the username parameter
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = loggedInUser;
      setUser(foundUser);
    }
  }, []);

    return (
        <div>
            <div>                    
                <Header/>
            </div>
            <div className="headline">
                <h1>Hi {username}! </h1>
            </div>
            </div>
    ) 
}


