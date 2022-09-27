import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import checkboxState from "../atoms/checkboxState";
import pureBooksState from "../atoms/pureBooksState";
import searchInfoState from "../atoms/searchInfoState";
import { BookModel } from "../Typescript/BookModel";
import Bookpage from "./Bookpage";
import Book from "./Book";
import "./Landingpage.css";


function Landingpage() {
  const [bookList, setBookList] = useState(Array<BookModel>);
  const infoState = useRecoilValue(searchInfoState);
  const pureBooks = useRecoilValue(pureBooksState);
  const isChecked= useRecoilValue(checkboxState)
  
  useEffect(() => {
    setBookList(bookList => bookList=[...pureBooks]);
  }, [pureBooks]);
 
  const ShowThreeLinesOfBooks = () =>{
    return(<div className="landing-page">
    <h2>Senaste böcker i nytt skick</h2>
    <div className="bookbox">
    {bookList
        .filter((book) => {
          if (book.new == true) {
            return book;
          }
        })
        .sort((a, b) => b.publicationYear - a.publicationYear)
        .map((book) => {
          return (
            <div key={book.id} className="book-info">
              <Book {...book} />
            </div>
          );
        })
        .slice(0, 5)}
    </div>
    <h2>Senaste böcker i begagnat skick</h2>
    <div className="bookbox">
      {bookList
        .filter((book) => {
          if (book.new == false) {
            return book;
          }
        })
        .sort((a, b) => b.publicationYear - a.publicationYear)
        .map((book) => {
          return (
            <div key={book.id} className="book-info">
              <Book {...book} />
            </div>
          );
        })
        .slice(0, 5)}
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
        .slice(0, 5)}
    </div>
  </div>)
  }

  return (
    <section>
    {infoState.searchKey.length > 0 || isChecked.az === true || isChecked.author === true || isChecked.year === true ?  <Bookpage/> : <ShowThreeLinesOfBooks/>}
    </section>
  );
}
export default Landingpage;
