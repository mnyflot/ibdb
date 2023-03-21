import React from 'react';

export default function Review({ review }) {
    const username = review.username;
    const rating = review.rating;
    const comment = review.comment;
    const bookId = review.bookId;
    let editButton = null;

    if (username == localStorage.getItem('user')) {
      editButton = <button className='buttonDefault' onClick={() => {window.location.href='/review/' + bookId}}>Endre vurdering</button>
    }

    return (
      <div className="review">
        <p>
          <b>{username}</b> ({rating}/5): {comment}
          {editButton}
        </p>
      </div>
    );
  }