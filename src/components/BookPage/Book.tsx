import { useState } from "react";
import { BookModel } from "../../Typescript/BookModel";
import "../CSS/Book.css";

// how each book will be displayed
function Book(book: BookModel) {
  const [isShowInfo, setIsShowInfo] = useState(false);
 
  const ShowInfo = () =>{
    return isShowInfo ? (
      <div className="book-info" onClick={(event: React.MouseEvent<HTMLElement>) => handleClick()} >
        <h2>{book.title}</h2>
        <h3>by {book.firstName} {book.lastName}</h3>
        <p>Publication Year: {book.publicationYear}</p>
        <p>Category: {book.category}</p>
        <p>Condition: {book.new ? "New" : "Used"}</p>
        <p>Seller: {book.seller}</p>
      </div>
    ) : null; 
  }

  const handleClick = () => {
    setIsShowInfo(!isShowInfo);
  }


  return (
    <div className="book-container">
      < ShowInfo />
      <div className="book" onClick={(event: React.MouseEvent<HTMLElement>) => handleClick()}>
        {(book.new) ? <div className="book-new-icon"> New </div> : <div className="book-new-icon"> Used </div>}
        <div className="book-title">
          <p>{book.title}</p>
        </div>
        <div className="book-author">
          <p>{book.firstName} {book.lastName}</p>
        </div>
      </div>
      <div className="book-sale-info">
        <p>{book.price} ({book.publicationYear})</p>
        {/* <a href="" target="_blank"> */}
          <div className="book-cart-btn"
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              alert("Add to cart simulation")
              }}
              >
            Add to cart
          </div>
        {/* </a> */}
      </div>
      
        
    </div>
  );
}
export default Book;
