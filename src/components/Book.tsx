import './Book.css'
import { BookModel } from '../Typescript/BookModel'
import Landingpage from './Landingpage'

function Book(){
	

    
	return(
		<div className="book">
			{/* {bookList.map(book => 
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
                }		 */}
		
		</div>
	)
}
export default Book