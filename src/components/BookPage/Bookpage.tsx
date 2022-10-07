import { useRecoilValue } from "recoil";
import filteredBooksState from "../../atoms/filteredBooksState";
import searchInfoState from "../../atoms/searchInfoState";
import Book from "./Book";
import "./Bookpage.css";

// displays the books that are filtered by the searchbar
function Bookpage() {
  const filteredBooks = useRecoilValue(filteredBooksState);
  const infoState = useRecoilValue(searchInfoState);

  return (
    <div className="book-page">
      <h2>{infoState.category} books</h2>
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
