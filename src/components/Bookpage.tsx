import "./Bookpage.css";
import { BookModel } from "../Typescript/BookModel";
import { useRecoilState, useRecoilValue } from "recoil";
import searchInfoState from "../atoms/searchInfoState";
import fetchAllBooks from "../Typescript/fetch";
import { useState, useEffect } from "react";
import Book from "./Book";

function Bookpage() {
  const [bookList, setBookList] = useState(Array<BookModel>);
  const [infoState, setInfoState] = useRecoilState(searchInfoState);

  useEffect(() => {
    fetchAllBooks().then((books) => setBookList(books));
    console.log(bookList);
  }, []);

  return (
    <div className="book-page">
      <div className="book-search-box">
        {bookList
          .filter((book) => {
            if (infoState.filter.title == "") {
              return book;
            } else if (
              book.title.toLowerCase().includes(infoState.filter.title.toLowerCase())
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
