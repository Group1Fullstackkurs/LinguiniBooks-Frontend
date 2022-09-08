import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './Header.css'

function Header() {

    return (
            <div className="homepage-header">
				<h1>LINGUINI BOOKS</h1> 
				<div className="searchbar">
					<select name="menu" id="menu">
						<option value="selected">Category</option>
						<option value="search">Adventure</option>
						<option value="search">Classics</option>
						<option value="search">Comic Book</option>
						<option value="search">Detective</option>
						<option value="search">Fantasy</option>
						<option value="search">Horror</option>
						<option value="search">Romance</option>
					</select>
					<input type="text" placeholder="Search for a book, e.g Parry Hotter" />
				</div>
				<div className='login-box'>
					<FontAwesomeIcon icon={faUser} />
					<p>Log In</p>
				</div>
				<div className='cart-box'>
					<FontAwesomeIcon icon={faCartShopping} />
					<p>Cart</p>
				</div>
            
            </div>
    )
}
export default Header