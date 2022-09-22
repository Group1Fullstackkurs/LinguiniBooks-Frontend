import "./Bookpage.css";
import { BookModel } from "../Typescript/BookModel";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import booksState from '../atoms/booksState'
import searchInfoState from "../atoms/searchInfoState";
import Book from "./Book";

function Bookpage() {
  const [bookList, setBookList] = useState(Array<BookModel>);
  const [infoState, setInfoState] = useRecoilState(searchInfoState);
  const [books, setBooks] = useRecoilState(booksState);

  useEffect(() => {
    setBookList(bookList => bookList=[...books]);
  }, [books]);

  return (
    <div className="book-page">
      <div className="book-search-box">
        {bookList
          .filter((book) => {
            if (infoState.title == "") {
              return book;
            } else if (
              book.title.toLowerCase().includes(infoState.title.toLowerCase())
            ) {
              return book;
            }
          })
          .map((book) => {
            return (
              <div key={book.id} className="book-search">
                <Book {...book} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Bookpage;
