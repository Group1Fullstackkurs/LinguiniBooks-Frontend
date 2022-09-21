import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import searchInfoState from "../atoms/searchInfoState";
import booksState from '../atoms/booksState'
import { useRecoilState } from "recoil";
import fetchAllBooks from "../Typescript/fetch";
import { useState, useEffect } from "react";
import { BookModel } from "../Typescript/BookModel";
import { IBookModel } from "../Typescript/IBookModel";

function Header() {
  const [infoState, setInfoState] = useRecoilState(searchInfoState);
  const [books, setBooks] = useRecoilState(booksState);

  useEffect(() => {
    fetchAllBooks().then((books) => console.log(books));
    fetchAllBooks().then((books) => setBooks(books));
    //fetchAllBooks().then((booking) => setBooks(booking));
  }, []);

  return (
    <div className="homepage-header">
      <h1>Linguini Books</h1>
      <div className="searchbar">
        <select
          name="menu"
          id="menu"
          // onChange={(event) =>
          //   setInfoState({
          //     books: infoState.books,
          //     filter: infoState.filter,
          //   })
          // }
        >
          <option value="Category">Category</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Classics">Classics</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Thriller">Thriller</option>
        </select>
        <input
          type="text"
          placeholder="Search for a book, e.g Parry Hotter"
          onChange={(event) =>
            setInfoState({
              filter: {title: event.target.value, author:"",language:"", publicationYear:"", price:""},
            })
          }
        />
      </div>
      <div className="login-box">
        <FontAwesomeIcon icon={faUser} />
        <p>Sign in</p>
      </div>
      <div className="cart-box">
        <FontAwesomeIcon icon={faCartShopping} />
        <p>Cart</p>
      </div>
    </div>
  );
}
export default Header;
