import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function BookButton() {
    const navigate = useNavigate();
    const bookList = []
    const newBooks = []
    const fantasyBooks = []
    const romanBooks = []
    const nonFictionBooks = []
    
    const[books, setBooks] = useState([]);
    useEffect(() => {
        fetch('/books')
        .then(response => response.json())
        .then(data => setBooks(data))
    }, []);

    for (const [i, book] of books.entries()) {
        bookList.push(
        <div totalRatingScore={books?.[i]?.["totalRatingScore"]}
            numberOfRatings={books?.[i]?.["numberOfRatings"]}
            title={books?.[i]?.["title"]}
            author={books?.[i]?.["author"]}
            className="front-book" onClick={()=> navigate("/book/"+books?.[i]?.["bookId"])}>
        <img
        title={books?.[i]?.["title"]}
        src={books?.[i]?.["imageURL"]}
        className="bookImage"/> 
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        </div>)
      }
    
    let sortedBooksRating = Array.from(bookList);
    sortedBooksRating.sort((a,b) =>{
        console.log(a.props.totalRatingScore)
        console.log(typeof a.props.numberOfRatings)
        if(a.props.numberOfRatings === 0){
            console.log("No ratings");
            return 1;
        }
        else if (b.props.numberOfRatings === 0){
            console.log("b first")
            return -1;
        }
        else{
            let aRating = a.props.totalRatingScore/ a.props.numberOfRatings
            let bRating = (b.props.totalRatingScore/ b.props.numberOfRatings)
            return bRating - aRating;
        }
    });

    for (const [i, book] of books.entries()) {
        if (books?.[i]?.["year"] > 2022){
            newBooks.push(
                <div className="front-book" onClick={()=> navigate("/book/"+books?.[i]?.["bookId"])}>
                    <img
                    title={books?.[i]?.["title"]}
                    src={books?.[i]?.["imageURL"]}
                    className="bookImage"/> 
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                </div>)
            }
        if (books?.[i]?.["genre"] === "fantasy" || books?.[i]?.["genre"] === "Fantasy" ){
            fantasyBooks.push(
            <div className="front-book" onClick={()=> navigate("/book/"+books?.[i]?.["bookId"])}>
                <img
                    title={books?.[i]?.["title"]}
                    src={books?.[i]?.["imageURL"]}
                    className="bookImage"/> 
                <h2>{book.title}</h2>
                <p>{book.author}</p>
            </div>)
            }
        if (books?.[i]?.["genre"] === "Roman"){
            romanBooks.push(
            <div className="front-book" onClick={()=> navigate("/book/"+books?.[i]?.["bookId"])}>
            <img
                title={books?.[i]?.["title"]}
                src={books?.[i]?.["imageURL"]}
                className="bookImage"/> 
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            </div>)
        }
        if (books?.[i]?.["genre"] === "Selv-hjelp"){
            nonFictionBooks.push(
                <div className="front-book" onClick={()=> navigate("/book/"+books?.[i]?.["bookId"])}>
                <img
                    title={books?.[i]?.["title"]}
                    src={books?.[i]?.["imageURL"]}
                    className="bookImage"/> 
                <h2>{book.title}</h2>
                <p>{book.author}</p>
                </div>)
        }
        }

    const books2023 = (newBooks.sort(() => 0.5 - Math.random())).slice(0,10);
    const topTenBooks = sortedBooksRating.slice(0,10);
    const sixFeatured = (bookList.sort(() => 0.5 - Math.random())).slice(0,10);  
    const topRomanBooks = romanBooks.slice(0,10);

    return (
        <div className="widthsite">
            <div>  
            </div>
            <div className="booksFrontpage">
                <div>
                    <p className="categoryFrontpage">Topp 10 bøker</p>
                    <hr className="underlineFrontpage"></hr>
                </div>
                <div className="book_grid" >
                    {topTenBooks}
                </div> 
                <div>
                    <p className="categoryFrontpage">Bøker fra 2023</p>
                    <hr className="underlineFrontpage"></hr>
                </div>
                <div className="book_grid">
                    {books2023} 
                </div>
                <div>
                    <p className="categoryFrontpage">Utforsk - et tilfeldig utvalg</p>
                    <hr className="underlineFrontpage"></hr>
                </div>
                <div className="book_grid"> 
                    {sixFeatured}
                </div>
                <div>
                    <p className="categoryFrontpage">Fantasy</p>
                    <hr className="underlineFrontpage"></hr>
                </div>
                <div className="book_grid">
                    {fantasyBooks} 
                </div>
                <div>
                    <p className="categoryFrontpage">Roman</p>
                    <hr className="underlineFrontpage"></hr>
                </div>
                <div className="book_grid">
                    {topRomanBooks}
                </div>
                <div>
                    <p className="categoryFrontpage">Selvutvikling</p>
                    <hr className="underlineFrontpage"></hr>
                </div>
                <div className="book_grid">
                    {nonFictionBooks}
                </div>
            </div>
        </div>
    )
}


export default BookButton;