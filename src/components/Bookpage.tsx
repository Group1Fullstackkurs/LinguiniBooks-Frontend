import { useRecoilState, useRecoilValue } from "recoil";
import pureBooksState from "../atoms/pureBooksState";
import filteredBooksState from "../atoms/filteredBooksState";
import Book from "./Book";
import "./Bookpage.css";

function Bookpage() {
  const [filteredBooks, setFilteredBooks] = useRecoilState(filteredBooksState);
  const pureBooks = useRecoilValue(pureBooksState);

  return (
    <div className="book-page">
      <div className="book-search-box">
        {filteredBooks.map((book) => {
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
