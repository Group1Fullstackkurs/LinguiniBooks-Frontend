import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import checkboxState from "../atoms/checkboxState";
import pureBooksState from "../atoms/pureBooksState";
import searchInfoState from "../atoms/searchInfoState";
import { BookModel } from "../Typescript/BookModel";
import Bookpage from "./BookPage/Bookpage";
import Book from "./BookPage/Book";
import "./Landingpage.css";

// displays three lines of latest published books: new, used, random
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
    <h2>Latest books in new condition</h2>
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
            <div key={book.id} >
              <Book {...book} />
            </div>
          );
        })
        .slice(0, 7)}
    </div>
    <h2>Latest books in used condition</h2>
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
            <div key={book.id} >
              <Book {...book} />
            </div>
          );
        })
        .slice(0, 7)}
    </div>
    <h2>New and used books</h2>
    <div className="bookbox">
      {bookList
        .sort(() => Math.random() - 0.5)
        .map((book) => {
          return (
            <div key={book.id} >
              <Book {...book} />
            </div>
          );
        })
        .slice(0, 7)}
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
