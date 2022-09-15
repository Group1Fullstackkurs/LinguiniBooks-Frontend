import "./Landingpage.css";
import { useState, useEffect } from "react";
import { BookModel } from "../Typescript/BookModel";
import fetchAllBooks from "../Typescript/fetch";
import Book from "./Book";

function Landingpage() {
  const [bookList, setBookList] = useState(Array<BookModel>);

  useEffect(() => {
    fetchAllBooks().then((books) => setBookList(books));
  }, []);

  return (
    <div className="LandingPage">
      <h2>Populära böcker i nytt skick</h2>
      <div className="bookbox">
        {bookList
          .sort((a, b) => b.publicationYear - a.publicationYear)
          .filter((book) => {
            if (book.new == true) {
              return book;
            }
          })
          .map((book) => {
            return (
              <div key={book.id} className="book-info">
                <Book {...book} />
              </div>
            );
          })
          .slice(1, 6)}
      </div>
      <h2>Populära böcker i begagnat skick</h2>
      <div className="bookbox">
        {bookList
          .sort((a, b) => b.publicationYear - a.publicationYear)
          .filter((book) => {
            if (book.new == false) {
              return book;
            }
          })
          .map((book) => {
            return (
              <div key={book.id} className="book-info">
                <Book {...book} />
              </div>
            );
          })
          .slice(1, 6)}
      </div>
      <h2>Populära böcker i nytt eller begagnat skick</h2>
      <div className="bookbox">
        {bookList
          .sort(() => Math.random() - 0.5)
          .map((book) => {
            return (
              <div key={book.id} className="book-info">
                <Book {...book} />
              </div>
            );
          })
          .slice(1, 6)}
      </div>
    </div>
  );
}
export default Landingpage;
