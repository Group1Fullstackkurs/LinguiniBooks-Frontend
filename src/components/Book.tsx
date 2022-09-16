import "./Book.css";
import { BookModel } from "../Typescript/BookModel";

function Book(book: BookModel) {
  return (
    <div className="book">
      <div className="book-title">
        <p>{book.title}</p>
      </div>
      <div className="book-author">
        <p>{book.firstName} {book.lastName}</p>
      </div>
      
      {/* <p>Publication Year: {book.publicationYear}</p>
      <p>Category: {book.category}</p>
      <p>Condition: {book.new ? "New" : "Used"}</p>
      <p>Seller: {book.seller}</p> */}
    </div>
  );
}
export default Book;
