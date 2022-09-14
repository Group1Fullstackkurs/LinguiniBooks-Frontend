import { useState, useEffect } from 'react'
import './Landingpage.css'
import Book from './Book'
import fetchAllBooks from '../Typescript/fetch'
import { BookModel } from '../Typescript/BookModel'
import { plainToInstance } from "class-transformer";
import axios from 'axios'

function Landingpage() {
    const [bookList, setBookList] = useState(Array<BookModel>)
    
    useEffect(() =>{
        fetchAllBooks().then(books =>setBookList(books)
        )
    }, [])
        
    
    return (
      <div className="LandingPage">
        <h2>Populära böcker i nytt skick</h2>
        <div className="bookbox">
          {bookList
            .filter((book) => {
              if (book.new == true) {
                return book;
              }
            })
            .map((book) => {
              return (
                <div className="book-info" key={book.id}>
                  <p>Title: {book.title}</p>
                  <p>
                    Author: {book.firstName} {book.lastName}
                  </p>
                  <p>Publication Year: {book.publicationYear}</p>
                  <p>Category: {book.category}</p>
                  <p>Condition: {book.new ? "New" : "Used"}</p>
                  <p>Seller: {book.seller}</p>
                </div>
              );
            })
            .slice(1, 6)}
        </div>
        <h2>Populära böcker i begagnat skick</h2>
        <div className="bookbox">
          {bookList
            .filter((book) => {
              if (book.new == false) {
                return book;
              }
            })
            .map((book) => {
              return (
                <div className="book-info" key={book.id}>
                  <p>Title: {book.title}</p>
                  <p>
                    Author: {book.firstName} {book.lastName}
                  </p>
                  <p>Publication Year: {book.publicationYear}</p>
                  <p>Category: {book.category}</p>
                  <p>Condition: {book.new ? "New" : "Used"}</p>
                  <p>Seller: {book.seller}</p>
                </div>
              );
            })
            .slice(1, 6)}
        </div>
        <h2>Populära böcker i nytt eller begagnat skick</h2>
        <div className="bookbox">
          {bookList
            .map((book) => {
              return (
                <div className="book-info" key={book.id}>
                  <p>Title: {book.title}</p>
                  <p>
                    Author: {book.firstName} {book.lastName}
                  </p>
                  <p>Publication Year: {book.publicationYear}</p>
                  <p>Category: {book.category}</p>
                  <p>Condition: {book.new ? "New" : "Used"}</p>
                  <p>Seller: {book.seller}</p>
                </div>
              );
            })
            .slice(1, 6)}
        </div>
      </div>
    );
}
export default Landingpage