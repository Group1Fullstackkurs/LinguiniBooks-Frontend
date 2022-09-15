import './Book.css'
import { BookModel } from '../Typescript/BookModel'

function Book(book:BookModel){
	return(
		<div className="book">
            <p>Title: {book.title}</p>
            <p>Author: {book.firstName} {book.lastName}</p>
            <p>Publication Year: {book.publicationYear}</p>
            <p>Category: {book.category}</p>
            <p>Condition: {(book.new) ? 'New' : 'Used'}</p>
            <p>Seller: {book.seller}</p>
        </div>
	)
}
export default Book