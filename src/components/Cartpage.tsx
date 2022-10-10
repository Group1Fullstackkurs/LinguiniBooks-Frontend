import "./Cartpage.css"
import { useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import cartState from "../atoms/cartState"
import userState from "../atoms/userState"
import { Link } from "react-router-dom";
import CartModel from "../Typescript/CartModel"
import totalCost from "../Typescript/totalCost";
import Book from "./BookPage/Book";
import Checkout from "./Checkout"

const Cartpage = () => {
	const [cart, setCart] = useRecoilState(cartState)
	const [isCheckout, setIsCheckout] = useState(false);
	const user = useRecoilValue(userState)
	
	const handlePlus = (cartItem: CartModel) => {
		let newCart: Array<CartModel> = JSON.parse(JSON.stringify(cart))
		newCart.map((item, i) => {
			if (item.book.id === cartItem.book.id && (cartItem.book.stock > item.quantity)) {
				newCart[i].quantity++;
				return;
			}
		});
		setCart(newCart);
	}

	const handleMinus = (cartItem: CartModel) => {
		let newCart: Array<CartModel> = JSON.parse(JSON.stringify(cart))
		newCart.map((item, i) => {
			if (item.book.id === cartItem.book.id) {
				if(cartItem.quantity != 0) {
					newCart[i].quantity--;
				} else {
					newCart.splice(i, 1);
				}
				return;
			}
		});
		setCart(newCart);
	}

	const handleCheckout = () =>{
		if(user.id != undefined){
			setIsCheckout(true)
		}else alert("Please login first to proceed to checkout");
	}

	let total = totalCost(cart);
	return (
		<div className="cart-container">
			<h2>Shopping Cart</h2>
			
			<div className="cart-itembox">
				{cart.map((cartItem) => (
					<div className="cart-item" key={cartItem.book.id}>
						<div className="item-btns">
							<button onClick={(event: React.MouseEvent<HTMLElement>) => handleMinus(cartItem)}>-</button>
							<button onClick={(event: React.MouseEvent<HTMLElement>) => handlePlus(cartItem)}>+</button>
						</div>
						<Book {...cartItem.book}/>
						<p>{cartItem.book.price}</p>
						<p>Quantity: {cartItem.quantity}</p>
					</div>
				))}
			</div>

			<h2>Total sum: €{total}</h2>
			<div className="cart-btns">
				<button onClick={(event: React.MouseEvent<HTMLElement>) =>
                handleCheckout()}>Proceed to checkout</button>
				<Link to="/">
				<button>Continue shopping</button>
				</Link>
				
			</div>

			<Checkout isCheckout={isCheckout} setIsCheckout={setIsCheckout} />
		</div>
	)
}
export default Cartpage;