import "./Book.css";
import { BookModel } from "../Typescript/BookModel";

function Book(book: BookModel) {
  return (
    <div className="book-container">
      <div className="book">
        {(book.new) ? <div className="book-new-icon">
          New
        </div> : <div className="book-new-icon">
          Used
        </div>}
        <div className="book-title">
          <p>{book.title}</p>
        </div>
        <div className="book-author">
          <p>{book.firstName} {book.lastName}</p>
        </div>
      </div>
      <div className="book-sale-info">
        <p>{book.price}</p>
      </div>
      <a href="http://google.com" target="_blank">
        <div className="book-cart-btn">
          Add to cart - ska länka till cart
        </div>
      </a>
        {/* <p>Publication Year: {book.publicationYear}</p>
        <p>Category: {book.category}</p>
        <p>Condition: {book.new ? "New" : "Used"}</p>
        <p>Seller: {book.seller}</p> */}
    </div>
  );
}
export default Book;
