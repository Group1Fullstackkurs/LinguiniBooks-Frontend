import "./Landingpage.css";
import { BookModel } from "../Typescript/BookModel";
import { useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import booksState from '../atoms/booksState'
import searchInfoState from "../atoms/searchInfoState";
import Bookpage from "./Bookpage";
import Book from "./Book";


function Landingpage() {
  const [bookList, setBookList] = useState(Array<BookModel>);
  const infoState = useRecoilValue(searchInfoState);
  const [books, setBooks] = useRecoilState(booksState);

  useEffect(() => {
    setBookList(bookList => bookList=[...books]);
  }, [books]);

  return (
    <section>
    ({infoState.title.length > 0 ? <Bookpage/> : <div className="landing-page">
      <h2>Senaste böcker i nytt skick</h2>
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
      <h2>Senaste böcker i begagnat skick</h2>
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
      <h2>Senaste böcker i nytt eller begagnat skick</h2>
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
    </div>})
    </section>
  );
}
export default Landingpage;
