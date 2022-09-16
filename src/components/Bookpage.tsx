import "./Bookpage.css";
import { BookModel } from "../Typescript/BookModel";
import { useRecoilValue } from "recoil";
import searchInfoState from "../atoms/searchInfoState";
import fetchAllBooks from "../Typescript/fetch";
import { useState, useEffect } from "react";
import Book from "./Book";

function Bookpage() {
  const [bookList, setBookList] = useState(Array<BookModel>);
  const infoState = useRecoilValue(searchInfoState);

  useEffect(() => {
    fetchAllBooks().then((books) => setBookList(books));
  }, []);

  return (
    <div className="book-search-box">
      {bookList
        .filter((book) => {
          if (infoState.filter == "") {
            return book;
          } else if (
            book.title.toLowerCase().includes(infoState.filter.toLowerCase())
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
  );
}
export default Bookpage;
