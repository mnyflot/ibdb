import React from 'react';

export default function Review({ review }) {
    const username = review.username;
    const rating = review.rating;
    const comment = review.comment;
    const bookId = review.bookId;
    let editButton = null;
    let deleteButton = null;

    if (username == localStorage.getItem('user')) {
      editButton = <button className='buttonDefault' onClick={() => {window.location.href='/review/' + bookId}}>Endre vurdering</button>
    }
    if (localStorage.getItem("admin") !== null){
      deleteButton = <button className='buttonDefault' onClick={() => {
        fetch(`/delete-review/${username}+${bookId}`)
        .then((response) => response.json())
        .then(window.location.href='/review/' + bookId)
        .catch(error => console.error(error));
      }}>Slett vurdering</button>
    }

    return (
      <div className="review">
        <p>
          <b>{username}</b> ({rating}/5): {comment}
          {editButton}
          {deleteButton}
        </p>
      </div>
    );
  }