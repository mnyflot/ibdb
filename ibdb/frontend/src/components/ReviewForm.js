import React, { useState } from "react";
import { useParams } from 'react-router-dom';


export default function ReviewForm () {
    const { bookId } = useParams();
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [comment, setComment] = useState("");
      
    async function handleSubmit(event) {
        event.preventDefault();
        console.log(localStorage.getItem("user"));
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: localStorage.getItem("user"),
                bookId: bookId,
                rating: rating,
                comment: comment,
            }),
        };
        fetch("/new-review", requestOptions)
                .then((response) => response.json())
                .then((data) => window.location.href="/book/" + data.bookId);
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