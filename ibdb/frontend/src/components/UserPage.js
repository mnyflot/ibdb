import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdminPage from './AdminPage.js';
import Header from "./Header.js";
import NewBookPage from "./NewBookPage"
import Wishlist from "./Wishlist.js"

export default function User() {
  const [username, setUser] = useState('');

  useEffect(() => {
    // Fetch user data based on the username parameter
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = loggedInUser;
      setUser(foundUser);
    }
    
  }, []);

    function handleLogout(event){
        event.preventDefault();
        const userExists = sessionStorage.getItem('user');
        console.log(userExists)
        if (userExists){
            sessionStorage.clear();
        }
        window.location.href="../"
    }
    
    let isAdmin = false;

    if (sessionStorage.getItem("admin") !== null){
        isAdmin = true;
    }

    console.log(isAdmin)

    return (
        <div>
            <div>                    
                <Header/>
            </div>
            <div className='logoutButton'>
                <button className='buttonDefault' onClick={handleLogout}>Logg ut</button>
            </div>
            <div className="headline">
                <h1>Hei, {username}</h1>
                <p>Her kan du se dine lagrede bøker, og informasjon om kontoen din.</p>
            </div>
           
            
            <div className='myInformationBox'>
                <b>Min informasjon</b>
                <p>Brukernavn: {sessionStorage.getItem("user")}</p>
                <p>Epost: {sessionStorage.getItem("email")}</p>
            </div>
            
            <div>
                <Wishlist />
            </div>
            <div>
                {(isAdmin) ? <AdminPage></AdminPage> : null }        
            </div>
            <div>

            </div>
            </div>
    ) 
}


