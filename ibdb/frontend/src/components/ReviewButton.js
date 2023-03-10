import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export function ReviewButton() {
    const { bookId } = useParams();
    const navigate = useNavigate();

    return (
        <button className="buttonDefault" onClick={() => {if (localStorage.getItem('user') != null) {navigate("/review/"+bookId)} else {alert('Vennligst logg inn for å legge igjen anmeldelse!')}}}>Vurder denne boken</button>
    )
}

export default ReviewButton;