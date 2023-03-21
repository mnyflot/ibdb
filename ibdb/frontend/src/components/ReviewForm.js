import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';


export default function ReviewForm () {
    const navigate = useNavigate();
    const username = localStorage.getItem('user');
    const { bookId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [comment, setComment] = useState("");
    const [book, setBook] = useState({
        title: '',
        genre: '',
        description: '',
        author: '',
        year: '',
        totalRatingScore: 0,
        numberOfRatings: 0, 
      });

    useEffect(() => {
    fetch(`/get-book?bookId=${bookId}`)
        .then(response => response.json())
        .then(data => setBook(data))
        .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        fetch(`/reviews`)
        .then(response => response.json())
        .then(data => setReviews(data))
        .catch(error => console.error(error));
    }, []);
      
    async function handleSubmit(event) {
        event.preventDefault();
        let newTotalRating = 0;
        let newNumberOfRatings = 0;

        let reviewList = reviews
        .filter(review => {
              if (bookId == review.bookId && localStorage.getItem('user') == review.username) {
                console.log("Anmeldelsen finnes")
                return true;
              }
            console.log("Anmeldelsen finnes ikke")
            return false;
          });

          if (reviewList.length > 0) {
            newTotalRating = newTotalRating - reviewList[0].rating + rating;
            newNumberOfRatings = book.numberOfRatings;
          }
          else {
            newTotalRating = book.totalRatingScore + rating;
            newNumberOfRatings = book.numberOfRatings + 1;
          }

          /*
        const deleteOptions = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: localStorage.getItem('user'),
                bookId: bookId,
            })
        }
        
        if (reviewList.length > 0) {
            fetch(`/delete-review/${username}+${bookId}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            })
            .then(response => response.json());
        }
        */

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                bookId: bookId,
                rating: rating,
                comment: comment,
            }),
        };
    
        fetch("/new-review", requestOptions)
                .then((response) => response.json());

        /*
        fetch(`/get-book?bookId=${bookId}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
                },
            body: JSON.stringify(
                {
                "totalRatingScore": newTotalRating,
                "numberOfRatings": newNumberOfRatings
                }
            )
            });
        */
        
            const bookOptions = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  totalRatingScore: newTotalRating,
                  numberOfRatings: newNumberOfRatings,
                }),
              };

              fetch(`/get-book?bookId=${bookId}`, bookOptions)
                .then((response) => response.json())
                .then((data) => navigate("/book/" + data.bookId));

        }
    
    

    return (
        <div className = "reviewForm">
            <div >
                <form onSubmit={handleSubmit}>
                    <p> <b>Gi boken en vurdering:</b></p>
                <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= (hover || rating) ? "on" : "off"}
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                        >
                        <span className="star">&#9733;</span>
                        </button>
                    );
                })}
            </div>
                <p> <b>Legg igjen en kommentar:</b></p>
                    <textarea
                        className="commentField" name="comment"  value={comment}  onChange={(e) => setComment(e.target.value)} rows={10} cols={20} placeholder="" required>
                    </textarea>
                    <div> 
                        <button className="buttonDefault" id="formButton" type="submit">Send inn vurdering</button>
                    </div>
                </form>
            </div>
        </div>  
    );
}