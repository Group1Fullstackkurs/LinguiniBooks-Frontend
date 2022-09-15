import './Header.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping} from '@fortawesome/free-solid-svg-icons'

function Header() {
	const [bookFilter, setBookFilter] = useState('')
	const [category, setCategory] = useState('')

    return (
            <div className="homepage-header">
				<h1>Linguini Books</h1> 
				<div className="searchbar">
					<select name="menu" id="menu" onChange={event => setCategory(event.target.value)}>
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
					<input type="text" placeholder='Search for a book, e.g Parry Hotter' 
						onChange={event => setBookFilter(event.target.value)}/>
				</div>
				<div className='login-box'>
					<FontAwesomeIcon icon={faUser} />
					<p>Sign in</p>
				</div>
				<div className='cart-box'>
					<FontAwesomeIcon icon={faCartShopping} />
					<p>Cart</p>
				</div>
            </div>
    )
}
export default Header