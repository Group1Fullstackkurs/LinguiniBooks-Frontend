import "./Landingpage.css";
import { BookModel } from "../Typescript/BookModel";
import { useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import filteredBooksState from '../atoms/filteredBooksState'
import pureBookState from "../atoms/pureBookState";
import searchInfoState from "../atoms/searchInfoState";
import Bookpage from "./Bookpage";
import Book from "./Book";
import filter from "../Typescript/Filter";
import { FilterType } from "../Typescript/EnumFilterType";


function Landingpage() {
  const [bookList, setBookList] = useState(Array<BookModel>);
  const infoState = useRecoilValue(searchInfoState);
  const [filteredBooks, setBooks] = useRecoilState(filteredBooksState);
  const [purebooks, setPureBooks] = useRecoilState(pureBookState);
  
  useEffect(() => {
    const updateFilter = async () => {
      await filter(FilterType.year)
    }
    updateFilter();
    setBookList(bookList => bookList=[...filteredBooks]);
  }, [purebooks]);
 
  const getFiveNewBooks = () => {
    filteredBooks.filter((book) => book.new === true).map((book) => {
      return (<div key={book.id} className="book-info">
      <Book {...book} />
    </div>)})
    .slice(0, 5)  
  }

  return (
    <section>
    ({infoState.title.length > 0 ? <Bookpage/> : <div className="landing-page">
      <h2>Senaste böcker i nytt skick</h2>
      <div className="bookbox">
      {filteredBooks
          //.sort((a, b) => b.publicationYear - a.publicationYear)
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
