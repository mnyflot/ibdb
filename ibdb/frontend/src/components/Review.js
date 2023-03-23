import React from 'react';

export default function Review({ review }) {
    const username = review.username;
    const rating = review.rating;
    const comment = review.comment;
    const bookId = review.bookId;
    let editButton = null;
    // let deleteButton = null;

    if (username == sessionStorage.getItem('user')) {
      editButton = <button className='buttonDefault' onClick={() => {window.location.href='/review/' + bookId}}>Endre vurdering</button>
    }

    /*
    Knapp for å slette vurdering

    if (sessionStorage.getItem("admin") !== null){
      deleteButton = <button className='buttonDefault' onClick={() => {
        fetch(`/delete-review/${username}+${bookId}`)
        .then((response) => response.json())
        .catch(error => console.error(error));
      }}>Slett vurdering</button>
    }
    */

    return (
      <div className="review">
        <p>
          <b>{username}</b> ({rating}/5): {comment}
          {editButton}
        </p>
      </div>
    );
  }