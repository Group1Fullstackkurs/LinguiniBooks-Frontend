import "./Bookpage.css";
import { BookModel } from "../Typescript/BookModel";
import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import pureBooksState from "../atoms/pureBooksState";
import filteredBooksState from '../atoms/filteredBooksState'
import searchInfoState from "../atoms/searchInfoState";
import Book from "./Book";
import filter from "../Typescript/Filter";
import { FilterType } from "../Typescript/EnumFilterType";

function Bookpage() {
  const [bookList, setBookList] = useState(Array<BookModel>);
  const [infoState, setInfoState] = useRecoilState(searchInfoState);
  const [filteredBooks, setFilteredBooks] = useRecoilState(filteredBooksState);
  const pureBooks = useRecoilValue(pureBooksState);

  useEffect(() => {}, [filteredBooks]);

  return (
    <div className="book-page">
      <div className="book-search-box">
        {filteredBooks
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
