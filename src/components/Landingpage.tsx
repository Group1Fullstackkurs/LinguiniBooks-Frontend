import { useState, useEffect } from 'react'
import './Landingpage.css'
import Book from './Book'
import fetchAllBooks from '../Typescript/fetch'
import { BookModel } from '../Typescript/BookModel'
import { plainToInstance } from "class-transformer";
import axios from 'axios'

function Landingpage() {
    const [bookList, setBookList] = useState([])
    
    useEffect(() =>{
            fetchAllBooks().then(books =>
            console.log(books[1].title)
            
        )
    }, [])
    
    //const book2: BookModel = new BookModel()
    
    
    return (
        <div className="LandingPage">
            
            <div className="bookbox">
            
            {/* {books.map(book => book.title)} */}
            </div>
        </div>
    )
}
export default Landingpage