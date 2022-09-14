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
    
    //const book2: BookModel = new BookModel()
    
    
    return (
        <div className="LandingPage">
            
            <div className="bookbox">
                {bookList.map(book => 
                    {return(
                        <div className='book-info' key={book.id}>
                            <p>Title: {book.title}</p>
                            <p>Author: {book.firstName} {book.lastName}</p>
                            <p>Publication Year: {book.publicationYear}</p>
                            <p>Category: {book.category}</p>
                            <p>Condition: {(book.new) ? 'New' : 'Used'}</p>
                            <p>Seller: {book.seller}</p>
                        </div>
                    )})
                }
            </div>
        </div>
    )
}
export default Landingpage