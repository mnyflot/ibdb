import React, { useState, useEffect } from 'react';
import { useParams, Navigate, useNavigate, useLocation } from 'react-router-dom';


export function AddToWishlist () {
    const { bookId } = useParams();
    const [buttonStr, setButtonStr] = useState('')
    const [username, setUsername] = useState('')
    const navigate = useNavigate()
    const location = useLocation();


    // const handleClick = event => {
    //     event.preventDefault();
    //     navigate(`${location.pathname}`);
    // };


    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
          setUsername(loggedInUser);
          Promise.all([
            fetch(`/get-wishlist?username=${loggedInUser}`).then(response => response.json())
          ])
          .then(([wishlistData]) => {
            const bookIdsList = wishlistData.split(";");
            if (bookIdsList.includes(bookId)) {
              setButtonStr(
                <div>
                  <div>
                    <form onSubmit={handleSubmit}>
                      <div>
                        <button className="buttonDefault" id="formButton" type="submit">
                          Fjern bok fra ønskeliste
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              );
            } else {
              setButtonStr(
                <div>
                  <div>
                    <form onSubmit={handleSubmit}>
                      <div>
                        <button className="buttonDefault" id="formButton" type="submit">
                          Legg til bok i ønskeliste
                        </button>
                      </div>
                    </form>
                </div>
                </div>
        )};
      })
    }}, [username])
    

    function handleSubmit(event) {
        event.preventDefault();
        Promise.all([
            fetch(`/get-wishlist?username=${username}`).then(response => response.json())])
          .then(([wishlistData2]) => {
        var bookIdsList = wishlistData2.split(";");
        if (username != null) {
            if (!bookIdsList.includes(bookId)) {
                bookIdsList.push(bookId)
            } else {
                var newBookIDList = []
                for (const ID in bookIdsList) {
                    if (bookIdsList[ID] != bookId) {
                        newBookIDList.push(bookIdsList[ID])
                    }
                }
                bookIdsList = newBookIDList
            }
            const newWishlist = bookIdsList.join(";")
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                username: username,
                wishlist: newWishlist
                }),
            };
            fetch("/add-to-wishlist", requestOptions)
                .then((response) => response.json());
        }
        })
        alert("Suksess!");
    }


            
    return (
        <div className = "SaveBookForm">
            {buttonStr}
        </div>
    );
}