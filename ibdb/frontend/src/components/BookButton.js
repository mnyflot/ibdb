import React from "react";
import { useNavigate } from "react-router-dom";

export function BookButton() {
    
    const navigate = useNavigate();

    return (
        
        <div className="book_grid"> 
            
            <div className="featured_today">
                <div className="featured_today_header">
                    Featured today
                </div>
                <img 
                    title= "Why we sleep" 
                    src="https://www.norli.no/media/catalog/product/9/7/9788232803125_1.jpg?auto=webp&format=pjpg&width=1920&height=2400&fit=cover" 
                    className="book" 
                    onClick={()=> navigate("/book/1")}
                />
                <img 
                    title= "Naiv Super" 
                    src="https://dj4fsg3e1je59.cloudfront.net/9788202593209/img/0"
                    className="book" 
                    onClick={()=> navigate("/book/2")}/>
                <img 
                    title= "The subtle art of not giving a f*ck" 
                    src="https://dj4fsg3e1je59.cloudfront.net/9780062457714/img/0"
                    className="book" 
                    onClick={()=> navigate("/book/3")}/>
                <img 
                    title= "Harry Potter and the Philosophers Stone" 
                    src="https://dj4fsg3e1je59.cloudfront.net/9781408855652/img/0"
                    className="book" 
                    onClick={()=> navigate("/book/4")}/>
            </div>
        </div>
    )
}

export default BookButton;