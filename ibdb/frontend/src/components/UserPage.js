import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from "./Header.js";

export default function User() {
  const { username } = useParams();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    // Fetch user data based on the username parameter
    fetch(`/get-user?username=${username}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error(error));
  }, [username]);

    return (
        <div>
            <div>                    
                <Header/>
            </div>
            <div className="headline">
                <h1>Hi {user.username}! </h1>
            </div>
            </div>
    ) 
}


